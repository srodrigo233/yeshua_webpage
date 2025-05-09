'use client';
import { useEffect, useRef, useState } from 'react';
import Card from "../commons/Card";

import imageDoctor from '../../../public/img/medico.jpg'

const initialCards = [
  {
    careerName: "Enfermeria",
    description: "Licenciatura en auxiliar de enfermeria",
    image: imageDoctor
  },
  {
    careerName: "Emergencias y urgencias médicas",
    description: "Técnico superior en emergencias y urgenc...",
    image: imageDoctor
  },
  {
    careerName: "Nombre carrera",
    description: "Grado Academico",
    image: imageDoctor
  },
  {
    careerName: "Nombre carrera",
    description: "Grado Academico",
    image: imageDoctor
  }
]

export default function InfiniteCarousel() {
  const [cards, setCards] = useState(initialCards);
  // const [transitioning, setTransitioning] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      // setTransitioning(true);

      // Deslizar visualmente a la izquierda
      if (containerRef.current) {
        containerRef.current.style.transition = 'transform 0.5s ease-in-out';
        containerRef.current.style.transform = 'translateX(-33.3333%)';
      }

      // Después del deslizamiento, reorganizar y resetear
      setTimeout(() => {
        setCards((prev) => {
          const [first, ...rest] = prev;
          return [...rest, first];
        });

        if (containerRef.current) {
          containerRef.current.style.transition = 'none';
          containerRef.current.style.transform = 'translateX(0)';
        }

        // setTransitioning(false);
        setCurrentIndex((prev) => (prev + 1) % initialCards.length);
      }, 500); // debe coincidir con la duración de la animación
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto overflow-hidden">
      <div
        ref={containerRef}
        className="flex"
        // style={{
        //   width: `${(cards.length + 1) * (100 / 3)}%`, // ejemplo para ajustar el ancho total
        // }}
      >
        {/* Mostramos los primeros 4 cards (3 visibles + 1 de transición) */}
        {cards.slice(0, 4).map((card, ind) => (
          <div
            key={ind}
            className="w-1/3 flex-shrink-0 p-4"
          >
            <Card
              key={ind}
              cardTitle={card.careerName}
              carDescription={card.description}
              cardImage={card.image}
              variant='news'
            />
          </div>
        ))}
      </div>
      {/* Puntos indicadores */}
      <div className="flex justify-center mt-4 space-x-2">
        {initialCards.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
