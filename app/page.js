'use client';
import { useState } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Carousel from '../components/Carousel';

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
        onRefresh={() => {}}
        selectedDepartment={selectedDepartment}
        onDepartmentChange={setSelectedDepartment}
      />

      <main className="flex-1 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 text-center">
        {/* Hero */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-serif text-gray-900 mb-6 leading-tight tracking-tight">
          ¡Bienvenido a <span className="text-green-600">Adopciones Caninas</span>!
        </h1>
        <p className="text-lg sm:text-xl font-medium text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
          Dale una oportunidad a un nuevo amigo 🐶. Explora nuestra lista de perritos esperando un hogar lleno de amor.
        </p>

        {/* Carrusel */}
        <div className="mb-12 max-w-4xl mx-auto shadow-lg rounded-xl overflow-hidden">
          <Carousel images={images} interval={4000} />
        </div>

        {/* CTA principal */}
        <Link
          href="/adopcion"
          className="inline-block bg-green-600 text-white px-8 py-4 rounded-xl text-xl sm:text-2xl font-bold hover:bg-green-700 hover:scale-105 transition-all shadow-md"
        >
          Ver Perritos en Adopción →
        </Link>

        {/* Sección descriptiva */}
        <div className="mt-20 text-gray-700 text-lg max-w-4xl mx-auto leading-relaxed">
          <p className="mb-5">
            Nuestra misión es <span className="font-semibold text-green-700">conectar a perritos sin hogar</span> 
            con familias amorosas en todo el Perú 🇵🇪.
          </p>
          <p>
            Trabajamos con refugios, rescatistas y voluntarios en diferentes departamentos 
            para asegurar que cada perrito encuentre un hogar definitivo 🏡✨.
          </p>
        </div>
      </main>

      {/* Footer sencillo */}
      <footer className="bg-gray-100 py-6 text-gray-500 text-sm text-center mt-12">
        © {new Date().getFullYear()} Adopciones Caninas · Hecho con ❤️ en Perú
      </footer>
    </div>
  );
}