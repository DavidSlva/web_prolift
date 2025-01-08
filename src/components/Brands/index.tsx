import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import brands from "../../data/brands.ts";

const Brands = () => {
    const settings = {
        dots: true, // Puedes habilitar los puntos de navegación si lo deseas
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000, // Cambia cada 3 segundos
        arrows: false, // Ocultar flechas de navegación
        responsive: [
            {
                breakpoint: 1280, // Pantallas grandes
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 1024, // Tablets
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 640, // Móviles
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };

    return (
        <section id="brands" className="py-24 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                    Amplia Experiencia Multimarca
                </h2>
                <Slider {...settings}>
                    {brands.map((brand, index) => (
                        <div key={index} className="flex justify-center items-center px-4">
                            <img
                                src={brand.image}
                                alt={brand.name}
                                className="h-20 object-contain grayscale hover:grayscale-0 transition duration-300"
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Brands;
