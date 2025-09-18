'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import DepartmentSelector from './DepartmentSelector';
import { 
  BuildingStorefrontIcon, 
  EnvelopeIcon, 
  Bars3Icon, 
  XMarkIcon,
} from '@heroicons/react/24/outline';

export default function Header({ onRefresh, selectedDepartment, onDepartmentChange }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-teal-500 via-sky-500 to-blue-600 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo + Título */}
        <Link href="/" className="flex items-center space-x-3">
          <div className="relative w-12 h-12 flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="Salvemos Patitas Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold text-white tracking-wide drop-shadow">
              Salvemos Patitas
            </h1>
            <p className="text-xs text-white/90 -mt-1">
              Red de rescatistas en Perú
            </p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-4">
          {/* Botón directo a organizaciones */}
          <Link 
            href="/organizaciones" 
            className="flex items-center gap-1 text-white/90 hover:text-yellow-200 font-semibold transition-colors"
          >
            <BuildingStorefrontIcon className="w-5 h-5" />
            <span>Organizaciones</span>
          </Link>

          <Link 
            href="/contacto" 
            className="flex items-center gap-1 text-white/90 hover:text-yellow-200 font-semibold transition-colors"
          >
            <EnvelopeIcon className="w-5 h-5" />
            <span>Contáctanos</span>
          </Link>

          <div className="ml-4">
            <DepartmentSelector 
              selectedDepartment={selectedDepartment}
              onDepartmentChange={onDepartmentChange}
            />
          </div>
        </nav>

        {/* Mobile menu button */}
        <button 
          onClick={() => setMobileOpen(!mobileOpen)} 
          className="md:hidden text-white hover:text-yellow-200 transition"
        >
          {mobileOpen ? <XMarkIcon className="h-7 w-7" /> : <Bars3Icon className="h-7 w-7" />}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 pt-4 pb-6 flex flex-col gap-4">
          <Link 
            href="/organizaciones" 
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-2 text-gray-700 hover:text-sky-600 font-medium transition-colors"
          >
            <BuildingStorefrontIcon className="w-5 h-5" />
            Organizaciones
          </Link>
          <Link 
            href="/contacto" 
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-2 text-gray-700 hover:text-sky-600 font-medium transition-colors"
          >
            <EnvelopeIcon className="w-5 h-5" />
            Contáctanos
          </Link>
          <div className="pt-2 border-t border-gray-200">
            <DepartmentSelector 
              selectedDepartment={selectedDepartment}
              onDepartmentChange={onDepartmentChange}
            />
          </div>
        </div>
      )}
    </header>
  );
}