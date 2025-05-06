import Link from 'next/link';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white mt-12">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Logo alineado a la derecha */}
        <div className="flex items-start justify-start">
          <Link href="/">
            <img
              src="/yeshivaLogoBlanco.svg"
              alt="Logo del Instituto"
              className="h-15 w-auto"
            />
          </Link>
        </div>
        {/* Servicios */}
        <div>
          <h3 className="text-lg font-bold uppercase mb-6">Servicios</h3>
          <ul className="space-y-3 text-sm text-amber-300">
            <li><Link href="/eventos" className="hover:underline">Eventos</Link></li>
            <li><Link href="/noticias" className="hover:underline">Noticias</Link></li>
            <li><Link href="/contacto" className="hover:underline">Contáctanos</Link></li>
          </ul>
        </div>
        {/* Contacto */}
        <div>
          <h3 className="text-lg font-bold uppercase mb-6">Contáctanos</h3>
          <ul className="space-y-3 text-sm">
            <li>76420527</li>
            <li><a href="mailto:administración@shemayisrael.com" className="hover:underline">administración@shemayisrael.com</a></li>
            <li>
              Torres América Norte, planta baja, of. 2<br />
              Av. América entre Av. Pando y Av. M. Urquidi
            </li>
          </ul>
        {/* Redes Sociales */}
        <div className="flex space-x-4 mt-6">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-950 border border-yellow-400 bg-yellow-400 rounded-full p-2 hover:bg-yellow-500 hover:text-yellow-200 transition"
          >
            <FaFacebookF size={16} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-950 border border-yellow-400 bg-yellow-400 rounded-full p-2 hover:bg-yellow-500 hover:text-yellow-200 transition"
          >
            <FaInstagram size={16} />
          </a>
          <a
            href="https://www.tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-950 border border-yellow-400 bg-yellow-400 rounded-full p-2 hover:bg-yellow-500 hover:text-yellow-200 transition"
          >
            <FaTiktok size={16} />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-950 border border-yellow-400 bg-yellow-400 rounded-full p-2 hover:bg-yellow-500 hover:text-yellow-200 transition"
          >
            <FaLinkedinIn size={16} />
          </a>
        </div>

        </div>
      </div>

      <hr className="border-gray-600 w-[90%] mx-auto my-6" />

      <div className="text-center text-sm text-gray-300 pb-6">
        &copy; {new Date().getFullYear()} Instituto Yeshivá. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
