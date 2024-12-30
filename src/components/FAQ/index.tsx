import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import FAQItem from './FAQItem';

const faqs = [
    {
        question: '¿Qué tipos de servicios ofrece PROLIFT Ingeniería y Ascensores?',
        answer: (
            <ul className="list-disc pl-5 space-y-2">
                <li>Mantenimiento Preventivo y Correctivo: Inspección y reparación para asegurar el funcionamiento óptimo y seguro de los ascensores.</li>
                <li>Reparación de Fallas Complejas: Solucionamos problemas técnicos complejos y realizamos reemplazo y adaptación de repuestos.</li>
                <li>Modernización: Actualización de sistemas de control y mejora del confort del viaje.</li>
                <li>Rehabilitación: Reactivación de ascensores fuera de servicio aplicando tecnología avanzada para el ahorro energético.</li>
                <li>Asesoría y Auditoría Técnica: Consultoría experta y evaluaciones detalladas para asegurar el cumplimiento de normativas y estándares.</li>
            </ul>
        ),
    },
    {
        question: '¿Cuánto tiempo toma el mantenimiento preventivo de un ascensor?',
        answer: 'El tiempo requerido para realizar el mantenimiento preventivo puede variar dependiendo del tipo y el estado del ascensor. Generalmente, una inspección completa toma entre 4 horas y 8 horas. Sin embargo, si se identifican problemas adicionales, el tiempo puede aumentar.',
    },
    {
        question: '¿Con qué frecuencia debe realizarse el mantenimiento de un ascensor?',
        answer: 'Recomendamos realizar el mantenimiento preventivo cada mes para asegurar el correcto funcionamiento del ascensor y prevenir problemas mayores. La frecuencia puede variar según el uso y las condiciones del ascensor.',
    },
    {
        question: '¿Qué incluye la modernización de un ascensor?',
        answer: (
            <ul className="list-disc pl-5 space-y-2">
                <li>Actualización de Sistemas de Control: Mejora de la tecnología de control para una operación más eficiente y segura.</li>
                <li>Actualización de Componentes: Sustitución de piezas obsoletas por repuestos modernos.</li>
                <li>Mejora del Confort del Viaje: Ajustes para reducir el ruido y la vibración, y mejorar la suavidad del movimiento.</li>
            </ul>
        ),
    },
    {
        question: '¿Qué hacer si mi ascensor está fuera de servicio?',
        answer: 'Si tu ascensor está fuera de servicio, te recomendamos que nos contactes de inmediato. Realizaremos una evaluación para identificar la causa del problema y ofrecer una solución rápida para reactivarlo.',
    },
    {
        question: '¿Cuáles son las marcas de ascensores con las que trabajamos?',
        answer: 'Trabajamos con una amplia variedad de marcas, incluyendo OTIS, Schindler, Thyssenkrupp, BLT, KONE, FUJI YIDA, LG, Mitsubishi, Orona, entre otras. Nuestra experiencia con estas marcas nos permite ofrecer soluciones especializadas para cada una.',
    },
    {
        question: '¿Cómo funciona la aplicación exclusiva para clientes de PROLIFT?',
        answer: (
            <ul className="list-disc pl-5 space-y-2">
                <li>Revisar Informes en Línea: Acceso a informes detallados sobre el estado y mantenimiento de sus ascensores.</li>
                <li>Recibir Notificaciones: Alertas sobre mantenimiento programado, actualizaciones y cualquier problema detectado.</li>
                <li>Gestionar Servicios: Solicitar servicios adicionales y revisar el historial de mantenimiento de manera fácil y rápida.</li>
            </ul>
        ),
    },
    {
        question: '¿Cómo puedo solicitar una auditoría técnica para mi ascensor?',
        answer: 'Para solicitar una auditoría técnica, puedes ponerte en contacto con nosotros a través de nuestro formulario de contacto en el sitio web, por correo electrónico o llamando a nuestro número de teléfono. Evaluaremos tus necesidades y programaremos una visita para realizar la auditoría.',
    },
    {
        question: '¿Qué garantías ofrecen para los servicios y repuestos?',
        answer: 'Ofrecemos garantías en nuestros servicios de mantenimiento, reparación y modernización. La duración de la garantía puede variar dependiendo del tipo de servicio y repuesto. Te proporcionaremos toda la información relevante sobre las garantías aplicables al finalizar cada servicio.',
    },
    {
        question: '¿Cómo puedo estar seguro de que los técnicos están calificados?',
        answer: 'Nuestro personal técnico está altamente calificado y certificado, con amplia experiencia en el rubro. Además, nuestros técnicos se someten regularmente a capacitaciones para mantenerse actualizados con las últimas tecnologías y mejores prácticas. Estamos registrados en el MINVU con el ROL:13-232.',
    },
];

const FAQ = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section id="faq" className="py-24 bg-white">
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8 }}
                className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                    Preguntas Frecuentes (FAQ)
                </h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default FAQ;
