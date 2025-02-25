import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const mobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    setIsMobile(mobile);
  }, []);

  const handleContactClick = () => {
    if (isMobile) {
      window.location.href = 'tel:+1234567890';
    } else {
      document.getElementById('footer').scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full bg-white shadow-sm z-50 px-4 md:px-6 py-2">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="https://i.ibb.co/pm8ghHP/image-6-1.png" 
            alt="RxOcean Logo" 
            className="h-16 w-auto object-contain md:h-20 lg:h-24"
          />
        </div>
        
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Home</a>
          <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">Services</a>
          <a href="#collaboration" className="text-gray-600 hover:text-blue-600 transition-colors">Collaboration</a>
          <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors">Testimonials</a>
        </div>

        <button
          onClick={handleContactClick}
          className="hidden md:block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
        >
          Contact Us
        </button>

        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="w-6 h-6 text-gray-600" /> : <Menu className="w-6 h-6 text-gray-600" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-4">
          <div className="flex flex-col space-y-4">
            <a href="#" className="text-gray-600 hover:text-blue-600">Home</a>
            <a href="#services" className="text-gray-600 hover:text-blue-600">Services</a>
            <a href="#collaboration" className="text-gray-600 hover:text-blue-600">Collaboration</a>
            <a href="#testimonials" className="text-gray-600 hover:text-blue-600">Testimonials</a>
            <button
              onClick={handleContactClick}
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors mt-4"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;