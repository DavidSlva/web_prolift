// src/data/projects.ts

import {
    Settings,
    RefreshCw,
    School,
    Settings,
    Zap,
    Wrench,
} from 'lucide-react';

export interface Project {
    id: number;
    title: string;
    shortDescription: string;
    fullDescription: string;
    beneficios: string[];
    resultado: string;
    icon: keyof typeof iconMapping;
}

// Mapeo de nombres de íconos a sus componentes correspondientes
export const iconMapping = {
    Settings: Settings,
    RefreshCw: RefreshCw,
    School: School,
    Tool: Settings,
    Zap: Zap,
    Wrench: Wrench,
};

const projects: Project[] = [
    {
        id: 1,
        title: 'Fabricación de Polea de Tracción para Edificio Residencial',
        shortDescription:
            'Fabricación e instalación de una polea de tracción a medida para un edificio residencial.',
        fullDescription: `
ProLift llevó a cabo la fabricación y posterior instalación de una polea de tracción a medida para un edificio residencial.
Este componente es crucial para el funcionamiento seguro y eficiente del ascensor, asegurando un movimiento fluido y confiable.
    `,
        beneficios: [
            'Mejora en la seguridad y fiabilidad del ascensor.',
            'Prolongación de la vida útil del sistema de tracción.',
            'Reducción de vibraciones y ruido, proporcionando una experiencia más cómoda para los residentes.',
        ],
        resultado:
            'El ascensor ahora opera de manera más suave y silenciosa, lo que ha mejorado la satisfacción de los residentes y ha garantizado un funcionamiento seguro y eficiente a largo plazo.',
        icon: 'Settings', // Reemplazado 'Gear' por 'Settings'
    },
    {
        id: 2,
        title: 'Modernización de Ascensores en Edificios Residenciales y Hoteles',
        shortDescription:
            'Actualización integral de sistemas de control y componentes obsoletos.',
        fullDescription: `
ProLift lideró un proyecto de modernización integral de ascensores en edificios residenciales y hoteles.
Este proyecto incluyó la actualización de sistemas de control, la instalación de tecnología avanzada y el reemplazo de componentes obsoletos para cumplir con los estándares más exigentes de seguridad y confort.
    `,
        beneficios: [
            'Mayor seguridad y eficiencia operativa de los ascensores.',
            'Reducción del consumo energético y disminución de costos operativos.',
            'Mejora en la experiencia del usuario con un servicio más rápido y silencioso.',
        ],
        resultado:
            'Tanto en los edificios residenciales como en los hoteles, los usuarios ahora disfrutan de ascensores más modernos, seguros y eficientes, que han elevado la calidad del servicio y la satisfacción general.',
        icon: 'RefreshCw',
    },
    {
        id: 3,
        title: 'Modernización en Instituciones Educativas',
        shortDescription:
            'Actualización de ascensores para cumplir con normativas de seguridad y accesibilidad.',
        fullDescription: `
ProLift modernizó ascensores en varias instituciones educativas, asegurando que cumplan con las normativas de seguridad y accesibilidad.
Este proyecto fue diseñado para mejorar la capacidad de los ascensores y adaptarlos al alto tráfico diario de estudiantes, profesores y personal.
    `,
        beneficios: [
            'Mejora en la accesibilidad para personas con movilidad reducida.',
            'Incremento en la seguridad y fiabilidad del ascensor.',
            'Optimización del flujo de personas, reduciendo tiempos de espera.',
        ],
        resultado:
            'Las instituciones educativas ahora cuentan con ascensores que cumplen con las normativas vigentes y ofrecen un servicio más eficiente y seguro, mejorando la movilidad dentro de los campus.',
        icon: 'School',
    },
    {
        id: 4,
        title: 'Habilitación de Ascensor Fuera de Servicio en Hotel',
        shortDescription:
            'Reactivación y reparación de un ascensor inactivo en un hotel.',
        fullDescription: `
En este proyecto, ProLift se encargó de la reactivación de un ascensor que había estado fuera de servicio en un hotel.
Se realizaron las reparaciones necesarias, reemplazo de componentes críticos y ajustes para garantizar que el ascensor volviera a operar de manera segura y eficiente.
    `,
        beneficios: [
            'Restauración del servicio de ascensor sin necesidad de una instalación nueva.',
            'Mejora en la accesibilidad y comodidad para los huéspedes del hotel.',
            'Ahorro de costos al evitar la instalación de un nuevo ascensor.',
        ],
        resultado:
            'El ascensor fue habilitado con éxito, permitiendo que el hotel vuelva a ofrecer un servicio completo a sus huéspedes, mejorando así la experiencia general de los visitantes.',
        icon: 'Tool',
    },
    {
        id: 5,
        title:
            'Reemplazo de Circuitos Eléctricos Bajo Normativa Vigente en Edificios Residenciales',
        shortDescription: 'Actualización de circuitos eléctricos en sistemas de ascensores.',
        fullDescription: `
ProLift llevó a cabo el reemplazo de circuitos eléctricos en los sistemas de ascensores de varios edificios residenciales.
Este proyecto se centró en actualizar los componentes eléctricos para cumplir con las normativas vigentes y mejorar la seguridad y eficiencia del sistema.
    `,
        beneficios: [
            'Aseguramiento del cumplimiento con las normativas de seguridad eléctrica.',
            'Reducción del riesgo de fallas eléctricas y mayor fiabilidad en la operación de los ascensores.',
            'Mejora en la eficiencia energética, reduciendo el consumo de electricidad.',
        ],
        resultado:
            'Los edificios residenciales ahora cuentan con ascensores que operan con sistemas eléctricos actualizados, cumpliendo con todas las normativas y ofreciendo un servicio más seguro y eficiente para los residentes.',
        icon: 'Zap',
    },
    {
        id: 6,
        title: 'Mantenimiento y Gestión de Ascensores en Hoteles',
        shortDescription:
            'Programa de mantenimiento preventivo y correctivo para ascensores en hoteles.',
        fullDescription: `
Implementamos un programa de mantenimiento preventivo y correctivo para ascensores en hoteles, asegurando un servicio de alta calidad para huéspedes y personal.
    `,
        beneficios: [
            'Funcionamiento impecable y silencioso de los ascensores.',
            'Reducción de interrupciones y tiempos de espera.',
            'Conservación de la imagen de excelencia del hotel.',
        ],
        resultado:
            'Los hoteles han reportado una mayor satisfacción de los huéspedes y una mejora en la eficiencia operativa, gracias a nuestros servicios de mantenimiento de calidad.',
        icon: 'Wrench',
    },
];

export default projects;
