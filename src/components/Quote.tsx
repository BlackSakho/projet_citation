import React from 'react';
import { Quote as QuoteIcon } from 'lucide-react';

interface QuoteProps {
  text: string;
  author: string;
  isTransitioning: boolean;
}

export const Quote: React.FC<QuoteProps> = ({ text, author, isTransitioning }) => {
  return (
    <div className={`transform transition-all duration-500 ${
      isTransitioning ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
    }`}>
      <div className="flex justify-center mb-6">
        <QuoteIcon className="w-12 h-12 text-white/80" />
      </div>

      <blockquote className="text-center mb-6">
        <p className="text-2xl md:text-3xl font-light text-white leading-relaxed mb-4">
          "{text}"
        </p>
        <footer className="text-xl text-white/80">
          — <cite>{author}</cite>
        </footer>
      </blockquote>
    </div>
  );
};