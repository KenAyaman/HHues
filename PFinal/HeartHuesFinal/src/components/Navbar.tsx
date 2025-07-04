
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { Palette, User } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const { currentTheme, themes, changeTheme } = useTheme();
  const [showThemeSelector, setShowThemeSelector] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-6">
      <div className="flex items-center justify-between w-full px-6">
        {/* Logo */}
        <Link 
          to="/" 
          className="text-l font-bold z-10 transition-all duration-300 hover:scale-105 px-5 py-2 bg-white/95 backdrop-blur-md rounded-full px-6 py-2 shadow-lg border border-white/30 text-gray-500"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          HeartHues
        </Link>

        {/* Navigation Menu - Centered */}
        <div className="flex-1 flex justify-center">
          <div 
            className="bg-white/95 backdrop-blur-md rounded-full px-6 py-2 shadow-lg border border-white/30"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            <ul className="flex gap-1 items-center">
              <li>
                <Link 
                  to="/" 
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    isActive('/') 
                      ? 'bg-gray-200 text-gray-600 font-semibold' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    isActive('/about') 
                      ? 'bg-gray-200 text-gray-600 font-semibold' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  About Us
                </Link>
              </li>
              <li className="relative group">
                <span className="px-6 py-3 rounded-full font-medium cursor-pointer text-gray-700 hover:bg-gray-100 transition-all duration-300 flex items-center gap-1">
                  Support
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
                <ul className="absolute top-full left-0 mt-2 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg py-3 min-w-52 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-200">
                  <li>
                    <Link 
                      to="/hue-check" 
                      className="block px-6 py-3 text-gray-700 hover:bg-gray-100 transition-colors duration-300 font-medium"
                    >
                      Hue Check
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/letters-unsent" 
                      className="block px-6 py-3 text-gray-700 hover:bg-gray-100 transition-colors duration-300 font-medium"
                    >
                      Letters Unsent
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/letters-of-light" 
                      className="block px-6 py-3 text-gray-700 hover:bg-gray-100 transition-colors duration-300 font-medium"
                    >
                      Letters of Light
                    </Link>
                  </li>
                </ul>
              </li>
               <li>
                <Link 
                  to="/session" 
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    isActive('/session') 
                      ? 'bg-gray-200 text-gray-600 font-semibold' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Book a Session
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    isActive('/contact') 
                      ? 'bg-gray-200 text-gray-600 font-semibold' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Side Controls */}
        <div className="flex items-center gap-3">
          {/* Theme Selector */}
          <div className="relative">
            <button
              onClick={() => setShowThemeSelector(!showThemeSelector)}
              className="bg-white/95 backdrop-blur-md rounded-full p-3 text-gray-800 hover:bg-white transition-all duration-300 shadow-lg border border-white/30 hover:scale-105"
            >
              <Palette className="w-5 h-5" />
            </button>
            
            {showThemeSelector && (
              <div className="absolute top-full right-0 mt-2 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg p-4 min-w-64 border border-gray-200 animate-fade-in">
                <h3 className="text-gray-800 font-semibold mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>Choose Your Theme</h3>
                <div className="grid grid-cols-1 gap-2">
                  {themes.map((theme) => (
                    <button
                      key={theme.name}
                      onClick={() => {
                        changeTheme(theme);
                        setShowThemeSelector(false);
                      }}
                      className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-300 ${
                        currentTheme.name === theme.name 
                          ? 'bg-gray-100' 
                          : 'hover:bg-gray-50'
                      }`}
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      <div 
                        className="w-6 h-6 rounded-full"
                        style={{ background: theme.gradient }}
                      />
                      <span className="text-gray-700 font-medium">{theme.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Login Button */}
          <button
            className="bg-white/95 backdrop-blur-md rounded-full p-3 text-gray-800 hover:bg-white transition-all duration-300 shadow-lg border border-white/30 hover:scale-105"
            onClick={() => alert('Login functionality requires Supabase integration. Please connect to Supabase first!')}
          >
            <User className="w-5 h-5" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
