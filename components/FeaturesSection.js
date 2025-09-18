'use client';
import React from 'react';
export default function FeaturesSection() {

  return (
        <div className="mt-20 bg-white rounded-2xl shadow-xl p-8 sm:p-12 max-w-5xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
            ¿Qué hace especial esta plataforma?
          </h3>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed text-center max-w-4xl mx-auto">
            Esta plataforma busca convertirse en un <span className="text-green-600 font-semibold">punto de encuentro</span> para todos los amantes y defensores de los animales. Aquí podremos <span className="text-green-600 font-semibold">centralizar esfuerzos</span>: <span className="text-green-600 font-semibold">publicar a los peluditos en adopción</span>, <span className="text-green-600 font-semibold">dar seguimiento a ellos y a sus nuevas familias</span>, <span className="text-green-600 font-semibold">difundir y unificar eventos</span>, <span className="text-green-600 font-semibold">reportar noticias y casos de maltrato</span>, <span className="text-green-600 font-semibold">reconocer las grandes labores de rescate</span>, <span className="text-green-600 font-semibold">gestionar apoyos y financiamiento</span>, y mucho más.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <div className="text-3xl mb-3">🏠</div>
              <h4 className="font-semibold text-gray-900 mb-2">Adopciones</h4>
              <p className="text-sm text-gray-600">Conecta peluditos con familias amorosas</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <div className="text-3xl mb-3">🤝</div>
              <h4 className="font-semibold text-gray-900 mb-2">Red Colaborativa</h4>
              <p className="text-sm text-gray-600">Une organizaciones y rescatistas</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <div className="text-3xl mb-3">📊</div>
              <h4 className="font-semibold text-gray-900 mb-2">Seguimiento</h4>
              <p className="text-sm text-gray-600">Monitorea el bienestar animal</p>
            </div>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed text-center">
            Sabemos que cada organización tiene sus propias páginas, pero el objetivo de esta red es <span className="text-green-600 font-semibold">unir en un solo lugar todas las voces y acciones</span>, para <span className="text-green-600 font-semibold">multiplicar nuestro impacto</span> y darle <span className="text-green-600 font-semibold">más oportunidades de vida digna a los animales</span>. 🐾
          </p>
        </div>
  );
}