'use client';
import { useState, useEffect, useRef } from 'react';

export default function PhotoGrid({ body }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const modalRef = useRef(null);

  if (!body) return null;

  // Extraer URLs de imágenes del markdown
  const photoUrls = body.match(/!\[.*?\]\((.*?)\)/g) || [];
  
  if (photoUrls.length === 0) return null;

  const imageUrls = photoUrls.map(img => {
    const match = img.match(/\((.*?)\)/);
    return match ? match[1] : null;
  }).filter(Boolean);

  const openCarousel = (index) => {
    console.log("Abriendo carrusel en index:", index);
    setSelectedImageIndex(index);
  };

  const closeCarousel = () => {
    setSelectedImageIndex(null);
  };

  const nextImage = () => {
    setSelectedImageIndex((prev) =>
      prev === imageUrls.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) =>
      prev === 0 ? imageUrls.length - 1 : prev - 1
    );
  };

  // Capturar teclas cuando está abierto
  useEffect(() => {
    if (selectedImageIndex !== null && modalRef.current) {
      modalRef.current.focus();
    }
  }, [selectedImageIndex]);

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') closeCarousel();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  };

  return (
    <>
      <div className="my-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          📸 Fotos
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {imageUrls.map((url, index) => (
            <div key={index} className="relative group">
              <img
                src={url}
                alt={`Foto ${index + 1}`}
                className="w-full h-72 object-cover rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => openCarousel(index)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal Carrusel */}
      {selectedImageIndex !== null && (
        <div
          ref={modalRef}
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center outline-none"
          tabIndex={0}
          onKeyDown={handleKeyDown}
        >
          {/* Botón cerrar - MÁS GRANDE */}
          <button
            onClick={closeCarousel}
            className="absolute top-4 right-4 text-white hover:text-red-400 z-10 text-6xl font-bold leading-none transition-colors duration-200"
            style={{ fontSize: '3rem' }}
          >
            ✕
          </button>

          {/* Botón anterior - MÁS GRANDE */}
          <button
            onClick={prevImage}
            className="absolute left-4 text-white hover:text-blue-400 z-10 text-8xl font-bold leading-none transition-colors duration-200"
            style={{ fontSize: '4rem' }}
          >
            ‹
          </button>

          {/* Imagen principal */}
          <div className="max-w-5xl max-h-full mx-4">
            <img
              src={imageUrls[selectedImageIndex]}
              alt={`Foto ${selectedImageIndex + 1}`}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          </div>

          {/* Botón siguiente - MÁS GRANDE */}
          <button
            onClick={nextImage}
            className="absolute right-4 text-white hover:text-blue-400 z-10 text-8xl font-bold leading-none transition-colors duration-200"
            style={{ fontSize: '4rem' }}
          >
            ›
          </button>

          {/* Contador */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white text-xl font-medium bg-black bg-opacity-50 px-4 py-2 rounded-full">
            {selectedImageIndex + 1} / {imageUrls.length}
          </div>
        </div>
      )}
    </>
  );
}