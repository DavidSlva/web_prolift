// src/components/Projects.js

import { useState } from 'react';
import Slider from 'react-slick';
import Modal from 'react-modal';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import projects from '../data/projects';

Modal.setAppElement('#root'); // Importante para accesibilidad

const Projects = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const openModal = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setModalIsOpen(false);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Mostrar 3 tarjetas en pantallas grandes
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000, // 10 segundos
    arrows: true, // Flechas de navegación
    responsive: [
      {
        breakpoint: 1024, // Tablets y pantallas medianas
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // Móviles
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

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

          <Slider {...settings}>
            {projects.map((project) => (
                <div key={project.id} className="p-4">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                      <p className="text-gray-600 mb-4">{project.shortDescription}</p>
                      <button
                          onClick={() => openModal(project)}
                          className="mt-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                      >
                        Ver más
                      </button>
                    </div>
                  </div>
                </div>
            ))}
          </Slider>

          {/* Modal */}
          {selectedProject && (
              <Modal
                  isOpen={modalIsOpen}
                  onRequestClose={closeModal}
                  contentLabel="Detalles del Proyecto"
                  className="max-w-3xl mx-auto mt-20 bg-white p-6 rounded-lg shadow-lg outline-none"
                  overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start z-50 overflow-auto"
              >
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{selectedProject.title}</h2>
                  <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-64 object-cover mb-4 rounded"
                  />
                  <p className="text-gray-700 mb-4">{selectedProject.fullDescription}</p>

                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-gray-800">Beneficios:</h3>
                    <ul className="list-disc list-inside text-gray-700">
                      {selectedProject.beneficios.map((beneficio, idx) => (
                          <li key={idx}>{beneficio}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-gray-800">Resultado:</h3>
                    <p className="text-gray-700">{selectedProject.resultado}</p>
                  </div>

                </div>
              </Modal>
          )}
        </div>
      </section>
  );
};

export default Projects;
