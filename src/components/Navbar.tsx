'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavItem = {
  name: string;
  href: string;
  isLogo?: boolean;
};

const navItems: NavItem[] = [
  { name: 'Inicio', href: '/', isLogo: true },
  { name: 'Sobre', href: '/' },
  { name: 'Oferta Académica', href: '/' },
  { name: 'Noticias', href: '/' },
  { name: 'Información', href: '/' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-blue-950 px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo a la izquierda */}
        <Link href="/">
          <img
            src="/yeshivaLogoBlanco.svg"
            alt="Logo del Instituto"
            className="h-10 w-auto"
          />
        </Link>

        {/* Links a la derecha */}
        <ul className="flex gap-6 text-lg font-medium text-white items-center">
          {navItems
            .filter(item => !item.isLogo)
            .map(({ name, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`${
                    pathname === href ? 'text-white-200' : 'text-white'
                  } hover:text-yellow-200 transition-colors duration-200`}
                >
                  {name}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </nav>
  );
}
