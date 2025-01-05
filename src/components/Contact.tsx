// src/components/Contact.tsx

import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact: React.FC = () => {
  // Estados para los campos del formulario
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    // Honeypot field
    honey: '',
  });

  // Estado para manejar mensajes de éxito o error
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Manejar cambios en los campos del formulario
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  // Manejar el envío del formulario
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Verificar el campo honeypot
    if (formData.honey) {
      // Si el campo honeypot está lleno, es probable que sea spam
      setStatusMessage('Mensaje enviado exitosamente!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        honey: '',
      });
      return;
    }

    setIsSubmitting(true);

    // Enviar el formulario usando EmailJS
    emailjs
        .send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,    // Reemplaza con tu Service ID
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,   // Reemplaza con tu Template ID
            formData,
            import.meta.env.VITE_EMAILJS_USER_ID    // Reemplaza con tu Public Key
        )
        .then(
            (result) => {
              console.log(result.text);
              setStatusMessage('¡Mensaje enviado exitosamente!');
              setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: '',
                honey: '',
              });
            },
            (error) => {
              console.log(error.text);
              setStatusMessage('Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.');
            }
        )
        .finally(() => {
          setIsSubmitting(false);
        });
  };

  return (
      <section id="contact" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Título de la sección */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contáctanos</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              ¿Tienes alguna consulta o necesitas asistencia? Nuestro equipo de atención al cliente está
              disponible para ayudarte con todas tus preguntas sobre instalación, mantenimiento y servicio
              de ascensores.
            </p>
          </div>

          {/* Información de Contacto */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <Phone className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Llámanos</h3>
              <p className="text-gray-600">+569 3021 8610</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <Mail className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Escríbenos</h3>
              <p className="text-gray-600">info@proliftingenieria.cl</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Visítanos</h3>
              <p className="text-gray-600">Cerro el plomo 5931 oficina 1108 Las Condes</p>
            </div>
          </div>

          {/* Formulario de Contacto */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form className="grid md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
              {/* Honeypot Field (Hidden) */}
              <div className="hidden">
                <label htmlFor="honey" className="block text-sm font-medium text-gray-700 mb-1">
                  Honey
                </label>
                <input
                    type="text"
                    id="honey"
                    name="honey"
                    value={formData.honey}
                    onChange={handleChange}
                    autoComplete="off"
                    tabIndex={-1}
                    aria-hidden="true"
                />
              </div>

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Tu nombre"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Correo Electrónico
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="tu@correo.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Teléfono
                </label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="+569 1234 5678"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Asunto
                </label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Asunto del mensaje"
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensaje
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Escribe tu mensaje aquí..."
                ></textarea>
              </div>
              {statusMessage && (
                  <div
                      className={`md:col-span-2 text-center ${
                          statusMessage.includes('error') ? 'text-red-500' : 'text-green-500'
                      }`}
                  >
                    {statusMessage}
                  </div>
              )}
              <div className="md:col-span-2">
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors ${
                        isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
  );
};

export default Contact;
