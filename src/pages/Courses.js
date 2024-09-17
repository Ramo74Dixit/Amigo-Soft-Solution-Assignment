import React from 'react';
import { Link } from 'react-router-dom';
const courses = [
  {
    id: 1,
    title: 'B.Tech',
    description: 'Bachelor of Technology - An undergraduate degree in engineering and technology.',
    duration: '4 years',
    fee: '$40,000',
    image: 'https://play-lh.googleusercontent.com/y5cmaOfuNBjodN5TzXgHSHF8hQKDfwKlMuCfSytQaEMt0xDSFjjgfw-ag1c3sypkcw', // B.Tech Image
    link: '/course/btech',
  },
  {
    id: 2,
    title: 'M.Tech',
    description: 'Master of Technology - A postgraduate degree focusing on advanced technical skills.',
    duration: '2 years',
    fee: '$30,000',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfXwKJLPnUUoSSCEZjK3TN7onhFS_qHH6TGrQjxnplecUSpa5lEl_s8j1Arm58b1ZLEWQ&usqp=CAU', // M.Tech Image
    link: '/course/mtech',
  },
  {
    id: 3,
    title: 'BCA',
    description: 'Bachelor of Computer Applications - An undergraduate degree in computer applications.',
    duration: '3 years',
    fee: '$25,000',
    image: 'https://krupanidhi.edu.in/blog/wp-content/uploads/2024/03/image1.jpg', // BCA Image
    link: '/course/bca',
  },
  {
    id: 4,
    title: 'BBA',
    description: 'Bachelor of Business Administration - An undergraduate degree focusing on business management.',
    duration: '3 years',
    fee: '$20,000',
    image: 'https://mitwpu.edu.in/uploads/blog/A%20Guide%20to%20Choosing%20the%20Right%20BBA%20Program.webp', // BBA Image
    link: '/course/bba',
  },
  {
    id: 5,
    title: 'MBA',
    description: 'Master of Business Administration - A postgraduate degree focusing on advanced business management skills.',
    duration: '2 years',
    fee: '$50,000',
    image: 'https://play-lh.googleusercontent.com/UjB6m2oZMMOHo5kxJpT9bbZ1oeFppwSVyJ3TQIk7qBcelZkkDgkAHVxrsePY7jjQTSQ', // MBA Image
    link: '/course/mba',
  },
];

const Courses = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://www.vijaytechzone.in/assets/img/page-title/web-design-course-in-trichy.png)', filter: 'brightness(0.6)' }}></div>
      <div className="relative bg-white bg-opacity-60 p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-8 text-gray-800 text-center">Available Courses</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map(course => (
            <div key={course.id} className="bg-white bg-opacity-70 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2 text-gray-800">{course.title}</h2>
                <p className="text-gray-700 mb-4">{course.description}</p>
                <p className="text-gray-600 mb-2"><strong>Duration:</strong> {course.duration}</p>
                <p className="text-gray-600 mb-4"><strong>Fee:</strong> {course.fee}</p>
                <Link to={course.link} className="text-blue-500 hover:text-blue-700 font-semibold">Learn More</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
