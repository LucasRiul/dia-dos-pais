import React from 'react';
import { Heart, ArrowDown } from 'lucide-react';

interface WelcomeScreenProps {
  onExploreClick: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onExploreClick }) => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-slate-50 flex items-center justify-center relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-sky-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="text-center z-10 px-6">
        {/* Heart Icon */}
        <div className="mb-8 animate-pulse">
          <Heart className="w-16 h-16 mx-auto text-rose-400 fill-rose-200" />
        </div>
        
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-800 mb-6 leading-tight">
          Feliz
          <span className="block text-sky-600">Dia dos Pais!</span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          Uma jornada através das nossas preciosas memórias juntos, celebrando o incrível pai que você é!
        </p>
        
        {/* Explore Button */}
        <button
          onClick={onExploreClick}
          className="group bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center mx-auto gap-2"
        >
          Explorar Memórias
          <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
        </button>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-slate-400" />
      </div>
    </section>
  );
};