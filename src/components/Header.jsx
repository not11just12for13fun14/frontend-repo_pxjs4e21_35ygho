import React from 'react';
import { Menu } from 'lucide-react';

const Header = () => {
  const navItems = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Sobre mí', href: '#sobre-mi' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-slate-900/70 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#inicio" className="font-semibold tracking-tight text-white text-lg">Vicente Chillida</a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-slate-300 hover:text-white transition-colors text-sm"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://wa.link/8xm8ly"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full bg-emerald-500 text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-emerald-400 transition-colors"
          >
            WhatsApp
          </a>
          <button className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-lg border border-white/10 text-slate-300">
            <Menu size={18} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
