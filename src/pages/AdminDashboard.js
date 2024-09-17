import React from 'react';
import { Link } from 'react-router-dom';

const dummyData = {
  students: 1200,
  faculty: 80,
  courses: 45,
  reports: 10,
};

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-teal-500 text-white p-4 shadow-md">
        <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
      </header>
      <div className="flex flex-1">
        <nav className="w-1/4 bg-gray-800 text-white p-4">
          <ul>
            <li className="mb-4">
              <Link to="/admin/students" className="hover:bg-teal-600 p-2 rounded">Manage Students</Link>
            </li>
            <li className="mb-4">
              <Link to="/admin/faculty" className="hover:bg-teal-600 p-2 rounded">Manage Faculty</Link>
            </li>
            <li className="mb-4">
              <Link to="/admin/courses" className="hover:bg-teal-600 p-2 rounded">Manage Courses</Link>
            </li>
            <li className="mb-4">
              <Link to="/admin/reports" className="hover:bg-teal-600 p-2 rounded">Generate Reports</Link>
            </li>
            <li>
              <Link to="/logout" className="hover:bg-teal-600 p-2 rounded">Logout</Link>
            </li>
          </ul>
        </nav>
        <main className="flex-1 p-6">
          <h2 className="text-xl font-semibold mb-6">Welcome, Admin</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-lg font-semibold mb-4">Total Students</h3>
              <p className="text-2xl font-bold text-teal-600">{dummyData.students}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-lg font-semibold mb-4">Total Faculty</h3>
              <p className="text-2xl font-bold text-teal-600">{dummyData.faculty}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-lg font-semibold mb-4">Total Courses</h3>
              <p className="text-2xl font-bold text-teal-600">{dummyData.courses}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-lg font-semibold mb-4">Reports Generated</h3>
              <p className="text-2xl font-bold text-teal-600">{dummyData.reports}</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-4">Recent Activities</h3>
            <ul>
              <li className="flex items-center mb-3">
                <div className="w-2.5 h-2.5 bg-teal-500 rounded-full mr-3"></div>
                <p className="text-gray-700">Added 5 new faculty members</p>
              </li>
              <li className="flex items-center mb-3">
                <div className="w-2.5 h-2.5 bg-teal-500 rounded-full mr-3"></div>
                <p className="text-gray-700">Updated course catalog with new courses</p>
              </li>
              <li className="flex items-center">
                <div className="w-2.5 h-2.5 bg-teal-500 rounded-full mr-3"></div>
                <p className="text-gray-700">Generated 3 new performance reports</p>
              </li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
