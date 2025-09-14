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
            <div>
              <h1 className="text-2xl font-extrabold text-white tracking-wide drop-shadow">
                SalvemosPatitas.org
              </h1>
              <p className="text-xs text-white/90 -mt-1">
                La red de rescatistas/organizacion de animales en Perú
              </p>
            </div>
          </Link>

          {/* Selector de departamento */}
          <DepartmentSelector 
            selectedDepartment={selectedDepartment}
            onDepartmentChange={onDepartmentChange}
          />
        </div>

        {/* Barra de búsqueda + Navegación */}
        <nav className="flex items-center gap-3 sm:gap-4">


          {/* Links de navegación */}
          <Link 
            href="/organizaciones" 
            className="text-white/90 hover:text-yellow-200 font-semibold transition-colors"
          >
            🏥 Organizaciones
          </Link>

          <Link 
            href="/contacto" 
            className="text-white/90 hover:text-yellow-200 font-semibold transition-colors"
          >
            📩 Contáctanos
          </Link>
 
        </nav>
      </div>
    </header>
  );
}