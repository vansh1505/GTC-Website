import React, { useState, useEffect } from 'react';

const slides = [
    { image: "/core1.jpeg", text: "Galgotias Tech Council" },
    { image: "/core2.jpeg", text: "Explore the World of Innovation" },
    { image: "/core3.jpeg", text: "Join Us to Shape the Future" },
    { image: "/core4.jpeg", text: "Join Us to Shape You" },
];

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="relative h-[92vh] overflow-hidden m-4 border-2 rounded-lg shadow-2xl">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] ease-in-out ${index === currentSlide ? "opacity-100 scale-110" : "opacity-0 scale-100"
                            }`}
                        style={{ backgroundImage: `url(${slide.image})` }}
                    >
                        <div
                            className={`absolute w-full bottom-20 left-1/2 transform -translate-x-1/2 text-center text-white text-7xl font-bold transition-all duration-1000 ${index === currentSlide
                                ? "translate-y-0 opacity-100"
                                : "translate-y-10 opacity-0"
                                }`}
                        >
                            {slide.text}
                        </div>
                    </div>
                ))}

                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full shadow-lg hover:bg-opacity-75 transition duration-300"
                >
                    &lt;
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full shadow-lg hover:bg-opacity-75 transition duration-300"
                >
                    &gt;
                </button>
            </div>
        </>
    );
};

export default Slider;