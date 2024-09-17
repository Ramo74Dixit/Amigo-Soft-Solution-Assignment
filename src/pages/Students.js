import React, { useState, useEffect } from 'react';

const StudentsTable = () => {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState('');
  const [editingStudent, setEditingStudent] = useState(null); // Store student being edited
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    enrollmentNumber: '',
  });

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const token = localStorage.getItem('jwtToken');
        const response = await fetch('http://localhost:5000/api/auth/students', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch students: ${response.statusText}`);
        }

        const data = await response.json();
        setStudents(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchStudents();
  }, []);

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem('jwtToken');
      const response = await fetch(`http://localhost:5000/api/auth/students/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to delete student: ${response.statusText}`);
      }

      setStudents(students.filter((student) => student._id !== id));
    } catch (error) {
      setError(error.message);
    }
  };

  const handleEditClick = (student) => {
    setEditingStudent(student._id); 
    setFormData({
      name: student.name,
      email: student.email,
      enrollmentNumber: student.enrollmentNumber,
    });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSaveEdit = async () => {
    try {
      const token = localStorage.getItem('jwtToken');
      console.log('Form Data:', formData); // Debugging line
      console.log('Editing Student ID:', editingStudent); // Debugging line
  
      const response = await fetch(`http://localhost:5000/api/auth/students/${editingStudent}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Failed to update student: ${response.statusText}, ${errorData.message}`);
      }
  
      const updatedStudent = await response.json();
      setStudents(students.map((student) =>
        student._id === editingStudent ? updatedStudent : student
      ));
  
      setEditingStudent(null); 
      setFormData({
        name: '',
        email: '',
        enrollmentNumber: '',
      }); 
    } catch (error) {
      console.error('Error updating student:', error); 
      setError(error.message);
    }
  };
  
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black overflow-hidden">
      <div className="container mx-auto p-8 relative z-10">
        {error && <p className="text-red-400 text-center mb-4">{error}</p>}

        {!error && students.length > 0 && (
          <div className="overflow-x-auto bg-gray-800 shadow-2xl rounded-lg">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gradient-to-r from-gray-700 to-gray-900 text-white">
                  <th className="px-6 py-4 border-b-2 border-gray-700">ID</th>
                  <th className="px-6 py-4 border-b-2 border-gray-700">Name</th>
                  <th className="px-6 py-4 border-b-2 border-gray-700">Email</th>
                  <th className="px-6 py-4 border-b-2 border-gray-700">Enrollment Number</th>
                  <th className="px-6 py-4 border-b-2 border-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student._id} className="bg-gray-700 border-b hover:bg-gray-600 transition-colors duration-300">
                    <td className="px-6 py-4 text-center text-white">{student._id}</td>
                    <td className="px-6 py-4 text-center text-white">{student.name}</td>
                    <td className="px-6 py-4 text-center text-white">{student.email}</td>
                    <td className="px-6 py-4 text-center text-white">{student.enrollmentNumber}</td>
                    <td className="px-6 py-4 text-center">
                      <button
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 mr-2"
                        onClick={() => handleEditClick(student)}
                      >
                        Edit
                      </button>
                      <button
                        className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-300"
                        onClick={() => handleDelete(student._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {editingStudent && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center">
            <div className="bg-gray-800 p-6 rounded-lg max-w-sm w-full">
              <h2 className="text-xl text-white mb-4">Edit Student</h2>
              <div className="mb-4">
                <label className="text-white">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="block w-full p-2 bg-gray-700 text-white rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="text-white">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="block w-full p-2 bg-gray-700 text-white rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="text-white">Enrollment Number</label>
                <input
                  type="text"
                  name="enrollmentNumber"
                  value={formData.enrollmentNumber}
                  onChange={handleInputChange}
                  className="block w-full p-2 bg-gray-700 text-white rounded-md"
                />
              </div>
              <div className="flex justify-end">
                <button
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-300 mr-2"
                  onClick={handleSaveEdit}
                >
                  Save
                </button>
                <button
                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-300"
                  onClick={() => setEditingStudent(null)} 
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentsTable;
