'use client';
import { useAdoptions } from '../../../hooks/useAdoptions';
import DogCard from '../../../components/DogCard';
import LoadingSpinner from '../../../components/LoadingSpinner';
import ErrorMessage from '../../../components/ErrorMessage';
import Header from '../../../components/Header';
import Link from 'next/link';

const DEPARTMENTS = {
    ayacucho: { name: 'Ayacucho', repo: 'patitas-pe/adopciones-ayacucho' },
    lima: { name: 'Lima', repo: 'patitas-pe/adopciones-lima' },
    cusco: { name: 'Cusco', repo: 'patitas-pe/adopciones-cusco' }
};

export default function AdopcionDepartmentPage({ params }) {
    const { department } = params;
    const dept = DEPARTMENTS[department] || DEPARTMENTS.ayacucho; // por default Ayacucho

    const { dogs, loading, error, refetch } = useAdoptions(dept.repo);

    return (
        <div className="min-h-screen bg-gray-50">
            <Header
                onRefresh={refetch}
                selectedDepartment={{ slug: department, ...dept }}
            />

            <main className="max-w-7xl mx-auto px-4 py-6">
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">
                        🐶 Perritos en {dept.name}
                    </h1>

                    {/* Botón de poner en adopción */}
                    <Link
                        href={`/adopciones/${department}/poner-en-adopcion`}
                        className="inline-flex items-center px-5 py-2.5 rounded-lg bg-green-600 text-white text-sm font-medium shadow hover:bg-green-700 transition-colors"
                    >
                        ➕ Poner en adopción
                    </Link>
                </div>

                {loading ? (
                    <LoadingSpinner />
                ) : error ? (
                    <ErrorMessage error={error} onRetry={refetch} />
                ) : dogs.length === 0 ? (
                    <p className="text-gray-500 text-lg text-center py-12">
                        No se encontraron adopciones en {dept.name}.
                    </p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {dogs.map((dog) => (
                            <DogCard key={dog.id} dog={dog} department={params.department} />
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
}