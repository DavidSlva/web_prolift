import React from 'react';
import { Shield, Clock, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const services = [
  {
    icon: Shield,
    title: 'Mantenimiento Preventivo y Correctivo',
    description:
      'Nos encargamos de mantener sus ascensores en perfectas condiciones, anticipando problemas antes de que ocurran.',
    image: 'https://prolift.cl/wp-content/uploads/2024/08/MG_8460-683x1024.jpg.webp'
  },
  {
    icon: Wrench,
    title: 'Modernización de Sistemas',
    description:
      'Actualizamos sus ascensores con las últimas tecnologías para mejorar la seguridad, eficiencia y estética.',
    image: 'https://prolift.cl/wp-content/uploads/2024/08/MG_8462-1024x683.jpg.webp'
  },
  {
    icon: Clock,
    title: 'Rehabilitación de Ascensores',
    description:
      'Recuperamos ascensores en desuso, aplicando mejoras tecnológicas para optimizar su rendimiento.',
    image: 'https://prolift.cl/wp-content/uploads/2024/08/MG_8587.jpg.webp'
  },
];

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="services" className="py-24 bg-gray-50">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nuestros Servicios Profesionales
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Desde mantenimiento preventivo hasta rehabilitación de ascensores fuera de servicio, 
            ofrecemos soluciones completas para asegurar el óptimo funcionamiento de sus equipos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300"
            >
              {service.image && (
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-12 text-center"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300"
          >
            Solicitar Información
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;