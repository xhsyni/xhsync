import React, { useState } from "react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import config from "../config"

export default function Carousel({ images }) {
    const [current, setCurrent] = useState(0);

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="relative w-full max-w-2xl mx-auto overflow-hidden rounded-2xl shadow-lg">
            <img
                src={`${config.imagePath}${images[current]}`}
                className="w-full h-72 object-cover"
            />
            {/* Left arrow */}
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/70"
            >
                <FaChevronCircleLeft size={24} />
            </button>

            {/* Right arrow */}
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/70"
            >
                <FaChevronCircleRight size={24} />
            </button>

            {/* Dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrent(idx)}
                        className={`w-3 h-3 rounded-full ${idx === current ? "bg-white" : "bg-gray-400"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}
