import React, { useState, useEffect } from "react";

const ImageSlider = ({ images }) => {
    console.log(images);
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };
    useEffect(() => {
        const sliderInterval = setInterval(nextSlide, 5000);

        return () => clearInterval(sliderInterval);
    }, [nextSlide]);
    return (
        <div className="relative">
            <button
                    className="absolute top-1/2 left-2 transform -translate-y-1/2 hover:-translate-y-1 hover:scale-105"
                onClick={prevSlide}
            >
                <i className="fa-solid fa-chevron-left text-5xl text absolute top-1/2 left-2 transform -translate-y-1/2"></i>
                <i className="fa-solid fa-chevron-left text-5xl text-white absolute top-1/2 left-4 transform -translate-y-1/2"></i>
            </button>
            <img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex}`}
                className="bg-cover h-[550px] w-full border rounded-lg shadow-lg"
            />
            <button
                className="absolute top-1/2 right-2 transform -translate-y-1/2 hover:-translate-y-1 hover:scale-105 "
                onClick={nextSlide}
            >
                <i className="fa-solid fa-chevron-right text-5xl text absolute top-1/2 right-2 transform -translate-y-1/2 "></i>
                <i className="fa-solid fa-chevron-right text-5xl text-white absolute top-1/2 right-4 transform -translate-y-1/2 "></i>
            </button>
        </div>
    );
};

export default ImageSlider;
