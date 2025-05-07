import React from 'react';
import SectionTitle from '@/components/commons/SectionTitle';
import Card from '@/components/commons/Card'; // Asegúrate de usar la ruta correcta
import evento1 from '../../../public/events/ImgEv.png';

const eventos = [
  {
    cardTitle: 'Curso practico de inyectables',
    carDescription: 'practicas del uso de inyectables en pacientes',
    cardImage: evento1,
  },
  {
    cardTitle: 'Rueda de negocios ICAM',
    carDescription: 'Un taller intensivo para aprender fundamentos.',
    cardImage: evento1,
  },
  {
    cardTitle: 'Actividad del dia del peaton',
    carDescription: 'paseop en bicicleta por el dia del peaton.',
    cardImage: evento1,
  },
];

const EventosPage = () => {
  return (
    <main className="text-gray-700">
      {/* Imagen de cabecera */}
      <div className="w-full h-[60vh] overflow-hidden">
        <img
          src="/eventsBg.svg"
          alt="Eventos del Instituto"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Contenido principal */}
      <div className="max-w-6xl mx-auto px-4 py-10 space-y-12">
        <SectionTitle title="Eventos del Instituto" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {eventos.map((evento, index) => (
            <Card
              key={index}
              cardTitle={evento.cardTitle}
              carDescription={evento.carDescription}
              cardImage={evento.cardImage}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default EventosPage;
