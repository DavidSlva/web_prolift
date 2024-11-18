import React from 'react';
import { Smartphone, Bell, FileText } from 'lucide-react';

const features = [
  {
    icon: FileText,
    title: 'Informes de Mantenimiento',
    description: 'Recibe un historial detallado de todos los mantenimientos realizados.',
  },
  {
    icon: Bell,
    title: 'Comprobantes de Atención',
    description: 'Recibe todos los comprobantes de atención realizados por nuestros técnicos.',
  },
  {
    icon: Smartphone,
    title: 'Acceso Fácil',
    description: 'Disponible en cualquier dispositivo, nuestra app facilita la supervisión del rendimiento de tu ascensor.',
  },
];

const ProLiftApp = () => {
  return (
    <section id="app" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              ProLiftApp: Control Total de su Ascensor a un Clic de Distancia
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Con ProLiftApp, puedes tener acceso a toda la información sobre el estado de tus ascensores 
              desde cualquier dispositivo. Consulta informes de mantenimiento, reportes técnicos y recibe 
              alertas en tiempo real, todo desde una interfaz fácil de usar.
            </p>
            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href="https://proliftapp.cl/"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Ir a ProliftApp
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg transform rotate-6"></div>
            <img
              src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=800"
              alt="ProLiftApp Dashboard"
              className="relative rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProLiftApp;