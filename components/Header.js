'use client';
import Link from 'next/link';
import DepartmentSelector from './DepartmentSelector';

export default function Header({ onRefresh, selectedDepartment, onDepartmentChange }) {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-teal-500 via-sky-500 to-blue-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo + Título + Departamento */}
        <div className="flex items-center gap-5">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-4xl">🐕</span>
            <h1 className="text-2xl font-extrabold text-white tracking-wide drop-shadow">
              Adopciones Caninas
            </h1>
          </Link>

          {/* Selector de departamento */}
          <DepartmentSelector 
            selectedDepartment={selectedDepartment}
            onDepartmentChange={onDepartmentChange}
          />
        </div>

        {/* Navegación */}
        <nav className="flex items-center space-x-6">
          <Link 
            href="/adopcion" 
            className="text-white/90 hover:text-yellow-200 font-semibold transition-colors"
          >
            🐶 Perritos
          </Link>
          <Link 
            href="/contacto" 
            className="text-white/90 hover:text-yellow-200 font-semibold transition-colors"
          >
            📩 Contáctanos
          </Link>
          <Link 
            href="/organizaciones" 
            className="bg-yellow-300 text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition"
          >
            🏥 Registrar Organización
          </Link>
        </nav>
      </div>
    </header>
  );
}