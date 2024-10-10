import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-primary text-2xl font-bold">
          SkyWatch <span className="text-accent">Security</span>
        </div>
        
        {/* Navigation Links for larger screens */}
        <nav className="hidden md:flex space-x-8 text-textPrimary">
          <a href="#about" className="hover:text-primary transition">About</a>
          <a href="#features" className="hover:text-primary transition">Features</a>
          <a href="#services" className="hover:text-primary transition">Services</a>
          <a href="#testimonials" className="hover:text-primary transition">Testimonials</a>
          <a href="#contact" className="hover:text-primary transition">Contact</a>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-primary focus:outline-none">
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Call to Action for larger screens */}
        <div className="hidden md:block">
          <a href="#demo" className="bg-primary text-white px-4 py-2.5 rounded-md hover:bg-accent transition">
            Get a Free Demo
          </a>
        </div>
      </div>

      {/* Mobile Menu (slide-in from right) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }} // Start off the screen to the right
            animate={{ x: 0 }} // Slide in when open
            exit={{ x: '100%' }} // Slide out when closed
            transition={{ type: 'tween', duration: 0.3 }} // Smooth slide animation
            className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg p-6 z-50 md:hidden"
          >
            <div className="flex justify-end items-center m-2">
              <button onClick={toggleMobileMenu} className="text-primary border border-primary rounded-full p-1.5 focus:outline-none">
                <FiX size={24} />
              </button>
            </div>
            <nav className="space-y-8 mt-5">
              <a href="#about" className="block text-textPrimary hover:text-primary transition">About</a>
              <a href="#features" className="block text-textPrimary hover:text-primary transition">Features</a>
              <a href="#services" className="block text-textPrimary hover:text-primary transition">Services</a>
              <a href="#testimonials" className="block text-textPrimary hover:text-primary transition">Testimonials</a>
              <a href="#contact" className="block text-textPrimary hover:text-primary transition">Contact</a>
              <a href="#demo" className="block bg-primary text-white py-2.5 px-4 mt-4 rounded-md text-center hover:bg-accent transition">
                Get a Free Demo
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;