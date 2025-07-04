import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const quotes = [
  {
    text: "Healing isn't about forgetting the pain. It's about learning to carry it with grace.",
    author: "Unknown",
    category: "healing"
  },
  {
    text: "You are not broken. You are breaking open to discover who you truly are.",
    author: "Unknown",
    category: "self-discovery"
  },
  {
    text: "Your current situation is not your final destination. Keep moving forward.",
    author: "Unknown",
    category: "hope"
  },
  {
    text: "It's okay to not be okay. It's not okay to stay that way without asking for help.",
    author: "Unknown",
    category: "support"
  },
  {
    text: "Self-care isn't selfish. You can't pour from an empty cup.",
    author: "Unknown",
    category: "self-care"
  },
  {
    text: "Progress, not perfection. Every small step forward counts.",
    author: "Unknown",
    category: "progress"
  },
  {
    text: "You have survived 100% of your worst days. You're doing great.",
    author: "Unknown",
    category: "strength"
  },
  {
    text: "Gentle reminder: You don't have to have it all figured out to move forward.",
    author: "Unknown",
    category: "acceptance"
  }
];

const selfCareReminders = [
  "Drink a glass of water and take three deep breaths",
  "Step outside for five minutes, even if it's just to your doorstep",
  "Text someone you care about - connection heals",
  "Write down three things you're grateful for today",
  "Take a warm shower or bath",
  "Listen to a song that makes you feel peaceful",
  "Do one small thing to tidy your space",
  "Stretch your body gently",
  "Eat something nourishing",
  "Give yourself permission to rest"
];

const LettersOfLight = () => {
  const { currentTheme } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('encouragement');
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);
  const [currentReminder, setCurrentReminder] = useState(selfCareReminders[0]);

  const categories = [
    { id: 'encouragement', name: 'Encouragement', emoji: '💪' },
    { id: 'healing', name: 'Healing Stories', emoji: '🌱' },
    { id: 'selfcare', name: 'Self-Care', emoji: '🌸' },
    { id: 'mindfulness', name: 'Mindfulness', emoji: '🧘' },
    { id: 'hope', name: 'Hope & Light', emoji: '✨' }
  ];

  const content = {
    encouragement: [
      {
        title: "You Are Stronger Than You Know",
        content: "Every challenge you've faced has proven your resilience. You've survived 100% of your difficult days so far. That's not luck—that's strength.",
        author: "HeartHues Team"
      },
      {
        title: "Progress, Not Perfection",
        content: "Healing isn't linear. Some days will be harder than others, and that's okay. Every small step forward matters, even when it doesn't feel like it.",
        author: "Dr. Sarah Chen"
      },
      {
        title: "Your Feelings Are Valid",
        content: "Whatever you're going through right now is real and worthy of acknowledgment. You don't need to justify your emotions to anyone—they're yours to feel.",
        author: "Maya Johnson, LCSW"
      }
    ],
    healing: [
      {
        title: "From Darkness to Dawn",
        content: "Two years ago, I couldn't imagine a day without anxiety controlling my life. Today, I woke up excited about possibilities. Healing happens in moments you don't even notice.",
        author: "Anonymous Community Member"
      },
      {
        title: "Learning to Love Myself Again",
        content: "After my divorce, I thought I was broken forever. Therapy, journaling, and small acts of self-compassion slowly taught me that I am whole on my own.",
        author: "Anonymous Community Member"
      },
      {
        title: "The Gift of Grief",
        content: "Losing my father taught me that grief is love with nowhere to go. Now I carry that love forward, and it lights up everything I do.",
        author: "Anonymous Community Member"
      }
    ],
    selfcare: [
      {
        title: "Micro-Moments of Joy",
        content: "Self-care doesn't have to be expensive or time-consuming. Try: feeling sunshine on your face, taking three deep breaths, or listening to your favorite song.",
        author: "Wellness Team"
      },
      {
        title: "The Art of Saying No",
        content: "Saying no to things that drain you is saying yes to things that fulfill you. Your energy is precious—spend it on what truly matters to you.",
        author: "Boundaries Coach Alex"
      },
      {
        title: "Your Body Is Your Home",
        content: "Thank your body today. It carries you through every day, processes your emotions, and keeps you alive. Treat it with the kindness it deserves.",
        author: "Body Positivity Advocate"
      }
    ],
    mindfulness: [
      {
        title: "Present Moment Awareness",
        content: "Right now, in this moment, you are safe. Feel your feet on the ground, notice your breath, acknowledge what you can see and hear. This is peace.",
        author: "Mindfulness Teacher"
      },
      {
        title: "Thoughts Are Not Facts",
        content: "That anxious voice in your head is not you—it's just a thought passing through. Observe it like a cloud in the sky, then let it drift away.",
        author: "Meditation Guide"
      },
      {
        title: "The Gift of Stillness",
        content: "In a world that demands constant motion, choosing stillness is radical self-care. Give yourself permission to simply be, without doing.",
        author: "Zen Teacher"
      }
    ],
    hope: [
      {
        title: "Tomorrow's Possibilities",
        content: "Every sunset promises a new dawn. Every ending creates space for a beginning. You are always one moment away from a completely different life.",
        author: "Hope Ambassador"
      },
      {
        title: "You Matter",
        content: "In this vast universe, there is only one you. Your perspective, your heart, your dreams—they matter. The world needs what you have to offer.",
        author: "Life Coach Maria"
      },
      {
        title: "Seeds in Winter",
        content: "Even in your darkest seasons, growth is happening beneath the surface. Trust the process, trust your journey, trust that spring always comes.",
        author: "Growth Mentor"
      }
    ]
  };

  useEffect(() => {
    setCurrentQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    setCurrentReminder(selfCareReminders[Math.floor(Math.random() * selfCareReminders.length)]);
  }, []);

  return (
    <div className="min-h-screen">
      <div className="h-96 relative flex items-center justify-center" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url('${currentTheme.heroImage}')` }}>
        <Navbar />
        <div className="text-center text-white z-10">
          <h1 className="text-6xl font-bold">Letters of Light</h1>
          <p className="text-xl mt-4 opacity-90">Words to illuminate your path</p>
        </div>
      </div>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Today's Light */}
          <div className="mb-16">
            <div className="p-8 rounded-2xl shadow-lg border" style={{ backgroundColor: currentTheme.background }}>
              <h2 className="text-2xl font-semibold mb-6 text-center" style={{ color: currentTheme.primary }}>Today's Light</h2>
              <blockquote className="text-xl text-gray-700 text-center mb-4 italic leading-relaxed">
                "{currentQuote.text}"
              </blockquote>
              <p className="text-center text-gray-600 mb-6">— {currentQuote.author}</p>
              <div className="text-center">
                <button onClick={() => setCurrentQuote(quotes[Math.floor(Math.random() * quotes.length)])} className="text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity" style={{ backgroundColor: currentTheme.primary }}>
                  New Quote
                </button>
              </div>
            </div>
          </div>

          {/* Gentle Reminder */}
          <div className="mb-16">
            <div className="p-8 rounded-2xl shadow-lg border" style={{ backgroundColor: currentTheme.background }}>
              <h2 className="text-2xl font-semibold mb-6 text-center" style={{ color: currentTheme.primary }}>Gentle Reminder</h2>
              <p className="text-lg text-gray-700 text-center mb-6 leading-relaxed">
                {currentReminder}
              </p>
              <div className="text-center">
                <button onClick={() => setCurrentReminder(selfCareReminders[Math.floor(Math.random() * selfCareReminders.length)])} className="text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity" style={{ backgroundColor: currentTheme.primary }}>
                  New Reminder
                </button>
              </div>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: currentTheme.primary }}>
              Inspiration for Your Journey
            </h2>
            <p className="text-gray-600 text-lg">
              Find encouragement, hope, and wisdom from our community and mental health professionals.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category.id ? 'text-white shadow-lg transform scale-105' : 'text-gray-600 bg-gray-100 hover:bg-gray-200'
                }`}
                style={{ backgroundColor: selectedCategory === category.id ? currentTheme.primary : undefined }}
              >
                <span className="mr-2">{category.emoji}</span>
                {category.name}
              </button>
            ))}
          </div>

          {/* Content Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content[selectedCategory as keyof typeof content].map((item, index) => (
              <div key={index} className="rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2" style={{ backgroundColor: currentTheme.background }}>
                <h3 className="text-xl font-bold mb-4" style={{ color: currentTheme.primary }}>{item.title}</h3>
                <p className="text-gray-700 leading-relaxed mb-6">{item.content}</p>
                <div className="text-sm text-gray-500 italic">— {item.author}</div>
              </div>
            ))}
          </div>

          {/* Daily Affirmation */}
          <div className="mt-16 rounded-2xl p-8 text-center" style={{ background: `linear-gradient(135deg, ${currentTheme.primary}20, ${currentTheme.secondary}20)` }}>
            <h3 className="text-2xl font-bold mb-6" style={{ color: currentTheme.primary }}>Today's Affirmation</h3>
            <div className="text-3xl mb-6" style={{ color: currentTheme.primary }}>✨</div>
            <p className="text-xl text-gray-700 leading-relaxed italic max-w-2xl mx-auto">
              "I am worthy of love, peace, and happiness. My journey is unique and valuable. 
              I choose to be gentle with myself today."
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LettersOfLight;
