'use client';
import Link from 'next/link';
import Header from '../components/Header';
import Carousel from '../components/Carousel';

export default function HomePage() {
  const images = [
    "https://placekitten.com/800/400",
    "https://placedog.net/800/400?id=10",
    "https://placebear.com/800/400",
    "https://placehold.co/800x400/87CEEB/ffffff?text=Adopta+un+amigo",
    "https://placehold.co/800x400/FFD700/000000?text=Familia+y+Amor"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onRefresh={() => {}} />

      <main className="max-w-7xl mx-auto px-4 py-12 text-center">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
          ¡Bienvenido a Adopciones Caninas!
        </h1>
        <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
          Dale una oportunidad a un nuevo amigo 🐶. Explora nuestra lista de perritos esperando un hogar lleno de amor.
        </p>

        {/* Carrusel */}
        <div className="mb-10">
          <Carousel images={images} interval={4000} />
        </div>

        <Link
          href="/adopcion"
          className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg text-2xl font-bold hover:bg-green-700 transition-colors shadow-lg"
        >
          Ver Perritos en Adopción →
        </Link>

        <div className="mt-16 text-gray-600 text-lg max-w-4xl mx-auto">
          <p className="mb-4">
            Nuestra misión es conectar a perritos sin hogar con familias amorosas.
            Cada adopción es una historia de esperanza y un nuevo comienzo 🏡.
          </p>
          <p>
            Trabajamos con refugios y voluntarios para asegurar que cada perrito
            reciba el cuidado y la atención que necesita antes de encontrar su hogar definitivo.
          </p>
        </div>
      </main>

      <footer className="bg-white border-t py-6 mt-12">
        <p className="text-center text-gray-500 text-sm">
          💙 Hecho con amor para nuestros perritos adoptados
        </p>
      </footer>
    </div>
  );
}