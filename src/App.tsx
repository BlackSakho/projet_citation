import React, { useState, useEffect } from 'react';
import { Quote } from './components/Quote';
import { Controls } from './components/Controls';
import { quotes } from './data/quotes';
import { backgrounds } from './data/backgrounds';

function App() {
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);
  const [currentBg, setCurrentBg] = useState(backgrounds[0]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const generateNew = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      const newQuote = quotes[Math.floor(Math.random() * quotes.length)];
      const newBg = backgrounds[Math.floor(Math.random() * backgrounds.length)];
      setCurrentQuote(newQuote);
      setCurrentBg(newBg);
      setIsTransitioning(false);
    }, 500);
  };

  const shareQuote = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Citation Inspirante',
        text: `"${currentQuote.text}" - ${currentQuote.author}`,
        url: window.location.href
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(generateNew, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="min-h-screen w-full relative flex items-center justify-center overflow-hidden transition-all duration-1000"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${currentBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="max-w-3xl w-full mx-4 p-8 rounded-xl backdrop-blur-sm bg-white/10 shadow-2xl">
        <Quote 
          text={currentQuote.text}
          author={currentQuote.author}
          isTransitioning={isTransitioning}
        />
        <Controls 
          onGenerate={generateNew}
          onShare={shareQuote}
        />
      </div>
    </div>
  );
}

export default App;