'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { MapPinIcon, ChevronDownIcon } from '@heroicons/react/24/solid';

const DEPARTMENTS = [
  { name: 'Ayacucho', slug: 'ayacucho', repo: 'patitas-pe/adopciones-ayacucho' },
  { name: 'Lima', slug: 'lima', repo: 'patitas-pe/adopciones-lima' },
  { name: 'Cusco', slug: 'cusco', repo: 'patitas-pe/adopciones-cusco' },
];

export default function DepartmentSelector({ selectedDepartment }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleSelect = (slug) => {
    setOpen(false);
    if (slug && slug !== selectedDepartment?.slug) {
      router.push(`/adopciones/${slug}`);
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
        {selectedDepartment?.name || "Adopciones en ..."}
        <ChevronDownIcon
          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-44 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
          <ul className="py-1">
            {DEPARTMENTS.map((dept) => (
              <li key={dept.slug}>
                <button
                  onClick={() => handleSelect(dept.slug)}
                  className="flex items-center gap-2 px-3 py-2 text-sm w-full text-gray-700 hover:bg-sky-100 hover:text-sky-700 transition-colors"
                >
                  <MapPinIcon className="h-4 w-4 text-sky-500" />
                  {dept.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}