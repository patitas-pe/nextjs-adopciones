// /app/adopcion/page.js
'use client';
import { useAdoptions } from '../../hooks/useAdoptions';
import DogCard from '../../components/DogCard';
import LoadingSpinner from '../../components/LoadingSpinner';
import ErrorMessage from '../../components/ErrorMessage';
import Header from '../../components/Header'; // Importa el Header aquí también

export default function AdopcionPage() {
  const { dogs, loading, error, refetch } = useAdoptions();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onRefresh={refetch} /> {/* Header para la página de adopciones */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">🐶 Perritos en adopción</h1>
        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <ErrorMessage error={error} onRetry={refetch} />
        ) : dogs.length === 0 ? (
          <p className="text-gray-500 text-lg text-center py-12">No se encontraron adopciones.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dogs.map((dog) => (
              <DogCard key={dog.id} dog={dog} />
            ))}
          </div>
        )}
      </main>
      <footer className="bg-white border-t py-6 mt-12">
        <p className="text-center text-gray-500 text-sm">
          💙 Hecho con amor para nuestros perritos adoptados
        </p>
      </footer>
    </div>
  );
}