import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';  // Hook for navigation

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();  // Use navigate hook for redirection

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleEnrollNowClick = () => {
    navigate('/signup');  // Navigate to Signup page when Enroll Now is clicked
  };

  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-2xl font-bold text-blue-700">
          <span className="text-blue-500">NLITE</span>
          <span className="block text-xs font-medium leading-4">LEARN INNOVATE THRIVE</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          <li><a href="/" className="hover:text-blue-500">Home</a></li>
          <li><a href="/about" className="hover:text-blue-500">About</a></li>
          <li><a href="courses" className="hover:text-blue-500">Courses</a></li>
          <li><a href="/blogs" className="hover:text-blue-500">Blogs</a></li>
          <li><a href="/contact" className="hover:text-blue-500">Contact Us</a></li>
        </ul>

        {/* Enroll Button (hidden on mobile) */}
        <div className="hidden md:block">
          <button
            onClick={handleEnrollNowClick}  // On click navigate to signup
            className="bg-indigo-900 text-white px-6 py-2 rounded-md hover:bg-indigo-800 transition duration-300"
          >
            Enroll Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-3 text-center text-gray-700 font-medium">
          <a href="#" className="block hover:text-blue-500">Home</a>
          <a href="#" className="block hover:text-blue-500">About</a>
          <a href="#" className="block hover:text-blue-500">Courses</a>
          <a href="#" className="block hover:text-blue-500">Blogs</a>
          <a href="#" className="block hover:text-blue-500">Contact Us</a>
          <button
            onClick={handleEnrollNowClick}
            className="bg-indigo-900 text-white px-6 py-2 mt-2 rounded-md hover:bg-indigo-800 transition duration-300"
          >
            Enroll Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
