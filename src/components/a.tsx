import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white py-8 px-4 md:px-6 border-t">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-blue-600 mb-2">
            <img 
    src="https://i.ibb.co/pm8ghHP/image-6-1.png" 
    alt="RxOcean Logo" 
    className="h-full w-[96px] inline-block"
  />
            </h3>
            <p className="text-gray-600">
              Providing quality healthcare services for a healthier tomorrow.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-8">
            <ul className="flex gap-6">
              <li><a href="#" className="text-gray-600 hover:text-blue-600">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Doctors</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Contact</a></li>
            </ul>

            <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/RxOcean/" className="text-gray-600 hover:text-blue-600">
                <Facebook className="w-5 h-5" />
              </a>
              {/* <a href="#" className="text-gray-600 hover:text-blue-600">
                <Twitter className="w-5 h-5" />
              </a> */}
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
        </div>

        <div className="mt-8 pt-4 border-t text-center text-gray-600">
          <p>&copy; 2024 RxOcean. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

