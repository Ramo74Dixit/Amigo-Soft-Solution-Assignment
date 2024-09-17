import React from 'react';
import { FaUserGraduate, FaChalkboardTeacher, FaCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-500 to-purple-600 py-24 text-center text-white overflow-hidden">
      <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center opacity-10"></div>
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <h2 className="text-6xl font-extrabold drop-shadow-lg animate-fadeIn">
          Welcome to the College Management System
        </h2>
        <p className="mt-6 text-lg font-light max-w-3xl mx-auto drop-shadow-md animate-fadeIn delay-2s">
          A centralized platform to efficiently manage everything—students, courses, faculty, attendance, and more. 
          Elevate the way your college operates with smart tools and seamless user experience.
        </p>
        <button className="mt-10 bg-white text-blue-600 font-bold px-10 py-4 rounded-full hover:bg-gray-100 transition-transform transform hover:scale-105 animate-bounce">
          <Link to='/register'>Get Started</Link>
        </button>
      </div>
      <div className="mt-16 relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
          <FaUserGraduate className="text-5xl text-white mb-4 mx-auto" />
          <h3 className="text-2xl font-semibold mb-3">Seamless Student Management</h3>
          <p className="text-gray-200">
            Track student progress, attendance, and personal records with ease using an intuitive interface.
          </p>
        </div>
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
          <FaCalendarAlt className="text-5xl text-white mb-4 mx-auto" />
          <h3 className="text-2xl font-semibold mb-3">Automate Course Scheduling</h3>
          <p className="text-gray-200">
            Effortlessly create, modify, and manage course schedules to improve learning outcomes.
          </p>
        </div>
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
          <FaChalkboardTeacher className="text-5xl text-white mb-4 mx-auto" />
          <h3 className="text-2xl font-semibold mb-3">Empower Your Faculty</h3>
          <p className="text-gray-200">
            Provide faculty with tools to manage their workload, assignments, and reports all in one platform.
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-400 rounded-full opacity-50 animate-float"></div>
      <div className="absolute top-0 right-0 w-48 h-48 bg-blue-400 rounded-full opacity-50 animate-float-slow"></div>
    </section>
  );
};

export default HeroSection;
