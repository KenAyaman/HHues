
import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { currentTheme } = useTheme();

  return (
    <footer 
      className="py-12 px-6 text-center"
      style={{ backgroundColor: currentTheme.background }}
    >
      <p 
        className="text-xl font-medium mb-6"
        style={{ color: currentTheme.primary }}
      >
        Healing the heart, one hue at a time.
      </p>
      
      <ul className="flex flex-wrap justify-center gap-6 mb-6">
        <li>
          <Link 
            to="/" 
            className="text-gray-600 hover:opacity-80 transition-opacity font-medium"
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            to="/session" 
            className="text-gray-600 hover:opacity-80 transition-opacity font-medium"
          >
            Book a Session
          </Link>
        </li>
        <li>
          <Link 
            to="/hue-check" 
            className="text-gray-600 hover:opacity-80 transition-opacity font-medium"
          >
            Support
          </Link>
        </li>
        <li>
          <Link 
            to="/contact" 
            className="text-gray-600 hover:opacity-80 transition-opacity font-medium"
          >
            Contact
          </Link>
        </li>
      </ul>
      
      <p className="text-gray-500 text-sm">
        &copy; 2025 HeartHues. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
