'use client';
import Link from 'next/link';
import Header from '../../../../components/Header';

const DEPARTMENTS = {
  ayacucho: { name: 'Ayacucho', repo: 'patitas-pe/adopciones-ayacucho', contact: 'adopciones-ayacucho@gmail.com' },
  lima: { name: 'Lima', repo: 'patitas-pe/adopciones-lima', contact: 'adopciones-lima@gmail.com' },
  cusco: { name: 'Cusco', repo: 'patitas-pe/adopciones-cusco', contact: 'adopciones-cusco@gmail.com' }
};

export default function PonerEnAdopcionPage({ params }) {
  const { department } = params;
  const dept = DEPARTMENTS[department] || DEPARTMENTS.lima;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header selectedDepartment={{ slug: department, ...dept }} onRefresh={() => {}} />

      <main className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          🐾 Poner en adopción en {dept.name}
        </h1>

        <p className="text-gray-700 mb-6">
          Para ayudar a mantener un registro transparente y ordenado de los perritos en adopción, 
          tenemos dos formas principales para que publiques un caso:
        </p>

        {/* Opción 1 */}
        <div className="mb-8 p-6 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-3">📌 Opción 1: Directo en GitHub</h2>
          <p className="text-gray-600 mb-4">
            Si tienes cuenta en GitHub, puedes abrir un nuevo ticket con los datos del perrito.
          </p>
          <Link
            href={`https://github.com/${dept.repo}/issues/new`}
            target="_blank"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            ➕ Abrir ticket en GitHub
          </Link>
        </div>

        {/* Opción 2 */}
        <div className="mb-8 p-6 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-3">📩 Opción 2: Contactar a la organización</h2>
          <p className="text-gray-600 mb-4">
            Si no tienes cuenta en GitHub, puedes comunicarte directamente con la organización local:
          </p>
          <a
            href={`mailto:${dept.contact}`}
            className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            📧 Escribir a {dept.contact}
          </a>
        </div>

        {/* Opción 3 */}
        <div className="p-6 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-3">👥 Opción 3: Unirte al equipo</h2>
          <p className="text-gray-600 mb-4">
            Si eres voluntario recurrente y quieres ayudar a registrar perritos en {dept.name}, 
            puedes solicitar unirte al equipo del repositorio.
          </p>
          <Link
            href={`https://github.com/${dept.repo}`}
            target="_blank"
            className="inline-block bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
          >
            🔗 Ver organización
          </Link>
        </div>
      </main>
    </div>
  );
}