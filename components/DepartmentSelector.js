'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MapPinIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import { useDepartment } from './../contexts/DepartmentContext';

export default function DepartmentSelector() {
  const router = useRouter();
  const { departments, selectedDepartment, selectDepartment } = useDepartment();
  const [open, setOpen] = useState(false);

  const handleSelect = (dept) => {
    setOpen(false);
    if (dept && dept.slug !== selectedDepartment?.slug) {
      selectDepartment(dept); // Actualiza el contexto global
      router.push(`/adopciones/${dept.slug}`); // Y redirije a adopciones
    }
  };

  return (
    <div className="relative inline-block text-left">
      {/* Botón principal */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-3 py-2 rounded-lg text-sm font-semibold shadow transition"
      >
        <MapPinIcon className="h-5 w-5 text-yellow-300" />
        {selectedDepartment?.name || "Selecciona ubicación"}
        <ChevronDownIcon
          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-44 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
          <ul className="py-1">
            {departments.map((dept) => (
              <li key={dept.slug}>
                <button
                  onClick={() => handleSelect(dept)}
                  className={`flex items-center gap-2 px-3 py-2 text-sm w-full transition-colors ${
                    selectedDepartment?.slug === dept.slug
                      ? 'bg-sky-100 text-sky-700 font-medium'
                      : 'text-gray-700 hover:bg-sky-50 hover:text-sky-700'
                  }`}
                >
                  <MapPinIcon className="h-4 w-4 text-sky-500" />
                  {dept.name}
                  {selectedDepartment?.slug === dept.slug && (
                    <span className="ml-auto text-sky-600">✓</span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}