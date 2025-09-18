'use client';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Link from 'next/link';

export default function DogCard({ dog, department }) {
  // Optimización: calcular labelNames una sola vez
  const labelNames = React.useMemo(() => 
    (dog.labels || []).map(l => (l.name || '')
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
    ), [dog.labels]
  );

  const getStatusColor = () => {
    if (labelNames.includes("adoptado")) return 'bg-green-100 text-green-800';
    if (labelNames.includes("en adopcion")) return 'bg-yellow-100 text-yellow-800';
    return 'bg-gray-100 text-gray-800';
  };

  const getStatusText = () => {
    if (labelNames.includes("adoptado")) return 'Adoptado ✅';
    if (labelNames.includes("en adopcion")) return 'Disponible 🐕';
    return 'Sin estado';
  };

  const extractImageFromBody = (body) => {
    if (!body) return null;
    const md = body.match(/!\[.*?\]\((.*?)\)/);
    if (md) return md[1];
    const url = body.match(/(https?:\/\/.*?\.(jpg|jpeg|png|gif|webp))/i);
    return url ? url[1] : null;
  };

  const imageUrl = extractImageFromBody(dog.body);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col hover:scale-[1.02] hover:shadow-xl transition-all duration-300 border border-gray-100">
      {/* Imagen */}
      <div className="h-56 bg-gray-200 relative">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={dog.title} 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextSibling.style.display = 'flex';
            }}
          />
        ) : null}
        <div className={`w-full h-full ${imageUrl ? 'hidden' : 'flex'} items-center justify-center bg-gray-100`}>
          <span className="text-6xl">🐕</span>
        </div>
        <div className="absolute top-3 right-3">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold shadow-sm ${getStatusColor()}`}>
            {getStatusText()}
          </span>
        </div>
      </div>

      {/* Contenido */}
      <div className="p-5 flex-grow flex flex-col">
        <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2">{dog.title}</h3>

        {/* Botón para ver detalle */}
        <Link 
          href={`/adopciones/${department}/${dog.number}`} 
          className="mt-auto text-blue-600 hover:underline font-medium inline-flex items-center"
        >
          Ver más detalles →
        </Link>
      </div>
    </div>
  );
}