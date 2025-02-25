import React from 'react';
import { Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white py-8 px-4 md:px-6 border-t">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <img
              src="https://i.ibb.co/pm8ghHP/image-6-1.png"
              alt="RxOcean Logo"
              className="h-auto w-[96px] mb-2"
            />
            <p className="text-gray-600 max-w-sm">
              Providing quality healthcare services for a healthier tomorrow.
            </p>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="font-semibold mb-2">Contact Us</h4>
            <p className="text-gray-600">Phone: +91-9891544850</p>
            <h4 className="font-semibold mt-4 mb-2">Locations</h4>
            <p className="text-gray-600">Sector 4, Gurgaon</p>
            <p className="text-gray-600">DLF Phase 4, Gurgaon</p>
            <p className="text-gray-600">Greater Kailash 2, New Delhi</p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-semibold mb-2">Quick Links</h4>
            <ul className="flex items-center md:items-start flex-col gap-2 text-gray-600">
              <li><a href="#hero" className="hover:text-blue-600">About Us</a></li>
              <li><a href="#collaboration" className="hover:text-blue-600">Collaborations</a></li>
              <li><a href="#services" className="hover:text-blue-600">Services</a></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-semibold mb-2">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/RxOcean/" className="text-gray-600 hover:text-blue-600">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/niti_munjal/" className="text-gray-600 hover:text-blue-600">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/@NitiMunjal" className="text-gray-600 hover:text-blue-600">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/weightlossconsultant/" className="text-gray-600 hover:text-blue-600">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 pt-4 border-t text-center text-gray-600">
          <p>&copy; 2025 RxOcean. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;