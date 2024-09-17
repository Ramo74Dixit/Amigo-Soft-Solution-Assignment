import React, { useState, useEffect } from 'react';

const AssignmentPage = () => {
  const [file, setFile] = useState(null);
  const [subject, setSubject] = useState('');
  const [assignments, setAssignments] = useState([]);
  const [error, setError] = useState('');
  const fetchAssignments = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/assignments', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`,
        },
      });
  
      if (!response.ok) {
        const errorText = await response.text(); 
        throw new Error(`Failed to fetch assignments: ${errorText}`);
      }
  
      const data = await response.json();
      setAssignments(data);
    } catch (error) {
      console.error('Error fetching assignments:', error); 
      setError(error.message);
    }
  };
  
  useEffect(() => {
    fetchAssignments();
  }, []);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const formData = new FormData();
    formData.append('file', file); 
    formData.append('subject', subject);
  
    try {
      const response = await fetch('http://localhost:5000/api/assignments/upload', {  
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`,  
        },
        body: formData,  
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to upload assignment: ${errorText}`);
      }
  
      const data = await response.json();
      console.log('Success:', data);
      fetchAssignments();
    } catch (error) {
      console.error('Error uploading assignment:', error);
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-400 p-8">
      <div className="max-w-4xl mx-auto p-8 bg-white bg-opacity-90 rounded-lg shadow-2xl border-2 border-purple-300">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">Upload Assignment</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-700 text-lg font-semibold">Subject</label>
            <select
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 sm:text-base"
              required
            >
              <option value="">Select a subject</option>
              <option value="Physics">Physics</option>
              <option value="Chemistry">Chemistry</option>
              <option value="Maths">Maths</option>
              <option value="Computer Science">Computer Science</option>
              <option value="English">English</option>
            </select>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-lg font-semibold">Assignment File</label>
            <input
              type="file"
              name="file" 
              onChange={handleFileChange}
              className="mt-2 block w-full text-sm text-gray-500 file:mr-4 file:py-3 file:px-4 file:border file:border-gray-300 file:rounded-md file:text-sm file:font-medium file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200 transition-all duration-300"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-3 rounded-lg shadow-lg hover:from-purple-700 hover:to-pink-600 transition duration-300"
          >
            Upload Assignment
          </button>
        </form>

        <h2 className="text-3xl font-semibold mt-12 mb-6 text-gray-800">Uploaded Assignments</h2>
        <ul>
          {assignments.map((assignment) => {
            const fileName = assignment.fileUrl.split('/').pop(); 
            return (
              <li key={assignment._id} className="mb-4 border-b border-gray-300 pb-4">
                <a
                  href={`http://localhost:5000/uploads/assignments/${fileName}`} 
                  className="text-lg text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {assignment.subject}
                </a>
                <p className="text-gray-600">Uploaded on: {new Date(assignment.uploadedAt).toLocaleDateString()}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default AssignmentPage;
