import React from 'react';
import { ImageCarousel } from './ImageCarousel';

interface TimelineSectionProps {
  year: string;
  title: string;
  description: string;
  images: string[];
  isLeft?: boolean;
  index: number;
}

export const TimelineSection: React.FC<TimelineSectionProps> = ({
  year,
  title,
  description,
  images,
  isLeft = false,
  index
}) => {
  return (
    <div className={`flex items-center mb-16 ${isLeft ? 'flex-row-reverse' : ''}`}>
      {/* Timeline Line */}
      <div className="hidden md:flex flex-col items-center">
        <div className="w-4 h-4 bg-sky-500 rounded-full border-4 border-white shadow-lg"></div>
        <div className="w-0.5 h-24 bg-sky-300 mt-4"></div>
      </div>
      
      {/* Content Card */}
      <div 
        className={`bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-102 max-w-md ${
          isLeft ? 'md:mr-12' : 'md:ml-12'
        } w-full animate-fadeInUp`}
        style={{ animationDelay: `${index * 0.2}s` }}
      >
        {/* Image Carousel */}
        <ImageCarousel images={images} alt={title} year={year} />
        
        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-slate-800 mb-3 leading-tight">
            {title}
          </h3>
          <p className="text-slate-600 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};