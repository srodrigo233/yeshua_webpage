'use client';

import { useEffect, useRef, useState } from 'react';
import Card from '../commons/Card';
import imageDoctor from '../../../public/img/medico.jpg';

const baseCards = [
  {
    careerName: 'Enfermería',
    description: 'Licenciatura en auxiliar de enfermería',
    image: imageDoctor,
  },
  {
    careerName: 'Emergencias médicas',
    description: 'Técnico superior en emergencias y urgencias',
    image: imageDoctor,
  },
  {
    careerName: 'Terapia Física',
    description: 'Licenciatura en rehabilitación y fisioterapia',
    image: imageDoctor,
  },
  {
    careerName: 'Nutrición',
    description: 'Técnico superior en nutrición y dietética',
    image: imageDoctor,
  },
];

export default function InfiniteCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleCards, setVisibleCards] = useState(3);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const getVisibleCards = () => {
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 768) return 2;
    return 3;
  };

  useEffect(() => {
    const updateVisibleCards = () => {
      setVisibleCards(getVisibleCards());
    };
    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);
    return () => window.removeEventListener('resize', updateVisibleCards);
  }, []);

  const cards = [...baseCards, ...baseCards.slice(0, visibleCards)];
  const totalSlides = baseCards.length;

  // Avance automático
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => prev + 1);
      setIsTransitioning(true);
    }, 4000);

    return () => clearInterval(interval);
  }, [visibleCards]);

  // Reset después del último slide para el efecto infinito
  useEffect(() => {
    if (currentSlide === totalSlides) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(0);
      }, 500); // igual al tiempo de transición

      return () => clearTimeout(timeout);
    } else {
      setIsTransitioning(true);
    }
  }, [currentSlide, totalSlides]);

  return (
    <div className="w-full overflow-hidden my-5">
      <div className="relative">
        <div
          ref={containerRef}
          className={`flex ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
          style={{
            width: `${(cards.length / visibleCards) * 100}%`,
            transform: `translateX(-${(100 / cards.length) * currentSlide * visibleCards}%)`,
          }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              style={{
                width: `${100 / cards.length}%`,
              }}
              className="flex-shrink-0 px-2"
            >
              <Card
                cardTitle={card.careerName}
                carDescription={card.description}
                cardImage={card.image}
                variant="news"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Indicadores */}
      <div className="flex justify-center mt-4 space-x-2">
        {baseCards.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentSlide % totalSlides ? 'bg-yellow-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
