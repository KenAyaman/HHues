import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Calendar, Clock, User, Phone, Mail, MessageCircle } from 'lucide-react';

const Session = () => {
  const { currentTheme } = useTheme();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    sessionType: '',
    concerns: '',
    previousTherapy: '',
    urgency: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Session booking:', formData);
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      preferredDate: '',
      preferredTime: '',
      sessionType: '',
      concerns: '',
      previousTherapy: '',
      urgency: ''
    });
  };

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => setSubmitted(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="h-96 relative flex items-center justify-center"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url('${currentTheme.heroImage}')` }}
      >
        <Navbar />
        <div className="text-center text-white z-10">
          <h1 className="text-6xl font-bold mb-4">Book a Session</h1>
          <p className="text-xl">Take the first step towards healing</p>
        </div>
      </div>

      {/* Booking Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" style={{ color: currentTheme.primary }}>
              Schedule Your Appointment
            </h2>
            <p className="text-gray-600 text-lg">
              Connect with our licensed therapists for personalized support
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 transition-colors"
                  style={{ 
                    borderColor: currentTheme.primary + '50',
                    '--tw-ring-color': currentTheme.primary
                  } as React.CSSProperties}
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 transition-colors"
                  style={{ 
                    borderColor: currentTheme.primary + '50',
                    '--tw-ring-color': currentTheme.primary
                  } as React.CSSProperties}
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 transition-colors"
                style={{ 
                  borderColor: currentTheme.primary + '50',
                  '--tw-ring-color': currentTheme.primary
                } as React.CSSProperties}
              />
            </div>

            {/* Session Preferences */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="preferredDate" className="block text-gray-700 font-medium mb-2">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  id="preferredDate"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 transition-colors"
                  style={{ 
                    borderColor: currentTheme.primary + '50',
                    '--tw-ring-color': currentTheme.primary
                  } as React.CSSProperties}
                  required
                />
              </div>

              <div>
                <label htmlFor="preferredTime" className="block text-gray-700 font-medium mb-2">
                  Preferred Time *
                </label>
                <select
                  id="preferredTime"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 transition-colors"
                  style={{ 
                    borderColor: currentTheme.primary + '50',
                    '--tw-ring-color': currentTheme.primary
                  } as React.CSSProperties}
                  required
                >
                  <option value="">Select a time</option>
                  <option value="morning">Morning (9:00 AM - 12:00 PM)</option>
                  <option value="afternoon">Afternoon (12:00 PM - 5:00 PM)</option>
                  <option value="evening">Evening (5:00 PM - 8:00 PM)</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="sessionType" className="block text-gray-700 font-medium mb-2">
                Session Type *
              </label>
              <select
                id="sessionType"
                name="sessionType"
                value={formData.sessionType}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 transition-colors"
                style={{ 
                  borderColor: currentTheme.primary + '50',
                  '--tw-ring-color': currentTheme.primary
                } as React.CSSProperties}
                required
              >
                <option value="">Select session type</option>
                <option value="individual">Individual Therapy</option>
                <option value="couples">Couples Therapy</option>
                <option value="family">Family Therapy</option>
                <option value="group">Group Therapy</option>
                <option value="consultation">Initial Consultation</option>
              </select>
            </div>

            <div>
              <label htmlFor="concerns" className="block text-gray-700 font-medium mb-2">
                What would you like to work on? *
              </label>
              <textarea
                id="concerns"
                name="concerns"
                value={formData.concerns}
                onChange={handleChange}
                placeholder="Please share what's bringing you to therapy today..."
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 transition-colors resize-vertical"
                style={{ 
                  borderColor: currentTheme.primary + '50',
                  '--tw-ring-color': currentTheme.primary
                } as React.CSSProperties}
                required
              />
            </div>

            <div>
              <label htmlFor="previousTherapy" className="block text-gray-700 font-medium mb-2">
                Have you been in therapy before?
              </label>
              <textarea
                id="previousTherapy"
                name="previousTherapy"
                value={formData.previousTherapy}
                onChange={handleChange}
                placeholder="Tell us about your previous therapy experience (optional)"
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 transition-colors resize-vertical"
                style={{ 
                  borderColor: currentTheme.primary + '50',
                  '--tw-ring-color': currentTheme.primary
                } as React.CSSProperties}
              />
            </div>

            <div>
              <label htmlFor="urgency" className="block text-gray-700 font-medium mb-2">
                How urgent is your need for support?
              </label>
              <select
                id="urgency"
                name="urgency"
                value={formData.urgency}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 transition-colors"
                style={{ 
                  borderColor: currentTheme.primary + '50',
                  '--tw-ring-color': currentTheme.primary
                } as React.CSSProperties}
              >
                <option value="">Select urgency level</option>
                <option value="low">Low - I can wait 1-2 weeks</option>
                <option value="medium">Medium - I'd prefer within a week</option>
                <option value="high">High - I need support within 2-3 days</option>
                <option value="crisis">Crisis - I need immediate help</option>
              </select>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="text-white py-3 px-8 rounded-lg font-medium hover:opacity-90 transition-opacity"
                style={{ backgroundColor: currentTheme.primary }}
              >
                Book My Session
              </button>
            </div>

            {submitted && (
              <div className="mt-6 p-4 rounded-xl border border-gray-300 bg-white shadow-sm text-gray-800 text-sm text-center">
                Your session request has been submitted. We'll be in touch with you shortly!
              </div>
            )}
          </form>

          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <div 
              className="p-6 rounded-2xl text-center"
              style={{ backgroundColor: `${currentTheme.primary}10` }}
            >
              <Calendar className="w-8 h-8 mb-4 mx-auto" style={{ color: currentTheme.primary }} />
              <h3 className="font-bold text-lg mb-2" style={{ color: currentTheme.primary }}>
                Flexible Scheduling
              </h3>
              <p className="text-gray-600">
                We offer morning, afternoon, and evening appointments to fit your schedule.
              </p>
            </div>

            <div 
              className="p-6 rounded-2xl text-center"
              style={{ backgroundColor: `${currentTheme.secondary}20` }}
            >
              <User className="w-8 h-8 mb-4 mx-auto" style={{ color: currentTheme.primary }} />
              <h3 className="font-bold text-lg mb-2" style={{ color: currentTheme.primary }}>
                Licensed Therapists
              </h3>
              <p className="text-gray-600">
                All our therapists are licensed professionals with specialized training in various approaches.
              </p>
            </div>

            <div 
              className="p-6 rounded-2xl text-center"
              style={{ backgroundColor: `${currentTheme.accent}20` }}
            >
              <MessageCircle className="w-8 h-8 mb-4 mx-auto" style={{ color: currentTheme.primary }} />
              <h3 className="font-bold text-lg mb-2" style={{ color: currentTheme.primary }}>
                Multiple Formats
              </h3>
              <p className="text-gray-600">
                Choose from in-person, video calls, or phone sessions based on your comfort and needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Session;
