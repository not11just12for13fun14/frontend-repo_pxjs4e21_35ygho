import React from 'react';
import { Instagram, Linkedin, Facebook, Music2 } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="text-slate-400 text-sm">© {year} Vicente Chillida. Todos los derechos reservados.</p>

          <div className="flex items-center gap-4">
            <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="Instagram"><Instagram size={18} /></a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="TikTok"><Music2 size={18} /></a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="Facebook"><Facebook size={18} /></a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="LinkedIn"><Linkedin size={18} /></a>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-4 text-xs text-slate-400">
          <a href="#aviso-legal" className="hover:text-white transition-colors">Aviso legal</a>
          <a href="#politica-privacidad" className="hover:text-white transition-colors">Política de privacidad</a>
          <a href="#cookies" className="hover:text-white transition-colors">Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
