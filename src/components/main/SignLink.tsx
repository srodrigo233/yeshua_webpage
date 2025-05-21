import Image from "next/image";
import logoYeshiva from '../../../public/logoYeshiva.svg'
import Link from 'next/link';
import { IoDocumentText } from "react-icons/io5";

const SignLink = () => {
  return (
    <div className="relative bg-[#3b3f49] overflow-hidden">
      {/* Fondo con patrón */}
      <div className="absolute inset-0 bg-[url('/img/pattern.svg')] blur-[1px] bg-cover bg-center z-0" />
      
      {/* Overlay con opacidad */}
      <div className="absolute inset-0 bg-[#3f434d]/85 z-10" />
      
      {/* Contenido */}
      <div className="relative z-20 grid place-items-center px-4 md:px-10 py-20 text-center">
        <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          FORMA PARTE DE AQUELLOS QUE
        </h2>
        <h2 className="text-yellow-500 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mt-2">
          CONQUISTAN SU FUTURO
        </h2>
        <p className="text-neutral-400 font-bold pt-4 pb-6 text-base sm:text-lg max-w-xl">
          Aprende, trasciende y empieza a cumplir tus sueños.
        </p>
        <Link href="/academic">
          <button className="bg-yellow-500 px-6 py-3 font-bold rounded-md cursor-pointer hover:bg-yellow-400 text-base sm:text-lg">
            PLANES Y BECAS
          </button>
        </Link>
        <Image
          className="pt-10"
          width={80}
          height={80}
          alt="Logo Yeshiva"
          src={logoYeshiva}
        />
      </div>

      {/* Botón Google Forms flotante */}
      <button className="absolute bottom-5 right-5 sm:bottom-10 sm:right-10 bg-yellow-500 hover:bg-yellow-400 rounded-full p-3 sm:p-4 text-3xl sm:text-4xl cursor-pointer z-30 shadow-lg">
        <IoDocumentText />
      </button>
    </div>
  );
};

export default SignLink;