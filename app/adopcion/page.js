'use client';
import { useAdoptions } from '../../hooks/useAdoptions';
import DogCard from '../../components/DogCard';
import LoadingSpinner from '../../components/LoadingSpinner';
import ErrorMessage from '../../components/ErrorMessage';

export default function AdopcionPage() {
  const { dogs, loading, error, refetch } = useAdoptions();

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage error={error} onRetry={refetch} />;

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">🐶 Perritos en adopción</h1>
      {dogs.length === 0 ? (
        <p className="text-gray-500">No se encontraron adopciones.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dogs.map((dog) => (
            <DogCard key={dog.id} dog={dog} />
          ))}
        </div>
      )}
    </div>
  );
}