import React, { createContext, useContext, useState, useEffect } from 'react';

type ThemeColor = {
  name: string;
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  gradient: string;
  heroImage: string; // ✅ Added for theme-specific background images
};

const themes: ThemeColor[] = [
  {
    name: 'Sunset Warmth',
    primary: '#ff6b9d',
    secondary: '#ffeaa7',
    accent: '#fd79a8',
    background: '#fef5f0',
    gradient: 'linear-gradient(135deg, #ff6b9d, #ffeaa7)',
    heroImage: "/img5.png"
  },
  {
    name: 'Ocean Calm',
    primary: '#74b9ff',
    secondary: '#81ecec',
    accent: '#00b894',
    background: '#f0f8ff',
    gradient: 'linear-gradient(135deg, #74b9ff, #81ecec)',
    heroImage: "/img7.png"
  },
  {
    name: 'Forest Peace',
    primary: '#00b894',
    secondary: '#55a3ff',
    accent: '#6c5ce7',
    background: '#f0fff4',
    gradient: 'linear-gradient(135deg, #00b894, #55a3ff)',
    heroImage: "/img8.png"
  },
  {
    name: 'Rose Gold',
    primary: '#e84393',
    secondary: '#f0b27a',
    accent: '#e17055',
    background: '#fff5f5',
    gradient: 'linear-gradient(135deg, #e84393, #f0b27a)',
    heroImage: "/img11.png"
  },
  {
    name: 'Dark Ocean',
    primary: '#4834d4',
    secondary: '#686de0',
    accent: '#30336b',
    background: '#d5d8dc',
    gradient: 'linear-gradient(135deg, #4834d4, #686de0)',
    heroImage: "/img14.png"
  }
];

type ThemeContextType = {
  currentTheme: ThemeColor;
  themes: ThemeColor[];
  changeTheme: (theme: ThemeColor) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeColor>(themes[0]);

  useEffect(() => {
    const savedTheme = localStorage.getItem('heartHuesTheme');
    if (savedTheme) {
      const theme = themes.find(t => t.name === savedTheme) || themes[0];
      setCurrentTheme(theme);
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--theme-primary', currentTheme.primary);
    root.style.setProperty('--theme-secondary', currentTheme.secondary);
    root.style.setProperty('--theme-accent', currentTheme.accent);
    root.style.setProperty('--theme-background', currentTheme.background);
    root.style.setProperty('--theme-gradient', currentTheme.gradient);
    root.style.setProperty('--theme-hero-image', `url('${currentTheme.heroImage}')`);
  }, [currentTheme]);

  const changeTheme = (theme: ThemeColor) => {
    setCurrentTheme(theme);
    localStorage.setItem('heartHuesTheme', theme.name);
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, themes, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
