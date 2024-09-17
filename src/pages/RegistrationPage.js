import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [role, setRole] = useState('Admin');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [affiliationCode, setAffiliationCode] = useState(''); 
  const [enrollmentNumber, setEnrollmentNumber] = useState(''); 
  const [department, setDepartment] = useState(''); 
  const [employeeId, setEmployeeId] = useState(''); 

  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const data = { name, email, password, role };
    if (role === 'College') {
      data.affiliationCode = affiliationCode;
    } else if (role === 'Student') {
      data.enrollmentNumber = enrollmentNumber;
      data.affiliationCode = affiliationCode; 
    } else if (role === 'Faculty') {
      data.department = department;
      data.affiliationCode = affiliationCode; 
      data.employeeId = employeeId; 
    }
  
    try {
      console.log('Form Data:', data);
  
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        console.log('Registration successful:', result);
        navigate('/login'); 
      } else {
        console.error('Registration failed:', result.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const renderInputs = () => {
    switch (role) {
      case 'Admin':
        return (
          <>
            <div className="mb-6">
              <label className="block text-gray-200 text-sm font-medium">Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-600 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-900 text-white placeholder-gray-400"
                placeholder="Admin Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-200 text-sm font-medium">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-gray-600 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-900 text-white placeholder-gray-400"
                placeholder="Admin Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-200 text-sm font-medium">Password</label>
              <input
                type="password"
                className="w-full px-4 py-3 border border-gray-600 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-900 text-white placeholder-gray-400"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </>
        );
      case 'College':
        return (
          <>
            <div className="mb-6">
              <label className="block text-gray-200 text-sm font-medium">Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-600 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-900 text-white placeholder-gray-400"
                placeholder="College Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-200 text-sm font-medium">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-gray-600 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-900 text-white placeholder-gray-400"
                placeholder="College Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-200 text-sm font-medium">Affiliation Code</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-600 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-900 text-white placeholder-gray-400"
                placeholder="Affiliation Code"
                value={affiliationCode}
                onChange={(e) => setAffiliationCode(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-200 text-sm font-medium">Password</label>
              <input
                type="password"
                className="w-full px-4 py-3 border border-gray-600 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-900 text-white placeholder-gray-400"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </>
        );
      case 'Student':
        return (
          <>
            <div className="mb-6">
              <label className="block text-gray-200 text-sm font-medium">Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-600 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-900 text-white placeholder-gray-400"
                placeholder="Student Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-200 text-sm font-medium">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-gray-600 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-900 text-white placeholder-gray-400"
                placeholder="Student Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-200 text-sm font-medium">Affiliation Code</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-600 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-900 text-white placeholder-gray-400"
                placeholder="Affiliation Code"
                value={affiliationCode}
                onChange={(e) => setAffiliationCode(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-200 text-sm font-medium">Enrollment Number</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-600 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-900 text-white placeholder-gray-400"
                placeholder="Enrollment Number"
                value={enrollmentNumber}
                onChange={(e) => setEnrollmentNumber(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-200 text-sm font-medium">Password</label>
              <input
                type="password"
                className="w-full px-4 py-3 border border-gray-600 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-900 text-white placeholder-gray-400"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </>
        );
      case 'Faculty':
        return (
          <>
            <div className="mb-6">
              <label className="block text-gray-200 text-sm font-medium">Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-600 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-900 text-white placeholder-gray-400"
                placeholder="Faculty Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-200 text-sm font-medium">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-gray-600 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-900 text-white placeholder-gray-400"
                placeholder="Faculty Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-200 text-sm font-medium">Affiliation Code</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-600 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-900 text-white placeholder-gray-400"
                placeholder="Affiliation Code"
                value={affiliationCode}
                onChange={(e) => setAffiliationCode(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-200 text-sm font-medium">Department</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-600 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-900 text-white placeholder-gray-400"
                placeholder="Department"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-200 text-sm font-medium">Employee ID</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-600 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-900 text-white placeholder-gray-400"
                placeholder="Employee ID"
                value={employeeId}
                onChange={(e) => setEmployeeId(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-200 text-sm font-medium">Password</label>
              <input
                type="password"
                className="w-full px-4 py-3 border border-gray-600 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-900 text-white placeholder-gray-400"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-400 to-cyan-500 p-4">
      <div className="relative z-10 max-w-lg w-full p-8 bg-gray-900 rounded-lg shadow-lg border border-gray-700">
        <h2 className="text-center text-3xl font-semibold mb-8 text-white">Register</h2>

        <div className="flex justify-center space-x-4 mb-8">
          <button
            className={`px-6 py-3 rounded-lg text-white font-medium transition-transform ${role === 'Admin' ? 'bg-teal-500 scale-105' : 'bg-gray-600'} hover:bg-teal-400`}
            onClick={() => setRole('Admin')}
          >
            Admin
          </button>
          <button
            className={`px-6 py-3 rounded-lg text-white font-medium transition-transform ${role === 'College' ? 'bg-teal-500 scale-105' : 'bg-gray-600'} hover:bg-teal-400`}
            onClick={() => setRole('College')}
          >
            College
          </button>
          <button
            className={`px-6 py-3 rounded-lg text-white font-medium transition-transform ${role === 'Student' ? 'bg-teal-500 scale-105' : 'bg-gray-600'} hover:bg-teal-400`}
            onClick={() => setRole('Student')}
          >
            Student
          </button>
          <button
            className={`px-6 py-3 rounded-lg text-white font-medium transition-transform ${role === 'Faculty' ? 'bg-teal-500 scale-105' : 'bg-gray-600'} hover:bg-teal-400`}
            onClick={() => setRole('Faculty')}
          >
            Faculty
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {renderInputs()}

          <button
            type="submit"
            className="w-full bg-teal-500 text-white py-3 rounded-lg hover:bg-teal-600 transition duration-300"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
