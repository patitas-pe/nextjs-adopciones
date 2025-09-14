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

  const stats = [
    {
      title: "Total",
      value: dogs.length,
      icon: "🐕",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      title: "Adoptados",
      value: adoptedCount,
      icon: "✅",
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      title: "Disponibles",
      value: availableCount,
      icon: "🏠",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div 
          key={index}
          className={`${stat.bgColor} ${stat.borderColor} border-2 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200`}
        >
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600 uppercase tracking-wide">
              {stat.title}
            </h3>
            <span className="text-2xl">{stat.icon}</span>
          </div>
          <p className={`text-4xl font-bold ${stat.color} mb-1`}>
            {stat.value}
          </p>
          <div className="text-xs text-gray-500">
            {stat.title === "Total" && "perritos registrados"}
            {stat.title === "Adoptados" && "con familia feliz"}
            {stat.title === "Disponibles" && "esperando hogar"}
          </div>
        </div>
      ))}
    </div>
  );
}