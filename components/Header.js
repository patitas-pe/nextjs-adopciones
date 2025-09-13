'use client';

export default function Header({ onRefresh }) {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">🐕 Adopciones Caninas</h1>
            <p className="text-gray-600 mt-1">Seguimiento de nuestros perritos adoptados</p>
          </div>
          <button 
            onClick={onRefresh} 
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            🔄 Actualizar
          </button>
        </div>
      </div>
    </header>
  );
}