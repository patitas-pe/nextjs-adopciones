'use client';
import Link from 'next/link';

export default function Header({ onRefresh }) {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo y título */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-3xl">🐕</span>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Adopciones Caninas</h1>
            <p className="text-sm text-gray-600">Encuentra a tu nuevo mejor amigo</p>
          </div>
        </Link>

        {/* Menú de navegación */}
        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Inicio
          </Link>
          <Link href="/adopcion" className="hover:text-blue-600 transition-colors">
            Adopciones
          </Link>
          <Link href="/about" className="hover:text-blue-600 transition-colors">
            Nosotros
          </Link>
        </nav>

        {/* Botón de refrescar */}
        <button
          onClick={onRefresh}
          className="ml-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          🔄 Actualizar
        </button>
      </div>
    </header>
  );
}