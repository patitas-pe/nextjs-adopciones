'use client';
import { useState } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import FeaturesSection from '../components/FeaturesSection';

export default function HomePage() {
  const [selectedDepartment, setSelectedDepartment] = useState(null);

  const images = [
    "/slider/perrito1.jpeg",
    "/slider/perrito2.jpeg"
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header fijo opcional */}
      <Header
        onRefresh={() => { }}
        selectedDepartment={selectedDepartment}
        onDepartmentChange={setSelectedDepartment}
      />

      <main className="flex-1 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 text-center">
        <p className="text-lg sm:text-xl font-medium text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
          Conectamos a <span className="text-green-600 font-semibold">organizaciones de rescate</span>, <span className="text-green-600 font-semibold">refugios</span>, <span className="text-green-600 font-semibold">rescatistas independientes</span> e <span className="text-green-600 font-semibold">instituciones</span> que puedan apoyar los esfuerzos, formando una <span className="text-green-600 font-bold">red de rescate animal en Perú</span> que une fuerzas para <span className="text-green-600 font-bold">multiplicar nuestro impacto</span> y poner <span className="text-green-600 font-bold">más patitas a salvo</span>. 🐾
        </p>
        {/* Call to Action Buttons */}
        {/* // Dentro de tu HomePage, donde están los botones de CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
         

          {/* Botón para ir a Adopciones (opcional, podrías redirigir al seleccionar) */}
          <button
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg"
            onClick={() => handleViewAdoptions(selectedDepartment)} // Función para redirigir
          >
            Adopta un peludito cerca a ti
          </button>

          {/* El otro botón se mantiene igual */}
          <button className="bg-white hover:bg-gray-50 text-green-600 font-semibold py-3 px-8 rounded-lg border-2 border-green-600 transition-colors duration-200 shadow-lg">
            Únete a la Red de Rescate en tu región
          </button>
        </div>

        {/* Carrusel */}
        <div className="mb-12 max-w-4xl mx-auto shadow-lg rounded-xl overflow-hidden">
          <Carousel images={images} interval={4000} />
        </div>


        {/* Features Section */}
        <FeaturesSection />
      </main>
    
      {/* Footer mejorado */}
      <Footer />
    </div>
  );
}