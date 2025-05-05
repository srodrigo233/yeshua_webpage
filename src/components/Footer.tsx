import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white mt-12">
      <div className="max-w-7xl mx-auto px-6 pt-6 flex flex-col items-center md:items-start text-center md:text-left">
        <div className="flex flex-col gap-2 text-sm text-amber-300 mb-4">
          <Link href="/eventos" className="hover:underline">Eventos</Link>
          <Link href="/noticias" className="hover:underline">Noticias</Link>
          <Link href="/contacto" className="hover:underline">Contáctanos</Link>
        </div>
      </div>

      <hr className="border-b-gray-200 w-[95%] mx-auto mb-4" />

      <div className="max-w-7xl mx-auto px-6 pb-6 flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
        <Link href="/">
          <img
            src="/yeshivaLogoBlanco.svg"
            alt="Logo del Instituto"
            className="h-10 w-auto"
          />
        </Link>

        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-end text-sm text-white mt-6">
            <div className="w-full md:w-auto text-center mb-4 md:mb-0">
                <p>&copy; {new Date().getFullYear()} Instituto Yeshivá. Todos los derechos reservados.</p>
            </div>
            <div className="text-right">
                <p>76420527</p>
                <p>administración@shemayisrael.com</p>
                <p>
                Torres América Norte, planta baja, of. 2<br />
                Av. América entre Av. Pando y Av. M. Urquidi
                </p>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
