import React from 'react';
import { ArrowRight } from 'lucide-react';
import ReactPlayer from 'react-player';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-r from-blue-600 to-blue-800 pt-16">
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <div className="absolute inset-0 z-0">
        <ReactPlayer
          url="https://prolift.cl/wp-content/uploads/2024/08/frases-pubvlicitarias-prolift.mp4"
          playing
          loop
          muted
          width="100%"
          height="100%"
          style={{ objectFit: 'cover' }}
          className="absolute top-0 left-0"
        />
      </div>
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white flex flex-col justify-around space-y-56 md:space-y-96"
        >
          <div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Expertos en Mantenimiento, Modernización y Rehabilitación de Ascensores
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Comprometidos con su seguridad y comodidad a través de soluciones de ingeniería de alta calidad.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition-colors"
            >
              Explorar Servicios
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-blue-500 hover:bg-blue-400 transition-colors"
            >
              Solicitar Visita Técnica
            </motion.a>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg
          className="fill-current text-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
        >
          <path d="M0,32L60,37.3C120,43,240,53,360,58.7C480,64,600,64,720,58.7C840,53,960,43,1080,42.7C1200,43,1320,53,1380,58.7L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;