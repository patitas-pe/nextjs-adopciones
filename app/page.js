'use client';
import Link from 'next/link';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import FeaturesSection from '../components/FeaturesSection';
import { useRouter } from 'next/navigation';
import { useDepartment } from './../contexts/DepartmentContext';

export default function HomePage() {
  const router = useRouter();
  const { selectedDepartment } = useDepartment();

  // Función CTA para ver adopciones
  const handleViewAdoptions = () => {
    if (!selectedDepartment) {
      alert('Por favor selecciona un departamento primero desde el menú superior 🐾');
      return;
    }
    router.push(`/adopciones/${selectedDepartment.slug}`);
  };

  const images = [
    "/slider/perrito1.jpeg",
    "/slider/perrito2.jpeg"
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header con selector global */}
      <Header onRefresh={() => {}} />

      <main className="flex-1 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 text-center">
        {/* Intro */}
        <p className="text-lg sm:text-xl font-medium text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
          Conectamos a <span className="text-green-600 font-semibold">organizaciones de rescate</span>, <span className="text-green-600 font-semibold">refugios</span>, <span className="text-green-600 font-semibold">rescatistas independientes</span> e <span className="text-green-600 font-semibold">instituciones</span> formando una <span className="text-green-600 font-bold">red de rescate animal en Perú</span> que une fuerzas para <span className="text-green-600 font-bold">multiplicar nuestro impacto</span> y poner <span className="text-green-600 font-bold">más patitas a salvo</span>. 🐾
        </p>
        
        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          {/* Botón adopciones estático */}
          <button
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg"
            onClick={handleViewAdoptions}
          >
            Adopta un peludito cerca a ti
          </button>

          {/* Botón postear peludito */}
          <Link 
            href="/publicar"
            className="bg-white hover:bg-gray-50 text-green-600 font-semibold py-3 px-8 rounded-lg border-2 border-green-600 transition-colors duration-200 shadow-lg"
          >
            Poner en adopción a un peludito
          </Link>
        </div>

        {/* Carrusel */}
        <div className="mb-12 max-w-4xl mx-auto shadow-lg rounded-xl overflow-hidden">
          <Carousel images={images} interval={4000} />
        </div>

        {/* Features Section */}
        <FeaturesSection />
      </main>
    
      {/* Footer */}
      <Footer />
    </div>
  );
}