'use client';
import React from 'react';
import { useAdoptions } from '../hooks/useAdoptions';
import Header from '../components/Header';
import StatsCards from '../components/StatsCards';
import DogCard from '../components/DogCard';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';

export default function Home() {
  const { dogs, loading, error, refetch } = useAdoptions();

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage error={error} onRetry={refetch} />;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onRefresh={refetch} />
      <main className="max-w-7xl mx-auto px-4 py-6">
        <StatsCards dogs={dogs} />
        {dogs.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No se encontraron adopciones.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dogs.map((dog) => (
              <DogCard key={dog.id} dog={dog} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}