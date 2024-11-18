import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants} className="relative">
            <img
              src="https://prolift.cl/wp-content/uploads/2024/08/MG_8609-edited.jpg.webp"
              alt="Gerente General en terreno"
              className="rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-4 rounded-lg">
              <p className="font-semibold">Compromiso con la excelencia</p>
              <p className="text-sm">Nuestro Gerente General en terreno</p>
            </div>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Sobre PROLIFT: Innovación y Calidad en Ingeniería de Ascensores
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Fundada con el objetivo de elevar los estándares de calidad en el servicio de ascensores, 
              PROLIFT cuenta con años de experiencia en el sector de la ingeniería de elevación.
            </p>
            <div className="space-y-4">
              <motion.div
                variants={itemVariants}
                className="border-l-4 border-blue-600 pl-4 hover:bg-blue-50 transition-colors duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Compromiso</h3>
                <p className="text-gray-600">
                  Nos esforzamos por cumplir y superar las expectativas de nuestros clientes en cada proyecto.
                </p>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="border-l-4 border-blue-600 pl-4 hover:bg-blue-50 transition-colors duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Calidad</h3>
                <p className="text-gray-600">
                  Trabajamos con los mejores materiales y tecnologías para asegurar un servicio duradero.
                </p>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="border-l-4 border-blue-600 pl-4 hover:bg-blue-50 transition-colors duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovación</h3>
                <p className="text-gray-600">
                  Siempre estamos en la búsqueda de soluciones que nos permitan mejorar nuestros servicios.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          variants={itemVariants}
          className="mt-16"
        >
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl">
            <iframe
              src="https://www.youtube.com/embed/eYWoGWQHxVI"
              title="PROLIFT en acción"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-[500px] rounded-lg"
            ></iframe>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;