import React, { useState, useEffect } from 'react';
import { ThemeToggle } from './components/ThemeToggle';
import { TimesTable } from './components/TimesTable';
import { PracticeSection } from './components/PracticeSection';

function App() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' ||
        (!localStorage.getItem('theme') &&
          window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  const toggleCard = (number: number) => {
    setFlippedCards((prev) =>
      prev.includes(number)
        ? prev.filter((n) => n !== number)
        : [...prev, number]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 transition-colors duration-200">
      <ThemeToggle isDark={isDark} onToggle={toggleTheme} />

      <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-white mb-6 sm:mb-12 tracking-tight">
          Times Tables
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4 max-w-6xl mx-auto">
          {Array.from({ length: 12 }, (_, i) => i + 1).map((number) => (
            <TimesTable
              key={number}
              number={number}
              isFlipped={flippedCards.includes(number)}
              onFlip={() => toggleCard(number)}
            />
          ))}
        </div>

        <PracticeSection />
      </div>
    </div>
  );
}

export default App