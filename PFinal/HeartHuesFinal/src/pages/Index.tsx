
import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight, Star, Users, Award, Heart } from 'lucide-react';

const Index = () => {
  const { currentTheme } = useTheme();

  const testimonials = [
    {
      name: "Sarah M.",
      text: "HeartHues helped me understand my emotions better. The color-based mood tracking was exactly what I needed.",
      rating: 5
    },
    {
      name: "Michael T.",
      text: "Writing unsent letters gave me the closure I never thought I'd find. This platform is truly healing.",
      rating: 5
    },
    {
      name: "Emma R.",
      text: "The Letters of Light feature brightens my day every time. Such inspiring and uplifting content.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="h-screen relative flex items-center justify-center"
          style={{
    backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url('${currentTheme.heroImage}')`,
  }}
>
        <Navbar />
        
        <div className="text-center text-white z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 hover:text-transparent hover:stroke-white transition-all duration-500"
              style={{ WebkitTextStroke: '2px transparent' }}>
            HEART HUES
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
            Your journey to emotional wellness through colors, words, and gentle self-reflection
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/hue-check"
              className="inline-flex items-center justify-center text-white text-xl border-2 border-white px-8 py-4 rounded-full hover:bg-white hover:text-gray-800 transition-all duration-300 font-medium"
            >
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/about"
              className="inline-flex items-center justify-center text-white text-xl border-2 border-white/50 px-8 py-4 rounded-full hover:border-white hover:bg-white/10 transition-all duration-300 font-medium"
            >
              Learn More
            </Link>
          </div>
        </div>
        
        <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6" style={{ color: currentTheme.primary }}>
              Your Journey to Wellness
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our three powerful tools designed to support your mental health and emotional well-being
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link to="/hue-check" className="group">
              <div 
                className="p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full"
                style={{ backgroundColor: `${currentTheme.primary}10` }}
              >
                <div 
                  className="w-16 h-16 rounded-full mb-6 flex items-center justify-center group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: currentTheme.primary }}
                >
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: currentTheme.primary }}>
                  Hue Check
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  A gentle, daily check-in using colors to express your mood. Track your emotional journey through hues and discover patterns in your feelings.
                </p>
                <div className="flex items-center text-sm font-medium" style={{ color: currentTheme.primary }}>
                  Start Tracking <ArrowRight className="ml-1 w-4 h-4" />
                </div>
              </div>
            </Link>

            <Link to="/letters-unsent" className="group">
              <div 
                className="p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full"
                style={{ backgroundColor: `${currentTheme.secondary}20` }}
              >
                <div 
                  className="w-16 h-16 rounded-full mb-6 flex items-center justify-center group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: currentTheme.secondary }}
                >
                  <span className="text-2xl">✉️</span>
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: currentTheme.primary }}>
                  Letters Unsent
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  A safe, anonymous space to write what you wish you could say. Express yourself freely without judgment or consequence.
                </p>
                <div className="flex items-center text-sm font-medium" style={{ color: currentTheme.primary }}>
                  Write Your Heart <ArrowRight className="ml-1 w-4 h-4" />
                </div>
              </div>
            </Link>

            <Link to="/letters-of-light" className="group">
              <div 
                className="p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full"
                style={{ backgroundColor: `${currentTheme.accent}20` }}
              >
                <div 
                  className="w-16 h-16 rounded-full mb-6 flex items-center justify-center group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: currentTheme.accent }}
                >
                  <span className="text-2xl">💡</span>
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: currentTheme.primary }}>
                  Letters of Light
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Find encouragement, healing stories, and self-care reminders. Discover inspiring content to brighten your day.
                </p>
                <div className="flex items-center text-sm font-medium" style={{ color: currentTheme.primary }}>
                  Find Inspiration <ArrowRight className="ml-1 w-4 h-4" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section 
        className="py-16 px-6"
        style={{ backgroundColor: `${currentTheme.primary}05` }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2" style={{ color: currentTheme.primary }}>10K+</div>
              <p className="text-gray-600">Users Supported</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2" style={{ color: currentTheme.primary }}>50K+</div>
              <p className="text-gray-600">Mood Entries</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2" style={{ color: currentTheme.primary }}>25K+</div>
              <p className="text-gray-600">Letters Written</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2" style={{ color: currentTheme.primary }}>99%</div>
              <p className="text-gray-600">Feel Better</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12" style={{ color: currentTheme.primary }}>
            What Our Users Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="p-6 rounded-2xl shadow-lg"
                style={{ backgroundColor: `${currentTheme.background}` }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" style={{ color: currentTheme.secondary }} />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold" style={{ color: currentTheme.primary }}>- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose HeartHues */}
      <section 
        className="py-20 px-6"
        style={{ backgroundColor: currentTheme.background }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8" style={{ color: currentTheme.primary }}>
            Why Choose HeartHues?
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-12">
            We believe in the power of color, words, and gentle self-reflection to guide you toward emotional wellness. 
            Our platform provides safe, judgment-free tools for mental health support.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="flex items-start gap-4">
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: currentTheme.primary }}
              >
                <span className="text-white">🛡️</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2" style={{ color: currentTheme.primary }}>
                  Safe & Anonymous
                </h3>
                <p className="text-gray-600">
                  Your privacy is our priority. Express yourself freely in a secure, judgment-free environment.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: currentTheme.secondary }}
              >
                <span className="text-white">🎯</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2" style={{ color: currentTheme.primary }}>
                  Personalized Experience
                </h3>
                <p className="text-gray-600">
                  Customize your journey with themes and tools that resonate with your unique emotional needs.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: currentTheme.accent }}
              >
                <span className="text-white">📈</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2" style={{ color: currentTheme.primary }}>
                  Track Your Progress
                </h3>
                <p className="text-gray-600">
                  Monitor your emotional patterns and celebrate your growth with our gentle tracking tools.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: currentTheme.primary }}
              >
                <span className="text-white">💝</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2" style={{ color: currentTheme.primary }}>
                  Evidence-Based
                </h3>
                <p className="text-gray-600">
                  Our tools are rooted in therapeutic practices like expressive writing and mood tracking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6" style={{ color: currentTheme.primary }}>
            Ready to Begin Your Healing Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Take the first step towards better mental health with our supportive tools and community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/session"
              className="inline-flex items-center justify-center text-white text-lg px-8 py-4 rounded-full font-medium hover:opacity-90 transition-opacity"
              style={{ backgroundColor: currentTheme.primary }}
            >
              Book a Session
            </Link>
            <Link 
              to="/hue-check"
              className="inline-flex items-center justify-center text-lg px-8 py-4 rounded-full font-medium border-2 hover:bg-gray-50 transition-colors"
              style={{ 
                borderColor: currentTheme.primary,
                color: currentTheme.primary
              }}
            >
              Try Hue Check Free
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
