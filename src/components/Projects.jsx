import React from 'react';

const defaultProjects = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2070&auto=format&fit=crop',
    client: 'Cafetería Aurora',
    description: 'Web corporativa con menú online y reservas.',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2070&auto=format&fit=crop',
    client: 'Estudio Fit360',
    description: 'Landing page de captación con optimización SEO.',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2032&auto=format&fit=crop',
    client: 'Consultora Norte',
    description: 'Sitio institucional con blog y estrategia de contenidos.',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?q=80&w=2027&auto=format&fit=crop',
    client: 'Clínica DentaCare',
    description: 'Rediseño centrado en confianza y conversiones.',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop',
    client: 'Restaurante Olivo',
    description: 'Carta digital y sistema de reservas integrado.',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1742415888252-10b1cdbb643e?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDYXJ0YSUyMGRpZ2l0YWwlMjB5JTIwc2lzdGVtYXxlbnwwfDB8fHwxNzYzNTk1MDA2fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    client: 'Tienda EcoHome',
    description: 'Ecommerce ligero con énfasis en usabilidad.',
  },
];

const Projects = ({ projects = defaultProjects }) => {
  return (
    <section id="proyectos" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Proyectos</h2>
            <p className="mt-3 text-slate-300">Una selección de trabajos recientes.</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.id} className="group rounded-2xl overflow-hidden bg-slate-900/50 border border-white/10 hover:border-white/20 transition-colors">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.image} alt={p.client} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500" />
              </div>
              <div className="p-4">
                <h3 className="text-white font-medium">{p.client}</h3>
                <p className="mt-1 text-sm text-slate-300">{p.description}</p>
                <details className="mt-3">
                  <summary className="cursor-pointer text-xs text-slate-400 hover:text-slate-200 transition-colors">Más info</summary>
                  <div className="mt-2 text-sm text-slate-300/90">
                    Página adaptable, optimizada y conectada a herramientas del negocio.
                  </div>
                </details>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
