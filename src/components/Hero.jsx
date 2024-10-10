import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion for animations
import heroImg from '../assets/hero-img.png'
const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-primary to-accent text-white h-screen">
      <div className="container mx-auto p-8">
        <section className="text-center py-20">
          {/* Hero Heading */}
          <motion.h1
            className="text-5xl font-extrabold leading-tight text-white font-sans"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Elevate Your Security
          </motion.h1>
          {/* Hero Subtitle */}
          <motion.p
            className="text-lg text-white mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Powerful cloud video surveillance designed for multi-site organizations.
          </motion.p>
          {/* Call-to-Action Button */}
          <motion.button
            className="mt-8 px-8 py-3 bg-accent text-primary rounded-lg shadow-lg hover:bg-accent-dark transition"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Get Started
          </motion.button>
        </section>
      </div>
      {/* Optional Background Decoration (optional, can add a subtle pattern or image) */}
      <div className="absolute inset-0 bg-opacity-30 bg-cover bg-center z-[-1]"></div>
    </div>
  );
};

export default Hero;
