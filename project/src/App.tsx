import React from 'react';
import { WelcomeScreen } from './components/WelcomeScreen';
import { Timeline } from './components/Timeline';
import { MusicPlayer } from './components/MusicPlayer';
import { Heart } from 'lucide-react';

function App() {
  const scrollToTimeline = () => {
    document.getElementById('timeline')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="font-sans">
      {/* Welcome Screen */}
      <WelcomeScreen onExploreClick={scrollToTimeline} />
      
      {/* Timeline Section */}
      <Timeline />
      
      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center mb-4 gap-2">
            <Heart className="w-6 h-6 text-rose-400 fill-rose-400" />
            <span className="text-xl font-semibold">Feito com amor</span>
            <Heart className="w-6 h-6 text-rose-400 fill-rose-400" />
          </div>
          <p className="text-slate-300 text-lg mb-2">
            Feliz dia dos pais, para o melhor pai do mundo!
          </p>
          <p className="text-slate-400">
            Obrigado por ser nosso herói, nosso líder e inspiração.
          </p>
        </div>
      </footer>
      
      {/* Music Player */}
      <MusicPlayer />
    </div>
  );
}

export default App;