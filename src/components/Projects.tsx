import React from 'react';

const projects = [
  {
    title: 'Torre Empresarial Centro',
    description: 'Modernización completa de 6 ascensores de alta velocidad',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
    testimonial: {
      text: 'Excelente servicio y atención. PROLIFT nos ayudó a modernizar nuestros ascensores, ¡y el cambio fue increíble!',
      author: 'Carlos Méndez, Gerente de Operaciones',
    },
  },
  {
    title: 'Residencial Las Palmas',
    description: 'Instalación de sistema de monitoreo inteligente en 4 edificios',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800',
    testimonial: {
      text: 'El equipo de PROLIFT demostró gran profesionalismo y conocimiento técnico en todo momento.',
      author: 'Ana Martínez, Administradora',
    },
  },
  {
    title: 'Hospital Metropolitan',
    description: 'Rehabilitación y actualización de ascensores de servicio',
    image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&q=80&w=800',
    testimonial: {
      text: 'La rapidez y eficiencia del servicio de PROLIFT fue fundamental para nuestras operaciones.',
      author: 'Dr. Roberto Sánchez, Director',
    },
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Proyectos Destacados
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A lo largo de los años, hemos trabajado en una gran variedad de proyectos que demuestran 
            nuestra capacidad para adaptarnos a las necesidades específicas de cada cliente.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="border-t pt-4">
                  <p className="text-gray-600 italic mb-2">"{project.testimonial.text}"</p>
                  <p className="text-sm text-gray-500">- {project.testimonial.author}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;