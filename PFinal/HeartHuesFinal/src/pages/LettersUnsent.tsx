
import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { PenTool, Heart, Shield, Trash2 } from 'lucide-react';

const LettersUnsent = () => {
  const { currentTheme } = useTheme();
  const [letter, setLetter] = useState({
    recipient: '',
    subject: '',
    content: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Letter written:', letter);
    // Handle letter saving/processing here
    setLetter({ recipient: '', subject: '', content: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setLetter({
      ...letter,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="h-96 relative flex items-center justify-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url('${currentTheme.heroImage}')`
        }}
      >
        <Navbar />
        
        <div className="text-center text-white z-10">
          <h1 className="text-6xl font-bold mb-4">Letters Unsent</h1>
          <p className="text-xl">Write what you wish you could say</p>
        </div>
      </div>

      {/* Letter Writing Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" style={{ color: currentTheme.primary }}>
              Express Yourself Freely
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Sometimes we have things we wish we could say but can't. This is your safe space to express 
              those feelings without judgment or consequence. Write to anyone - an ex, a friend, 
              a family member, or even yourself.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="recipient" className="block text-gray-700 font-medium mb-2">
                To: (This can be anyone - they'll never see this)
              </label>
              <input
                type="text"
                id="recipient"
                name="recipient"
                value={letter.recipient}
                onChange={handleChange}
                placeholder="e.g., My ex, Mom, My younger self..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 transition-colors"
                style={{ 
                  borderColor: currentTheme.primary + '50',
                  '--tw-ring-color': currentTheme.primary
                } as React.CSSProperties}
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                Subject: (Optional)
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={letter.subject}
                onChange={handleChange}
                placeholder="What's this letter about?"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 transition-colors"
                style={{ 
                  borderColor: currentTheme.primary + '50',
                  '--tw-ring-color': currentTheme.primary
                } as React.CSSProperties}
              />
            </div>

            <div>
              <label htmlFor="content" className="block text-gray-700 font-medium mb-2">
                Your Letter:
              </label>
              <textarea
                id="content"
                name="content"
                value={letter.content}
                onChange={handleChange}
                placeholder="Write from your heart. Say everything you've been holding back..."
                rows={12}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 transition-colors resize-vertical"
                style={{ 
                  borderColor: currentTheme.primary + '50',
                  '--tw-ring-color': currentTheme.primary
                } as React.CSSProperties}
                required
              />
            </div>

            <div className="flex gap-4 justify-center">
              <button
                type="submit"
                className="text-white py-3 px-8 rounded-lg font-medium flex items-center gap-2 hover:opacity-90 transition-opacity"
                style={{ backgroundColor: currentTheme.primary }}
              >
                <PenTool className="w-5 h-5" />
                Save Letter
              </button>
              
              <button
                type="button"
                onClick={() => setLetter({ recipient: '', subject: '', content: '' })}
                className="bg-gray-500 text-white py-3 px-8 rounded-lg font-medium flex items-center gap-2 hover:opacity-90 transition-opacity"
              >
                <Trash2 className="w-5 h-5" />
                Clear
              </button>
            </div>
          </form>

          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <div 
              className="p-6 rounded-2xl text-center"
              style={{ backgroundColor: `${currentTheme.primary}10` }}
            >
              <Shield className="w-8 h-8 mb-4 mx-auto" style={{ color: currentTheme.primary }} />
              <h3 className="font-bold text-lg mb-2" style={{ color: currentTheme.primary }}>
                100% Private
              </h3>
              <p className="text-gray-600">
                Your letters are completely anonymous and secure. No one will ever read them unless you choose to share.
              </p>
            </div>

            <div 
              className="p-6 rounded-2xl text-center"
              style={{ backgroundColor: `${currentTheme.secondary}20` }}
            >
              <Heart className="w-8 h-8 mb-4 mx-auto" style={{ color: currentTheme.primary }} />
              <h3 className="font-bold text-lg mb-2" style={{ color: currentTheme.primary }}>
                Therapeutic Release
              </h3>
              <p className="text-gray-600">
                Writing unsent letters is a proven therapeutic technique for processing emotions and finding closure.
              </p>
            </div>

            <div 
              className="p-6 rounded-2xl text-center"
              style={{ backgroundColor: `${currentTheme.accent}20` }}
            >
              <PenTool className="w-8 h-8 mb-4 mx-auto" style={{ color: currentTheme.primary }} />
              <h3 className="font-bold text-lg mb-2" style={{ color: currentTheme.primary }}>
                No Judgment
              </h3>
              <p className="text-gray-600">
                Express anger, love, regret, or hope - all emotions are valid here. Write as much or as little as you need.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LettersUnsent;
