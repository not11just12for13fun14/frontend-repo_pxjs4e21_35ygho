import React from 'react';

const Contact = () => {
  return (
    <section id="contacto" className="relative py-20 sm:py-28 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">¿Hablamos?</h2>
        <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
          Cuéntame sobre tu negocio y te propongo una web clara, rápida y lista para convertir.
        </p>
        <a
          href="https://wa.link/8xm8ly"
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center rounded-full bg-emerald-500 text-white px-6 py-3 text-base font-medium hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/20"
        >
          Escríbeme por WhatsApp
        </a>
      </div>
    </section>
  );
};

export default Contact;
