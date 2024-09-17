import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [role, setRole] = useState('Admin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { email, password, role };

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log(result);

      if (response.ok) {
        localStorage.setItem('jwtToken', result.token.trim()); 
        localStorage.setItem('role', role);
        navigate('/');
      } else {
        alert(result.message || 'Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred during login');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 to-blue-500 p-4">
      <div className="relative z-10 max-w-lg w-full p-8 bg-gray-900 rounded-lg shadow-lg border border-gray-700">
        <h2 className="text-center text-3xl font-semibold mb-8 text-white">Login</h2>
        <div className="flex justify-center space-x-4 mb-8">
          {['Admin', 'College', 'Student', 'Faculty'].map((roleOption) => (
            <button
              key={roleOption}
              className={`px-6 py-3 rounded-lg text-white font-medium transition-transform ${role === roleOption ? 'bg-blue-500 scale-105' : 'bg-gray-600'} hover:bg-blue-400`}
              onClick={() => setRole(roleOption)}
            >
              {roleOption}
            </button>
          ))}
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-200 text-sm font-medium">Email</label>
            <input
              type="email"
              className="w-full px-4 py-3 border border-gray-600 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-900 text-white placeholder-gray-400"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-200 text-sm font-medium">Password</label>
            <input
              type="password"
              className="w-full px-4 py-3 border border-gray-600 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-900 text-white placeholder-gray-400"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
