'use client';
import React from 'react';
export default function Footer({ }) {

  return (
      <footer className="bg-gray-800 text-white py-12 mt-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-green-400">SalvemosPatitas.org</span>
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Juntos construimos una red más fuerte para proteger y salvar a nuestros amigos de cuatro patas.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8 text-sm">
            <div>
              <h4 className="font-semibold mb-3 text-green-400">Adopciones</h4>
              <p className="text-gray-400">Encuentra tu compañero perfecto</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-green-400">Red de Rescate</h4>
              <p className="text-gray-400">Únete a nuestra comunidad</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-green-400">Apoyo</h4>
              <p className="text-gray-400">Ayuda con donaciones y voluntariado</p>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} SalvemosPatitas.org · Hecho con ❤️ en Perú
            </p>
          </div>
        </div>
      </footer>
  );
}