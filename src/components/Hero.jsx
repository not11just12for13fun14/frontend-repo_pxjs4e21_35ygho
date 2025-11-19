import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="inicio" className="relative pt-28 pb-16 sm:pb-24">
      <div className="absolute inset-0 opacity-90">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative z-10">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
                Diseño webs modernas para negocios
              </h1>
              <p className="mt-6 text-base sm:text-lg text-slate-200 max-w-xl">
                Experiencia enfocada en resultados: sitios rápidos, claros y pensados para convertir.
              </p>
              <div className="mt-8 flex items-center gap-3">
                <a href="#proyectos" className="inline-flex items-center rounded-full bg-white/10 text-white px-5 py-3 text-sm font-medium hover:bg-white/20 transition-colors">
                  Ver proyectos
                </a>
                <a href="https://wa.link/8xm8ly" target="_blank" rel="noreferrer" className="inline-flex items-center rounded-full bg-emerald-500 text-white px-5 py-3 text-sm font-medium hover:bg-emerald-400 transition-colors">
                  Hablemos por WhatsApp
                </a>
              </div>
            </div>
            <div className="relative h-[360px] sm:h-[480px] lg:h-[560px] rounded-2xl overflow-hidden ring-1 ring-white/10 bg-slate-900/40 backdrop-blur pointer-events-none" />
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900 via-transparent to-slate-900" />
      </div>
    </section>
  );
};

export default Hero;
