import Link from 'next/link';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white mt-12">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Logo */}
        <div className="flex items-start justify-start">
          <Link href="/">
            <img
              src="/yeshivaLogoBlanco.svg"
              alt="Logo del Instituto"
              className="h-16 w-auto"
            />
          </Link>
        </div>

        {/* Servicios */}
        <div>
          <h3 className="text-lg font-bold uppercase mb-6">Servicios</h3>
          <ul className="space-y-3 text-sm text-amber-300">
            {[
              { label: 'Eventos', href: 'events' },
              { label: 'Noticias', href: 'notices' },
              { label: 'Contáctanos', href: 'info' },
            ].map(({ label, href }) => (
              <li key={label}>
                <Link href={href} className="hover:underline">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacto y redes sociales */}
        <div>
          <h3 className="text-lg font-bold uppercase mb-6">Contáctanos</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <FaPhoneAlt size={16} className="text-white" />
              <span>76420527</span>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope size={16} className="text-white" />
              <a
                href="mailto:administración@shemayisrael.com"
                className="hover:underline"
              >
                administración@shemayisrael.com
              </a>
            </li>
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt size={18} className="text-white mt-1" />
              <span>
                Torres América Norte, planta baja, of. 2<br />
                Av. América entre Av. Pando y Av. M. Urquidi
              </span>
            </li>
          </ul>

          {/* Redes Sociales */}
          <div className="flex space-x-4 mt-6">
            {[
              { icon: FaFacebookF, href: 'https://www.facebook.com' },
              { icon: FaInstagram, href: 'https://www.instagram.com' },
              { icon: FaTiktok, href: 'https://www.tiktok.com' },
              { icon: FaLinkedinIn, href: 'https://www.linkedin.com' },
            ].map(({ icon: Icon, href }, idx) => (
              <a
                key={idx}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-950 border border-yellow-400 bg-yellow-400 rounded-full p-2 hover:bg-yellow-500 hover:text-yellow-200 transition"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Línea divisora */}
      <hr className="border-gray-600 w-[90%] mx-auto my-6" />

      {/* Derechos reservados */}
      <div className="text-center text-sm text-gray-300 pb-6">
        &copy; {new Date().getFullYear()} Instituto Yeshivá. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
