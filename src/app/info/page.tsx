import React from 'react';
import SectionTitle from '@/components/commons/SectionTitle';

const contactInfo = {
  phone: '+591 77418638',
  email: 'administración@shemayisrael.com',
};

const locations = [
  {
    title: 'Zona norte',
    address: 'Av. América #839 entre Pando y Melchor Urquidi, Edif. Torres América Norte (Lado Ic Norte)',
  },
  {
    title: 'Blanco galindo',
    address: 'Av. Sexta s/n casi esquina Av. Blanco Galindo Km 5,5 (zona Coña Coña)',
  },
];

const officeHours = [
  'Lunes a Viernes: 08:30 - 12:30 / 14:00 - 19:30 hrs',
  'Sábados: 08:00 - 12:30 hrs',
];

const InformacionPage = () => {
  return (
    <main className="text-gray-700">
      {/* Imagen de cabecera */}
      <div className="w-full h-[60vh] overflow-hidden">
        <img
          src="/infoBg.svg"
          alt="Información del Instituto"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Contenido principal */}
      <div className="max-w-4xl mx-auto px-4 py-10 space-y-12 ">

        {/* Contacto */}
        <section>
          <div className='mb-5'><SectionTitle title="Contacto" /></div>
          <p className="text-justify leading-relaxed">Administración</p>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li><strong>Teléfono:</strong> {contactInfo.phone}</li>
            <li><strong>Email:</strong> {contactInfo.email}</li>
          </ul>
        </section>

        {/* Dirección */}
        <section>
          <div className="mb-5">
            <SectionTitle title="Dirección" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Columna izquierda: Información */}
            <div>
              {locations.map(({ title, address }, index) => (
                <div key={index} className="mb-6">
                  <p className="font-bold leading-relaxed mb-2">{title}:</p>
                  <p className="font-medium">{address}</p>
                </div>
              ))}
            </div>

            {/* Columna derecha: Mapa */}
            <div>
              <iframe
                title="Ubicación Yeshiva"
                src="https://www.google.com/maps/d/embed?mid=1psC2DX3hfy8NBiEZSM-P7bBdnmrhAiE&ehbc=2E312F"
                width="100%"
                height="100%"
                className="w-full rounded-lg shadow aspect-square"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Horarios */}
        <section>
          <div className='mb-5'><SectionTitle title="Horarios de atención" /></div>
          <ul className="list-disc list-inside space-y-1">
            {officeHours.map((line, index) => (
              <li key={index}>{line}</li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
};

export default InformacionPage;
