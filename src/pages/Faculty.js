import React, { useState, useEffect } from 'react';

const FacultyTable = () => {
  const [faculty, setFaculty] = useState([]);
  const [error, setError] = useState('');
  const [editingFaculty, setEditingFaculty] = useState(null); 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    employeeId: '',
  });

  useEffect(() => {
    const fetchFaculty = async () => {
      try {
        const token = localStorage.getItem('jwtToken');
        const response = await fetch('http://localhost:5000/api/auth/faculty', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch faculty: ${response.statusText}`);
        }

        const data = await response.json();
        setFaculty(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchFaculty();
  }, []);

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem('jwtToken');
      const response = await fetch(`http://localhost:5000/api/auth/faculty/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to delete faculty: ${response.statusText}`);
      }

      setFaculty(faculty.filter((f) => f._id !== id));
    } catch (error) {
      setError(error.message);
    }
  };

  const handleEditClick = (f) => {
    setEditingFaculty(f._id); 
    setFormData({
      name: f.name,
      email: f.email,
      employeeId: f.employeeId,
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
      const response = await fetch(`http://localhost:5000/api/auth/faculty/${editingFaculty}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Failed to update faculty: ${response.statusText}, ${errorData.message}`);
      }

      const updatedFaculty = await response.json();
      setFaculty(faculty.map((f) =>
        f._id === editingFaculty ? updatedFaculty : f
      ));

      setEditingFaculty(null);
      setFormData({
        name: '',
        email: '',
        employeeId: '',
      });
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-800 via-blue-900 to-black overflow-hidden">
      <div className="container mx-auto p-8 relative z-10">
        {error && <p className="text-red-400 text-center mb-4">{error}</p>}

        {!error && faculty.length > 0 && (
          <div className="overflow-x-auto bg-blue-800 bg-opacity-70 backdrop-blur-md border border-blue-900 shadow-2xl rounded-lg">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gradient-to-r from-blue-700 to-blue-900 text-white">
                  <th className="px-6 py-4 border-b-2 border-blue-700">ID</th>
                  <th className="px-6 py-4 border-b-2 border-blue-700">Name</th>
                  <th className="px-6 py-4 border-b-2 border-blue-700">Email</th>
                  <th className="px-6 py-4 border-b-2 border-blue-700">Employee ID</th>
                  <th className="px-6 py-4 border-b-2 border-blue-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {faculty.map((f) => (
                  <tr key={f._id} className="bg-blue-700 border-b hover:bg-blue-600 transition-colors duration-300">
                    <td className="px-6 py-4 text-center text-white">{f._id}</td>
                    <td className="px-6 py-4 text-center text-white">{f.name}</td>
                    <td className="px-6 py-4 text-center text-white">{f.email}</td>
                    <td className="px-6 py-4 text-center text-white">{f.employeeId}</td>
                    <td className="px-6 py-4 text-center">
                      <button
                        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-300 mr-2"
                        onClick={() => handleEditClick(f)}
                      >
                        Edit
                      </button>
                      <button
                        className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-300"
                        onClick={() => handleDelete(f._id)}
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

        {editingFaculty && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center">
            <div className="bg-blue-800 bg-opacity-70 backdrop-blur-md p-6 rounded-lg max-w-sm w-full border border-blue-900">
              <h2 className="text-xl text-white mb-4">Edit Faculty</h2>
              <div className="mb-4">
                <label className="text-white">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="block w-full p-2 bg-blue-700 text-white rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="text-white">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="block w-full p-2 bg-blue-700 text-white rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="text-white">Employee ID</label>
                <input
                  type="text"
                  name="employeeId"
                  value={formData.employeeId}
                  onChange={handleInputChange}
                  className="block w-full p-2 bg-blue-700 text-white rounded-md"
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
                  onClick={() => setEditingFaculty(null)} 
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

export default FacultyTable;
