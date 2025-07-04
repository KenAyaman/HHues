import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const { currentTheme } = useTheme();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        setSubmitted(false);
      }, 5000); // message disappears after 5 seconds
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
          <h1 className="text-6xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl">We're here to listen and support you</p>
        </div>
      </div>

      {/* Contact Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-4xl font-bold mb-8" style={{ color: currentTheme.primary }}>
                Get In Touch
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Whether you have questions about our services, need support, or want to share your story, 
                we're here for you. Your mental health journey is important to us.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: currentTheme.primary }}>
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-gray-600">support@hearthues.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: currentTheme.secondary }}>
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Crisis Hotline</h3>
                    <p className="text-gray-600">091 234 456 (24/7)</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: currentTheme.accent }}>
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Office</h3>
                    <p className="text-gray-600">123 Benguet Street<br />Baguio City, SR 12345</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 rounded-2xl" style={{ backgroundColor: `${currentTheme.primary}10` }}>
                <h3 className="font-bold text-lg mb-2" style={{ color: currentTheme.primary }}>
                  Emergency Resources
                </h3>
                <p className="text-gray-600 text-sm">
                  If you're in crisis, please contact 988 (Suicide & Crisis Lifeline) 
                  or text HOME to 741741 (Crisis Text Line) for immediate support.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 transition-colors"
                    style={{ borderColor: currentTheme.primary + '50', '--tw-ring-color': currentTheme.primary } as React.CSSProperties}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 transition-colors"
                    style={{ borderColor: currentTheme.primary + '50', '--tw-ring-color': currentTheme.primary } as React.CSSProperties}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 transition-colors"
                    style={{ borderColor: currentTheme.primary + '50', '--tw-ring-color': currentTheme.primary } as React.CSSProperties}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 transition-colors resize-vertical"
                    style={{ borderColor: currentTheme.primary + '50', '--tw-ring-color': currentTheme.primary } as React.CSSProperties}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: currentTheme.primary }}
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>

                {/* Success Message */}
                {submitted && (
                  <div className="mt-6 p-4 rounded-xl border border-gray-300 bg-white shadow-sm text-gray-800 text-sm text-center">
                    Thank you for reaching out! We’ll get back to you within 24 hours.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
