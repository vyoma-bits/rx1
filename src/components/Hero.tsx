import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import hero from "../../utils/images/hero_q.png";

const titleAnimation = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.1,
    },
  },
};

const wordAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const Hero = () => {
  const title = "Welcome to a Healthier You with Dt. Niti Munjal".split(" ");

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect if the device is mobile
    const mobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    setIsMobile(mobile);
  }, []);

  const handleClick = () => {
    if (isMobile) {
      window.location.href = 'tel:+1234567890'; // Replace with the phone number you want to call
    } else {
      document.getElementById('footer').scrollIntoView({ behavior: 'smooth' }); // Scroll to footer
    }
  };

  return (
    <div className="pt-24 pb-12 px-4 md:px-6 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-4"
            initial="hidden"
            animate="visible"
            variants={titleAnimation}
          >
            {title.map((word, index) => (
              <motion.span
                key={index}
                className="inline-block mr-2"
                variants={wordAnimation}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-lg text-gray-600 mb-8"
          >
            Transform your health with personalized, science-backed nutrition plans designed to help you reverse lifestyle diseases and achieve long-term wellness. With over 15 years of experience, I have helped hundreds of clients overcome diabetes, high blood pressure, PCOD, and obesity—all through the power of natural, wholesome food.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            {/* Conditionally render button based on device type */}
            <button 
              onClick={handleClick} 
              className="flex items-center justify-center gap-2 border border-gray-300 px-8 hover:[00008b] py-3 rounded-full hover:bg-gray-50 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>Contact Now</span>
            </button> 
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <img
            src={hero}
            alt="Nutritionist Consultation"
            className="rounded-2xl shadow-xl w-full h-auto object-cover" 
            style={{ maxHeight: "500px", width: "100%", objectPosition: "top" }}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="absolute inset-0 bg-blue-600/10 rounded-2xl"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
