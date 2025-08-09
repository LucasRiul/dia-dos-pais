import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2 } from 'lucide-react';

export const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  
  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-sky-100 p-3 flex items-center gap-3">
        {/* Note: Background music auto-play is blocked by most browsers for user experience */}
        {/* You can add a gentle instrumental track here */}
        <audio
          ref={audioRef}
          loop
          preload="metadata"
        >
          {/* Add your music file here - for now it's just the controls */}
          <source src="Musica/agnus-dei.mp3" type="audio/mpeg" />
        </audio>
        
        <Volume2 className="w-4 h-4 text-sky-600" />
        <button
          onClick={togglePlay}
          className="bg-sky-500 hover:bg-sky-600 text-white p-2 rounded-full transition-colors duration-200"
          aria-label={isPlaying ? 'Pause music' : 'Play music'}
        >
          {isPlaying ? (
            <Pause className="w-4 h-4" />
          ) : (
            <Play className="w-4 h-4 ml-0.5" />
          )}
        </button>
        <span className="text-sm text-slate-600 hidden sm:inline">
          {isPlaying ? 'Playing' : 'Paused'}
        </span>
      </div>
    </div>
  );
};