'use client';

import React, { useEffect, useState } from 'react';
import SectionTitle from '../commons/SectionTitle';
import Image from 'next/image';
import { GoArrowRight } from 'react-icons/go';
import Link from 'next/link';

import ilustration1 from '../../../public/img/ilustration1.png';
import ilustration2 from '../../../public/img/ilustration2.png';
import ilustration3 from '../../../public/img/ilustration3.png';

const events = [
  {
    date: '12/05/2025',
    title: 'Curso práctico de Inyectables y Venoclisis',
    banner: ilustration1,
    isActive: true,
  },
  {
    date: '26/05/2025',
    title: 'Presente en la rueda de negocios de la ICAM',
    banner: ilustration2,
    isActive: true,
  },
  {
    date: '03/06/2025',
    title: 'Presente en el día del peatón',
    banner: ilustration3,
    isActive: false,
  },
];

const EventDetail = ({
  date,
  title,
  isActive,
}: {
  date: string;
  title: string;
  isActive: boolean;
}) => (
  <div className="relative pl-8 pb-6">
    {/* Punto */}
    <div
      className={`absolute left-0 top-1 w-4 h-4 rounded-full ${
        isActive ? 'bg-blue-900' : 'bg-neutral-400'
      }`}
    />
    <p className="text-yellow-500 text-sm">{date}</p>
    <h3
      className={`font-bold text-lg md:text-xl ${
        isActive ? 'text-blue-900' : 'text-neutral-400'
      }`}
    >
      {title}
    </h3>
  </div>
);

const Events = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % events.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="px-4 sm:px-6 md:px-10 py-10 max-w-screen-xl">
      <SectionTitle size={2} title="EVENTOS" linkTo="/events"/>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Timeline */}
        <div className="relative col-span-2">
          {events.map((event, idx) => (
            <EventDetail
              key={idx}
              date={event.date}
              title={event.title}
              isActive={idx === currentIndex}
            />
          ))}
        </div>

        {/* Imagen */}
        <div className="w-full">
          <Image
            src={events[currentIndex].banner}
            alt={`Evento: ${events[currentIndex].title}`}
            className="rounded-lg shadow-md"
            layout="responsive"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      </div>

      {/* Botón */}
      <Link href="/events">
        <div className="flex items-center gap-4 mt-8 cursor-pointer">
          <button className="bg-yellow-500 rounded-full p-3 text-2xl text-white hover:bg-yellow-600 transition">
            <GoArrowRight />
          </button>
          <h2 className="font-bold text-blue-900 text-lg">Ir al calendario de eventos</h2>
        </div>
      </Link>
    </div>
  );
};

export default Events;
