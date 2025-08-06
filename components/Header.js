'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';

export default function Header() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: '$EMC Token', href: '/dashboard' },
    { name: 'Get your EMC', href: '/signup' },
  ];

  return (
    <header className="relative z-50 bg-black/10 backdrop-blur-xl border-b border-white/20 shadow-lg shadow-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-white text-xl font-bold hover:text-gray-300 transition-colors drop-shadow-lg">
              EasyMoneyCard
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.slice(0, 2).map(({ name, href }) => (
              <Link
                key={href}
                href={href}
                className={clsx(
                  'text-white/90 hover:text-white transition-colors drop-shadow-sm',
                  router.pathname === href
                    ? 'border-b-2 border-gradient-to-r from-purple-400 to-yellow-400'
                    : ''
                )}
              >
                {name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <Link
            href="/signup"
            className="hidden sm:inline-block px-6 py-2 bg-black/30 backdrop-blur-sm border border-white/20 rounded-lg text-white hover:bg-white/10 transition-all duration-300 shadow-lg shadow-black/20 hover:shadow-white/10"
          >
            Get your EasyMoneyCard
          </Link>

          {/* Mobile CTA */}
          <Link
            href="/signup"
            className="sm:hidden inline-block px-4 py-1.5 bg-black/30 backdrop-blur-sm border border-white/20 rounded text-white text-sm hover:bg-white/10 transition-all duration-300"
          >
            Get your EMC
          </Link>

          {/* Toggle Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white md:hidden p-2 z-50"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Animated Sidebar Menu */}
      <div
        className={clsx(
          'fixed inset-0 z-40 transition-all duration-300 md:hidden',
          menuOpen ? 'visible' : 'invisible'
        )}
      >
        {/* Sidebar + Backdrop Overlay */}
        {menuOpen && (
          <div className="fixed inset-0 z-40 md:hidden">
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
              onClick={() => setMenuOpen(false)}
            />

            {/* Sidebar */}
            <div
              className="absolute top-0 right-0 h-full w-64 bg-black border-l border-white/10 shadow-xl transform transition-transform duration-300 ease-in-out translate-x-0"
            >
              <nav className="p-6 space-y-6">
                {navLinks.map(({ name, href }) => (
                  <Link
                    key={href}
                    href={href}
                    className={clsx(
                      'block text-white text-lg font-medium transition-all',
                      router.pathname === href ? 'text-yellow-400' : 'hover:text-yellow-300'
                    )}
                    onClick={() => setMenuOpen(false)}
                  >
                    {name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
