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
          ¡Bienvenido a <span className="text-green-600">SalvemosPatitas.org</span>!
        </h1>
        <p className="text-lg sm:text-xl font-medium text-gray-700 mb-6 max-w-3xl mx-auto leading-relaxed">
          La red de rescate animal en Perú que une esfuerzos para más patitas a salvo 🐾
        </p>
        <p className="text-base sm:text-lg text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
Conectamos organizaciones de rescate, refugios y rescatistas independientes para multiplicar nuestro impacto y salvar más vidas. Creamos un perfil para cada peludito adoptado y lo compartimos con su nueva familia.        </p>

        {/* Carrusel */}
        <div className="mb-12 max-w-4xl mx-auto shadow-lg rounded-xl overflow-hidden">
          <Carousel images={images} interval={4000} />
        </div>

        {/* CTA principal */}
        <Link
          href="/organizaciones"
          className="inline-block bg-green-600 text-white px-8 py-4 rounded-xl text-xl sm:text-2xl font-bold hover:bg-green-700 hover:scale-105 transition-all shadow-md"
        >
          Explorar Organizaciones →
        </Link>

        {/* Sección descriptiva */}
{/* Sección descriptiva */}
        <div className="mt-20 text-gray-700 text-lg max-w-4xl mx-auto leading-relaxed">
          <p className="mb-5">
            Somos <span className="font-semibold text-green-700">la plataforma central que conecta</span> 
            a todas las organizaciones de rescate animal en Perú 🇵🇪.
          </p>
          <p className="mb-5">
            Centralizamos información, recursos y esfuerzos de refugios, rescatistas independientes 
            y voluntarios en todos los departamentos del país.
          </p>
          <p className="mb-5">
            Además, <span className="font-semibold text-green-700">permitimos registrar a cada perrito adoptado</span> 
            y dar seguimiento a su proceso: desde fotografías de su evolución, hasta comentarios de las familias adoptantes.
          </p>
          <p>
            Esto brinda transparencia, visibilidad del esfuerzo de cada organización y, sobre todo, 
            asegura un seguimiento detallado de cada mascota 🐾✨.
          </p>
        </div>
      </main>

      {/* Footer sencillo */}
      <footer className="bg-gray-100 py-6 text-gray-500 text-sm text-center mt-12">
        © {new Date().getFullYear()} SalvemosPatitas.org · Hecho con ❤️ en Perú
      </footer>
    </div>
  );
}
