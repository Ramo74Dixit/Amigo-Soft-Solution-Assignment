import React from 'react';
import { Link } from 'react-router-dom';

const EventPage = () => {
  return (
    <div className="relative min-h-screen p-10 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-800 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <svg className="absolute bottom-0 w-full h-full opacity-70" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#6B6DBF" fillOpacity="0.4" d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,160C672,160,768,192,864,213.3C960,235,1056,245,1152,240C1248,235,1344,213,1392,202.7L1440,192L1440,320L0,320Z"></path>
        </svg>
        <svg className="absolute top-0 w-full h-80 opacity-40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#4F46E5" fillOpacity="0.3" d="M0,224L40,213.3C80,203,160,181,240,170.7C320,160,400,160,480,165.3C560,171,640,181,720,181.3C800,181,880,171,960,144C1040,117,1120,75,1200,58.7C1280,43,1360,53,1400,58.7L1440,64L1440,320L0,320Z"></path>
        </svg>
      </div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-full opacity-30 blur-3xl z-0"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full opacity-20 blur-3xl z-0"></div>
      
      <div className="relative z-10">
        <h1 className="text-white text-6xl font-extrabold text-center mb-16 tracking-wider">
          Upcoming Events
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {[
            { name: 'College Festival', image: 'https://cdn.prod.website-files.com/620e4101b2ce12a1a6bff0e8/65e80f722774b7ae68fbecdb_samantha-gades-fIHozNWfcvs-unsplash%20(1).jpg' },
            { name: 'Annual Sports Meet', image: 'https://media.istockphoto.com/id/160179759/photo/group-of-crazy-fans-at-college-football-stadium-tailgate-party.jpg?s=612x612&w=0&k=20&c=QDP4Cxu3yuRTLPC0kCE0KWVf-CBR7BAmp24CDgGm0js=' },
            { name: 'Science Fair', image: 'https://c8.alamy.com/comp/E3KNW7/science-fair-students-waiting-by-their-research-posters-to-be-judged-E3KNW7.jpg' },
            { name: 'Cultural Night', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGsw1WzXhcwgvcIVtAKAKckJof0Ji_GeZmqg&s' }
          ].map((event, index) => (
            <div key={index} className="relative bg-white shadow-2xl rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 group">
              <img src={event.image} alt={event.name} className="w-full h-56 object-cover filter brightness-75 group-hover:brightness-100 transition-all duration-300"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 p-6 text-white z-10">
                <h3 className="text-3xl font-bold">{event.name}</h3>
                <p className="text-gray-200">Date: 2024-09-30</p>
                <p className="text-gray-200">Entry Fee: $20</p>
                <button className="mt-4 bg-purple-600 text-white py-2 px-4 rounded-full hover:bg-purple-800 transition-colors duration-300 shadow-lg">
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>
        <Link
          to="/add-event"
          className="absolute bottom-10 right-10 bg-gradient-to-r from-pink-500 to-yellow-500 text-white py-3 px-8 rounded-full shadow-2xl hover:from-pink-600 hover:to-yellow-600 transition-transform duration-300 transform hover:scale-110 z-10"
        >
          Add Event
        </Link>
      </div>
    </div>
  );
};

export default EventPage;
