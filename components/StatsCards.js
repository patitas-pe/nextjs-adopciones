'use client';

export default function StatsCards({ dogs }) {
  const adoptedCount = dogs.filter(dog => {
    const labelNames = (dog.labels || []).map(l => (l.name || '').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
    return labelNames.includes("adoptado");
  }).length;

  const availableCount = dogs.filter(dog => {
    const labelNames = (dog.labels || []).map(l => (l.name || '').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
    return labelNames.includes("en adopcion");
  }).length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold text-gray-700">Total</h3>
        <p className="text-3xl font-bold text-blue-600">{dogs.length}</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold text-gray-700">Adoptados</h3>
        <p className="text-3xl font-bold text-green-600">{adoptedCount}</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold text-gray-700">Disponibles</h3>
        <p className="text-3xl font-bold text-yellow-600">{availableCount}</p>
      </div>
    </div>
  );
}