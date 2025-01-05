// src/components/Projects.tsx

import React, {useState} from 'react';
import Slider from 'react-slick';
import Modal from 'react-modal';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import projects, {iconMapping, Project} from '../data/projects';

// Configura el elemento raíz para el modal (importante para accesibilidad)
Modal.setAppElement('#root');

const Projects: React.FC = () => {
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const openModal = (project: Project): void => {
        setSelectedProject(project);
        setModalIsOpen(true);
    };

    const closeModal = (): void => {
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
                {/* Título de la sección */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Proyectos Destacados
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        A lo largo de los años, hemos trabajado en una gran variedad de proyectos que demuestran
                        nuestra capacidad para adaptarnos a las necesidades específicas de cada cliente.
                    </p>
                </div>

                {/* Slider de proyectos */}
                <Slider {...settings}>
                    {projects.map((project) => {
                        const IconComponent = iconMapping[project.icon] as React.FC<React.SVGProps<SVGSVGElement>>;

                        return (
                            <div key={project.id} className="p-4">
                                <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
                                    {/* Ícono del proyecto */}
                                    <div className="flex items-center justify-center h-48 bg-blue-100">
                                        {IconComponent && (
                                            <IconComponent className="w-16 h-16 text-blue-600"/>
                                        )}
                                    </div>
                                    {/* Información del proyecto */}
                                    <div className="p-6 flex-1 flex flex-col">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                            {project.title}
                                        </h3>
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
                        );
                    })}
                </Slider>

                {/* Modal de detalles del proyecto */}
                {selectedProject && (
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        contentLabel="Detalles del Proyecto"
                        className="max-w-3xl mx-auto mt-20 bg-white p-6 rounded-lg shadow-lg outline-none"
                        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start z-50 overflow-auto"
                    >
                        <div>
                            {/* Encabezado del modal con el ícono y título */}
                            <div className="flex items-center mb-4">
                                {iconMapping[selectedProject.icon] && React.createElement(iconMapping[selectedProject.icon], {className: 'w-8 h-8 text-blue-600 mr-2'})}
                                <h2 className="text-2xl font-bold text-gray-900">{selectedProject.title}</h2>
                            </div>
                            {/* Descripción completa */}
                            <p className="text-gray-700 mb-4 whitespace-pre-line">
                                {selectedProject.fullDescription}
                            </p>

                            {/* Beneficios */}
                            <div className="mb-4">
                                <h3 className="text-xl font-semibold text-gray-800">Beneficios:</h3>
                                <ul className="list-disc list-inside text-gray-700">
                                    {selectedProject.beneficios.map((beneficio, idx) => (
                                        <li key={idx}>{beneficio}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* Resultado */}
                            <div className="mb-4">
                                <h3 className="text-xl font-semibold text-gray-800">Resultado:</h3>
                                <p className="text-gray-700">{selectedProject.resultado}</p>
                            </div>

                            {/* Botón para cerrar el modal */}
                            <button
                                onClick={closeModal}
                                className="mt-4 bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition duration-300"
                            >
                                Cerrar
                            </button>
                        </div>
                    </Modal>
                )}
            </div>
        </section>
    );
};

export default Projects;
