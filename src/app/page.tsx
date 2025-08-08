'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-4 p-4 bg-black text-white">
      <Link href="/" className={pathname === '/' ? 'text-yellow-400' : ''}>
        Home
      </Link>
      <Link href="/about" className={pathname === "/about" ? "text-yellow-400" : ""}>
        About
      </Link>
      <Link href="/Firm" className={pathname === "/Firm" ? "text-yellow-400" : ""}>
        Team
      </Link>
      <Link href="/contact" className={pathname === '/contact' ? 'text-yellow-400' : ''}>
        Contact
      </Link>
    </nav>
  );
};

export default Navbar;
