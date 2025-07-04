import { Link } from 'react-router-dom';
import React from 'react';
import { useTheme } from '../context/ThemeContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const About = () => {
  const { currentTheme } = useTheme();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="h-96 relative flex items-center justify-center"
         style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url('${currentTheme.heroImage}')`
        }}
      >
        <Navbar />
        <div className="text-center text-white z-10">
          <h1 className="text-6xl font-bold">About HeartHues</h1>
          <p className="text-xl mt-4 opacity-90">Your companion in emotional wellness</p>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6" style={{ color: currentTheme.primary }}>
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              At HeartHues, we believe that emotional wellness is a journey, not a destination. 
              We're here to provide you with gentle, accessible tools that honor your feelings 
              and support your path to healing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: currentTheme.primary }}>
                Why Colors Matter
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Colors have a profound impact on our emotions and mental state. Research in color psychology 
                shows that different hues can evoke specific feelings and help us process emotions more effectively.
              </p>
              <p className="text-gray-600 leading-relaxed">
                By using colors as a language for emotions, we make it easier to identify, express, 
                and understand our feelings in a gentle, non-judgmental way.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: currentTheme.primary }}>
                The Power of Writing
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Expressive writing has been scientifically proven to improve mental health, reduce stress, 
                and help process difficult emotions. Our "Letters Unsent" feature provides a safe space 
                for this therapeutic practice.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Sometimes the words we can't say out loud are the ones we most need to express. 
                We give you that space.
              </p>
            </div>
          </div>

          <div 
            className="rounded-2xl p-8 mb-16"
            style={{ backgroundColor: currentTheme.background }}
          >
            <h3 className="text-3xl font-bold text-center mb-8" style={{ color: currentTheme.primary }}>
              Our Core Values
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div 
                  className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center"
                  style={{ backgroundColor: currentTheme.primary }}
                >
                  <span className="text-3xl text-white">🤝</span>
                </div>
                <h4 className="text-xl font-bold mb-2" style={{ color: currentTheme.primary }}>
                  Empathy
                </h4>
                <p className="text-gray-600">
                  We understand that everyone's journey is unique and deserves compassion.
                </p>
              </div>
              
              <div className="text-center">
                <div 
                  className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center"
                  style={{ backgroundColor: currentTheme.secondary }}
                >
                  <span className="text-3xl text-white">🔒</span>
                </div>
                <h4 className="text-xl font-bold mb-2" style={{ color: currentTheme.primary }}>
                  Privacy
                </h4>
                <p className="text-gray-600">
                  Your thoughts and feelings are yours alone. We protect your privacy completely.
                </p>
              </div>
              
              <div className="text-center">
                <div 
                  className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center"
                  style={{ backgroundColor: currentTheme.accent }}
                >
                  <span className="text-3xl text-white">✨</span>
                </div>
                <h4 className="text-xl font-bold mb-2" style={{ color: currentTheme.primary }}>
                  Hope
                </h4>
                <p className="text-gray-600">
                  We believe in your strength and capacity for growth and healing.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold mb-6" style={{ color: currentTheme.primary }}>
              Start Your Journey Today
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              Take the first step towards emotional wellness with our gentle, supportive tools.
            </p>
          <Link to="/hue-check">
            <button 
              className="px-8 py-4 rounded-full text-white font-medium text-lg hover:opacity-90 transition-opacity"
              style={{ backgroundColor: currentTheme.primary }}
            >
              Begin Your Hue Check
            </button>
          </Link>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
