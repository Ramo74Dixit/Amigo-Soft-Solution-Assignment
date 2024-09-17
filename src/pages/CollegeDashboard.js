import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserGraduate, FaChalkboardTeacher, FaBook, FaCalendarAlt, FaBriefcase, FaSignOutAlt } from 'react-icons/fa';

const dummyData = {
  students: 1200,
  faculty: 80,
  courses: 45,
  events: 5,
  placements: 20,
};

const CollegeDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-teal-500 text-white p-4 shadow-md flex justify-between items-center">
        <h1 className="text-3xl font-bold">College Dashboard</h1>
        <button 
          onClick={handleLogout} 
          className="flex items-center bg-teal-600 hover:bg-teal-700 px-4 py-2 rounded text-white"
        >
          <FaSignOutAlt className="mr-2" />
          Logout
        </button>
      </header>
      <div className="flex flex-1">
        <nav className="w-1/4 bg-gray-800 text-white p-4 space-y-4">
          <ul>
            <li className="flex items-center mb-4">
              <FaUserGraduate className="mr-3" />
              <Link to="/college/students" className="hover:bg-teal-600 p-2 rounded block">Manage Students</Link>
            </li>
            <li className="flex items-center mb-4">
              <FaChalkboardTeacher className="mr-3" />
              <Link to="/college/faculty" className="hover:bg-teal-600 p-2 rounded block">Manage Faculty</Link>
            </li>
            <li className="flex items-center mb-4">
              <FaBook className="mr-3" />
              <Link to="/college/courses" className="hover:bg-teal-600 p-2 rounded block">Manage Courses</Link>
            </li>
            <li className="flex items-center mb-4">
              <FaCalendarAlt className="mr-3" />
              <Link to="/college/events" className="hover:bg-teal-600 p-2 rounded block">Events & Extracurriculars</Link>
            </li>
            <li className="flex items-center mb-4">
              <FaBriefcase className="mr-3" />
              <Link to="/college/placements" className="hover:bg-teal-600 p-2 rounded block">Placements</Link>
            </li>
          </ul>
        </nav>
        <main className="flex-1 p-6 bg-gray-50">
          <h2 className="text-2xl font-semibold mb-6">Welcome, College Admin</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition">
              <h3 className="text-lg font-semibold mb-4">Total Students</h3>
              <p className="text-2xl font-bold text-teal-600">{dummyData.students}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition">
              <h3 className="text-lg font-semibold mb-4">Total Faculty</h3>
              <p className="text-2xl font-bold text-teal-600">{dummyData.faculty}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition">
              <h3 className="text-lg font-semibold mb-4">Total Courses</h3>
              <p className="text-2xl font-bold text-teal-600">{dummyData.courses}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition">
              <h3 className="text-lg font-semibold mb-4">Upcoming Events</h3>
              <p className="text-2xl font-bold text-teal-600">{dummyData.events}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition">
              <h3 className="text-lg font-semibold mb-4">Placement Drives</h3>
              <p className="text-2xl font-bold text-teal-600">{dummyData.placements}</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition">
            <h3 className="text-lg font-semibold mb-4">Recent Activities</h3>
            <ul>
              <li className="flex items-center mb-3">
                <div className="w-2.5 h-2.5 bg-teal-500 rounded-full mr-3"></div>
                <p className="text-gray-700">Added 10 new courses to the catalog</p>
              </li>
              <li className="flex items-center mb-3">
                <div className="w-2.5 h-2.5 bg-teal-500 rounded-full mr-3"></div>
                <p className="text-gray-700">Scheduled 3 new events for this semester</p>
              </li>
              <li className="flex items-center">
                <div className="w-2.5 h-2.5 bg-teal-500 rounded-full mr-3"></div>
                <p className="text-gray-700">Completed placement drive with 15 companies</p>
              </li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CollegeDashboard;
