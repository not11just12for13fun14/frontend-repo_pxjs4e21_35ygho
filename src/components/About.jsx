import React from 'react';

const About = () => {
  return (
    <section id="sobre-mi" className="relative py-20 sm:py-28 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-white/10 bg-gradient-to-br from-slate-800 to-slate-900">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2069&auto=format&fit=crop"
                alt="Vicente Chillida - Diseño web"
                className="w-full h-full object-cover opacity-80"
              />
            </div>
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Sobre mí</h2>
            <p className="mt-6 text-slate-300 leading-relaxed">
              Soy Vicente Chillida, diseñador y desarrollador web especializado en crear sitios modernos para negocios. Trabajo con un enfoque minimalista, priorizando claridad, velocidad y conversiones. Acompaño a mis clientes desde la idea hasta la publicación, cuidando la experiencia y el detalle.
            </p>
            <p className="mt-4 text-slate-300 leading-relaxed">
              Ofrezco: diseño UI, desarrollo responsive, optimización SEO on-page y rendimiento, integración con herramientas de negocio y soporte continuo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
