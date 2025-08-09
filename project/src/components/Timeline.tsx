import React from 'react';
import { TimelineSection } from './TimelineSection';

const timelineData = [
  {
    year: '1990-2000',
    title: 'Clautricia ou Patriano',
    description: 'O melhor casal do mundo se formou, os dois pombinhos começaram a namorar e as histórias de namoro e noivado de vocês são incríveis e nos fazem rir muito',
    images: [
      'assets/Pai/casal1.jpg',
      'assets/Pai/casal2.jpg'
    ]
  },
  {
    year: '2001-2010',
    title: 'Primeiros Passos Juntos',
    description: 'Você esteve presente em cada oscilação, cada queda e cada triunfo. Sua paciência e incentivo nos deram a confiança para continuar tentando, não importa quantas tentativas.',
    images: [
      'assets/Pai/eu-bebe2.jpg',
      'assets/Pai/eu-bebe1.png',
      'assets/Pai/andre-bebe1.png',
      'assets/Pai/festa-andre.jpg',
      'assets/Pai/filhos3.jpg',
      'assets/Pai/filhos4.jpg',
      'assets/Pai/filhos5.jpg'
    ]
  },
  {
    year: '2001',
    title: 'Ensinando a Andar de Bicicleta',
    description: 'Running alongside me with your steady hand on my back, you taught me that sometimes we need support to find our balance. When you finally let go, I felt like I could conquer the world.',
    images: [
      'https://images.pexels.com/photos/1104007/pexels-photo-1104007.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/1128318/pexels-photo-1128318.jpeg?auto=compress&cs=tinysrgb&w=400'
    ]
  },
  {
    year: '2005',
    title: 'Aventuras de Verão',
    description: 'Every summer was filled with new discoveries. Whether we were building sandcastles, hiking trails, or just talking under the stars, you made every moment magical and taught me to find wonder in the simple things.',
    images: [
      'https://images.pexels.com/photos/1128318/pexels-photo-1128318.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/159823/color-pencils-coloring-book-coloring-159823.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=400'
    ]
  },
  {
    year: '2010',
    title: 'Projetos Escolares',
    description: 'You never complained about the midnight science fair projects or the forgotten homework. Your dedication to my success showed me the value of hard work and perseverance.',
    images: [
      'https://images.pexels.com/photos/159823/color-pencils-coloring-book-coloring-159823.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=400'
    ]
  },
  {
    year: '2015',
    title: 'Aprendendo a Dirigir',
    description: 'With remarkable patience (and probably a few gray hairs!), you guided me through those nerve-wracking driving lessons. Your calm voice and steady presence made me feel safe to learn and grow.',
    images: [
      'https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=400'
    ]
  },
  {
    year: '2018',
    title: 'Orgulho da Formatura',
    description: 'The pride in your eyes that day meant everything to me. All those years of support, encouragement, and belief in my potential culminated in that special moment we shared.',
    images: [
      'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=400'
    ]
  },
  {
    year: '2024',
    title: 'O Homem que Sou Hoje',
    description: 'Everything I am today is because of your love, guidance, and example. You taught me kindness, strength, integrity, and how to be a good person. Thank you for being the best dad anyone could ask for.',
    images: [
      'https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/1257110/pexels-photo-1257110.jpeg?auto=compress&cs=tinysrgb&w=400'
    ]
  }
];

export const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="py-20 bg-gradient-to-b from-slate-50 to-sky-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            A jornada da família
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Cada memória é um tesouro. Aqui estão alguns momentos que fizeram que somos hoje.
          </p>
        </div>
        
        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-sky-300"></div>
          
          {/* Timeline Items */}
          {timelineData.map((item, index) => (
            <TimelineSection
              key={index}
              year={item.year}
              title={item.title}
              description={item.description}
              images={item.images}
              isLeft={index % 2 === 1}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};