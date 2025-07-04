
import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Calendar, TrendingUp, Heart, Save } from 'lucide-react';

const HueCheck = () => {
  const { currentTheme } = useTheme();
  const [selectedMood, setSelectedMood] = useState('');
  const [moodIntensity, setMoodIntensity] = useState(5);
  const [notes, setNotes] = useState('');

  const moodColors = [
    { color: '#ff6b6b', name: 'Angry/Frustrated', emotion: 'anger' },
    { color: '#4ecdc4', name: 'Calm/Peaceful', emotion: 'calm' },
    { color: '#45b7d1', name: 'Sad/Blue', emotion: 'sadness' },
    { color: '#96ceb4', name: 'Content/Balanced', emotion: 'content' },
    { color: '#f7dc6f', name: 'Happy/Joyful', emotion: 'joy' },
    { color: '#dda0dd', name: 'Anxious/Worried', emotion: 'anxiety' },
    { color: '#98d8c8', name: 'Hopeful/Optimistic', emotion: 'hope' },
    { color: '#95a5a6', name: 'Numb/Empty', emotion: 'numbness' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Mood logged:', { selectedMood, moodIntensity, notes });
    // Handle mood logging here
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
          <h1 className="text-6xl font-bold mb-4">Hue Check</h1>
          <p className="text-xl">Express your emotions through color</p>
        </div>
      </div>

      {/* Mood Tracking Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" style={{ color: currentTheme.primary }}>
              How are you feeling today?
            </h2>
            <p className="text-gray-600 text-lg">
              Choose a color that represents your current emotional state
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Color Selection */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-center" style={{ color: currentTheme.primary }}>
                Select Your Mood Color
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {moodColors.map((mood) => (
                  <button
                    key={mood.emotion}
                    type="button"
                    onClick={() => setSelectedMood(mood.emotion)}
                    className={`p-4 rounded-2xl border-4 transition-all duration-300 ${
                      selectedMood === mood.emotion 
                        ? 'border-gray-300 scale-105' 
                        : 'border-transparent hover:scale-102'
                    }`}
                    style={{ backgroundColor: mood.color }}
                  >
                    <div className="text-white font-medium text-center">
                      <div className="text-sm mb-1">{mood.name}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Intensity Slider */}
            {selectedMood && (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold" style={{ color: currentTheme.primary }}>
                  How intense is this feeling? ({moodIntensity}/10)
                </h3>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={moodIntensity}
                  onChange={(e) => setMoodIntensity(Number(e.target.value))}
                  className="w-full h-3 rounded-lg appearance-none cursor-pointer"
                  style={{ 
                    background: `linear-gradient(to right, ${currentTheme.primary}30 0%, ${currentTheme.primary} 100%)`,
                    '--tw-ring-color': currentTheme.primary
                  } as React.CSSProperties}
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Very Mild</span>
                  <span>Extremely Intense</span>
                </div>
              </div>
            )}

            {/* Notes Section */}
            <div>
              <label htmlFor="notes" className="block text-xl font-semibold mb-3" style={{ color: currentTheme.primary }}>
                Additional Notes (Optional)
              </label>
              <textarea
                id="notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="What triggered this feeling? Any thoughts you'd like to capture?"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 transition-colors resize-vertical"
                style={{ 
                  borderColor: currentTheme.primary + '50',
                  '--tw-ring-color': currentTheme.primary
                } as React.CSSProperties}
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={!selectedMood}
                className="text-white py-3 px-8 rounded-lg font-medium flex items-center gap-2 mx-auto hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ backgroundColor: currentTheme.primary }}
              >
                <Save className="w-5 h-5" />
                Log My Mood
              </button>
            </div>
          </form>

          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <div 
              className="p-6 rounded-2xl"
              style={{ backgroundColor: `${currentTheme.primary}10` }}
            >
              <Calendar className="w-8 h-8 mb-4" style={{ color: currentTheme.primary }} />
              <h3 className="font-bold text-lg mb-2" style={{ color: currentTheme.primary }}>
                Daily Tracking
              </h3>
              <p className="text-gray-600">
                Track your emotions daily to identify patterns and triggers in your mental health journey.
              </p>
            </div>

            <div 
              className="p-6 rounded-2xl"
              style={{ backgroundColor: `${currentTheme.secondary}20` }}
            >
              <TrendingUp className="w-8 h-8 mb-4" style={{ color: currentTheme.primary }} />
              <h3 className="font-bold text-lg mb-2" style={{ color: currentTheme.primary }}>
                Progress Insights
              </h3>
              <p className="text-gray-600">
                View your emotional trends over time and celebrate your growth and healing progress.
              </p>
            </div>

            <div 
              className="p-6 rounded-2xl"
              style={{ backgroundColor: `${currentTheme.accent}20` }}
            >
              <Heart className="w-8 h-8 mb-4" style={{ color: currentTheme.primary }} />
              <h3 className="font-bold text-lg mb-2" style={{ color: currentTheme.primary }}>
                Self-Care Reminders
              </h3>
              <p className="text-gray-600">
                Receive personalized suggestions for self-care activities based on your mood patterns.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HueCheck;
