import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [role, setRole] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedRole = localStorage.getItem('role');
    const token = localStorage.getItem('jwtToken'); 
    
    if (token) {
      setIsLoggedIn(true); 
      setRole(storedRole);
    }
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('jwtToken'); 
    localStorage.removeItem('role');
    setIsLoggedIn(false); 
    navigate('/'); 
  };

  return (
    <nav className="bg-gradient-to-r from-blue-900 via-indigo-700 to-purple-500 p-4 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wide">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-500">
            College Management Portal
          </span>
        </h1>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-8 h-8 text-white transition-transform duration-300 transform hover:scale-110"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isOpen
                    ? 'M6 18L18 6M6 6l12 12'
                    : 'M4 6h16M4 12h16m-7 6h7'
                }
              />
            </svg>
          </button>
        </div>
        <ul
          className={`md:flex md:space-x-8 md:items-center ${
            isOpen ? 'block' : 'hidden'
          } md:block mt-4 md:mt-0 transition-opacity duration-300 ease-in-out`}
        >
          <li>
            <Link
              to="/"
              className="block py-2 text-lg font-semibold hover:text-yellow-300 transition duration-300 transform hover:scale-105 md:py-0"
            >
              Home
            </Link>
          </li>
          {role === 'College' && (
            <li>
              <Link
                to="/courses"
                className="block py-2 text-lg font-semibold hover:text-yellow-300 transition duration-300 transform hover:scale-105 md:py-0"
              >
                Courses
              </Link>
            </li>
          )}
          {role === 'College' || role === 'Faculty' ? (
            <>
              <li>
                <Link
                  to="/students"
                  className="block py-2 text-lg font-semibold hover:text-yellow-300 transition duration-300 transform hover:scale-105 md:py-0"
                >
                  Students
                </Link>
              </li>
              <li>
                <Link
                  to="/faculty"
                  className="block py-2 text-lg font-semibold hover:text-yellow-300 transition duration-300 transform hover:scale-105 md:py-0"
                >
                  Faculty
                </Link>
              </li>
            </>
          ) : null}
          {role === 'Faculty' && (
            <>
              <li>
                <Link
                  to="/attendance"
                  className="block py-2 text-lg font-semibold hover:text-yellow-300 transition duration-300 transform hover:scale-105 md:py-0"
                >
                  Attendance
                </Link>
              </li>
              <li>
                <Link
                  to="/assignment"
                  className="block py-2 text-lg font-semibold hover:text-yellow-300 transition duration-300 transform hover:scale-105 md:py-0"
                >
                  Assignment
                </Link>
              </li>
            </>
          )}
          {role === 'College' && (
            <li>
              <Link to="/collegedashboard" className="block py-2 text-lg font-semibold">
                College Admin Dashboard
              </Link>
            </li>
          )}
          {!isLoggedIn && (
            <li>
              <Link
                to="/login"
                className="block py-2 text-lg font-semibold bg-white text-blue-700 px-4 py-2 rounded-full hover:bg-gray-200 transition duration-300 transform hover:scale-110 md:py-0"
              >
                Login
              </Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <button
                onClick={handleLogout}
                className="block py-2 text-lg font-semibold bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition duration-300 transform hover:scale-110 md:py-0"
              >
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
