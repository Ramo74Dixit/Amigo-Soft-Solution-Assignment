import React from 'react';
import { FaBuilding, FaChartLine, FaDollarSign, FaUserGraduate, FaBriefcase } from 'react-icons/fa';

const Placement = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white font-sans">
      <header className="bg-cover bg-center bg-no-repeat relative h-screen" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?corporate,office')" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900 via-black to-transparent opacity-80"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 animate-pulse">Welcome to the Placement Cell</h1>
          <p className="text-lg md:text-2xl text-gray-200 max-w-xl mx-auto">Bridging the gap between students and their dream careers with world-class placement opportunities.</p>
          <a href="#overview" className="mt-10 px-8 py-4 bg-purple-700 hover:bg-purple-500 text-white text-lg rounded-full transition-all duration-300">Explore More</a>
        </div>
      </header>
      <section id="overview" className="py-24 bg-gradient-to-tl from-purple-900 via-black to-gray-900 text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-white">What We Do</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">Our mission is to connect top companies with students, ensuring each student finds their perfect career path. Through partnerships, workshops, and recruitment drives, we prepare students to step into the corporate world with confidence.</p>
        </div>
      </section>
      <section id="stats" className="py-24 bg-gradient-to-r from-gray-900 via-purple-900 to-black">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-extrabold text-white mb-12">Placement Stats</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-10 bg-opacity-20 bg-white backdrop-blur-xl text-white rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <FaBuilding className="text-6xl text-purple-400 mx-auto mb-6" />
              <h3 className="text-5xl font-extrabold">200+</h3>
              <p className="text-xl mt-2">Top Recruiters</p>
            </div>
            <div className="p-10 bg-opacity-20 bg-white backdrop-blur-xl text-white rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <FaChartLine className="text-6xl text-purple-400 mx-auto mb-6" />
              <h3 className="text-5xl font-extrabold">95%</h3>
              <p className="text-xl mt-2">Placement Rate</p>
            </div>
            <div className="p-10 bg-opacity-20 bg-white backdrop-blur-xl text-white rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <FaDollarSign className="text-6xl text-purple-400 mx-auto mb-6" />
              <h3 className="text-5xl font-extrabold">$120K</h3>
              <p className="text-xl mt-2">Highest Package</p>
            </div>
          </div>
        </div>
      </section>
      <section id="students" className="py-24 bg-black">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-10">For Students</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-10 bg-gradient-to-r from-purple-800 to-purple-600 text-white rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <FaUserGraduate className="text-5xl text-white mb-6" />
              <h3 className="text-3xl font-bold">Placement Process</h3>
              <p className="text-lg text-gray-200 mt-4">From resume creation to final interviews, our placement process is designed to help you succeed at every step.</p>
            </div>
            <div className="p-10 bg-gradient-to-r from-purple-800 to-purple-600 text-white rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <FaBriefcase className="text-5xl text-white mb-6" />
              <h3 className="text-3xl font-bold">Resources</h3>
              <p className="text-lg text-gray-200 mt-4">Access a wealth of resources including mock interviews, resume building workshops, and personalized career counseling.</p>
            </div>
          </div>
        </div>
      </section>
      <section id="recruiters" className="py-24 bg-gradient-to-r from-gray-900 via-black to-purple-900 text-white">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-10">For Recruiters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-10 bg-opacity-20 bg-white backdrop-blur-xl text-white rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-3xl font-bold mb-4">Why Recruit From Us?</h3>
              <p className="text-lg text-gray-300">Our students are trained to meet industry requirements with their strong technical knowledge and interpersonal skills.</p>
            </div>
            <div className="p-10 bg-opacity-20 bg-white backdrop-blur-xl text-white rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-3xl font-bold mb-4">Recruitment Process</h3>
              <p className="text-lg text-gray-300">Easily navigate through our seamless recruitment process to hire the best talent from our college.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-gradient-to-r from-purple-800 via-black to-gray-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-12">What People Are Saying</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-10 bg-opacity-20 bg-white backdrop-blur-xl text-white rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <p className="text-lg text-gray-200">"The Placement Cell helped me land my dream job in the tech industry with excellent guidance and support."</p>
              <p className="mt-6 text-purple-400 font-bold">- Alumni 2021</p>
            </div>
            <div className="p-10 bg-opacity-20 bg-white backdrop-blur-xl text-white rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <p className="text-lg text-gray-200">"Great talent pool and a smooth recruitment process. Definitely a college to recruit from!"</p>
              <p className="mt-6 text-purple-400 font-bold">- HR Manager, Top Tech Company</p>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="py-24 bg-black text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-10">Get in Touch</h2>
          <p className="text-lg text-gray-300 mb-6">Reach out to our Placement Cell team for any queries or support.</p>
          <div className="mt-6">
            <p>Email: <a href="mailto:placement@college.edu" className="text-purple-400 underline">placement@college.edu</a></p>
            <p>Phone: <a href="tel:+1234567890" className="text-purple-400 underline">+123 456 7890</a></p>
          </div>
        </div>
      </section>
      <footer className="bg-black py-6">
        <div className="container mx-auto text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} College Name. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Placement;
