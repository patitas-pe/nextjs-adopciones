'use client';
import React, { useState, useEffect } from 'react';

export default function Carousel({ images, interval = 4000 }) {
  const [current, setCurrent] = useState(0);

  // Cambiar imagen automáticamente
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-xl shadow-lg">
      {/* Imagen activa */}
      <img
        src={images[current]}
        alt={`Slide ${current}`}
        className="w-full h-80 object-cover transition-all duration-700 ease-in-out"
      />

      {/* Botones de navegación */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
      >
        ❯
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${index === current ? 'bg-white' : 'bg-gray-400/70'}`}
          ></button>
        ))}
      </div>
    </div>
  );
}