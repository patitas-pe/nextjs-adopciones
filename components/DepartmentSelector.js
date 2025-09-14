'use client';
import { useRouter } from 'next/navigation';

const DEPARTMENTS = [
  { name: 'Ayacucho', slug: 'ayacucho', repo: 'patitas-pe/adopciones-ayacucho' },
  { name: 'Lima', slug: 'lima', repo: 'patitas-pe/adopciones-lima' },
  { name: 'Cusco', slug: 'cusco', repo: 'patitas-pe/adopciones-cusco' },
];

export default function DepartmentSelector({ selectedDepartment }) {
  const router = useRouter();

  return (
    <select
      value={selectedDepartment?.slug || ''}
      onChange={(e) => {
        const slug = e.target.value;
        // ✅ Prevenimos bucles: solo navegamos si cambió realmente
        if (slug && slug !== selectedDepartment?.slug) {
          router.push(`/adopcion/${slug}`);
        }
      }}
      className="bg-gray-100 border border-gray-300 rounded-lg px-3 py-2 text-sm"
    >
      {DEPARTMENTS.map((dept) => (
        <option key={dept.slug} value={dept.slug}>
          📍 {dept.name}
        </option>
      ))}
    </select>
  );
}