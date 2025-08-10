'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-4 p-4 bg-black text-white">
      {/* Home */}
      <Link href="/" className={pathname === '/' ? 'text-yellow-400' : ''}>
        Home
      </Link>

      {/* Desktop About */}
      <Link
        href="/about"
        className={`hidden md:block ${pathname === '/about' ? 'text-yellow-400' : ''}`}
      >
        About
      </Link>

      {/* Mobile About Mini */}
      <Link
        href="/about-mini"
        className={`block md:hidden ${pathname === '/about-mini' ? 'text-yellow-400' : ''}`}
      >
        
      </Link>

      {/* Firm */}
      <Link
        href="/Firm"
        className={pathname === '/Firm' ? 'text-yellow-400' : ''}
      >
        
      </Link>

      {/* Contact */}
      <Link
        href="/contact"
        className={pathname === '/contact' ? 'text-yellow-400' : ''}
      >
        Contact
      </Link>
    </nav>
  );
};

export default Navbar;
