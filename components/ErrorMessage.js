'use client';

export default function ErrorMessage({ error, onRetry }) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-red-600 mb-4">Error al cargar datos</h2>
        <p className="text-gray-600 mb-4">{error}</p>
        <p className="text-sm text-gray-500">
          Verifica que los datos existen
        </p>
        <button 
          onClick={onRetry} 
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Reintentar
        </button>
      </div>
    </div>
  );
}