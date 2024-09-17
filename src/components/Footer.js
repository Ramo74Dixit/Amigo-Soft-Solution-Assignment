import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-10 text-center">
      <div className="absolute top-0 left-0 w-24 h-24 bg-purple-400 rounded-full opacity-50 animate-float"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-400 rounded-full opacity-50 animate-float-slow"></div>
      
      <div className="relative z-10">
        <p className="text-xl font-semibold">College Management System</p>
        <p className="mt-2 text-sm">&copy; 2024. All rights reserved.</p>
        <div className="mt-6 flex justify-center space-x-6">
          <a href="#" className="text-white hover:text-gray-200 transition-colors">
            <FaFacebookF className="text-2xl" />
          </a>
          <a href="#" className="text-white hover:text-gray-200 transition-colors">
            <FaTwitter className="text-2xl" />
          </a>
          <a href="#" className="text-white hover:text-gray-200 transition-colors">
            <FaInstagram className="text-2xl" />
          </a>
          <a href="#" className="text-white hover:text-gray-200 transition-colors">
            <FaLinkedinIn className="text-2xl" />
          </a>
        </div>
        <p className="mt-4 text-sm italic">"Empowering Education through Technology"</p>
      </div>
    </footer>
  );
};

export default Footer;
