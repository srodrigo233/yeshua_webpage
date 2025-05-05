'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'Inicio', href: '/' },
  { name: 'Sobre', href: '/sobre' },
  { name: 'Oferta Académica', href: '/oferta' },
  { name: 'Noticias', href: '/noticias' },
  { name: 'Información', href: '/informacion' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <ul className="flex gap-6 text-lg font-medium">
        {navItems.map(({ name, href }) => (
          <li key={href}>
            <Link
              href={href}
              className={`${
                pathname === href ? 'text-blue-600' : 'text-gray-700'
              } hover:text-blue-500 transition-colors`}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
