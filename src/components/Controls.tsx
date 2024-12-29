import React from 'react';
import { RefreshCw, Share2 } from 'lucide-react';

interface ControlsProps {
  onGenerate: () => void;
  onShare: () => void;
}

export const Controls: React.FC<ControlsProps> = ({ onGenerate, onShare }) => {
  return (
    <div className="flex justify-center gap-4 mt-8">
      <button
        onClick={onGenerate}
        className="px-6 py-3 rounded-full bg-white/20 hover:bg-white/30 text-white 
          transition-all duration-300 flex items-center gap-2 backdrop-blur-sm"
      >
        <RefreshCw className="w-5 h-5" />
        Nouvelle Citation
      </button>

      <button
        onClick={onShare}
        className="px-6 py-3 rounded-full bg-white/20 hover:bg-white/30 text-white 
          transition-all duration-300 flex items-center gap-2 backdrop-blur-sm"
      >
        <Share2 className="w-5 h-5" />
        Partager
      </button>
    </div>
  );
};