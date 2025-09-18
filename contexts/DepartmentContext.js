'use client';
import { createContext, useContext, useState, useEffect } from 'react';

const DepartmentContext = createContext();

export const repoMap = {
  ayacucho: 'patitas-pe/adopciones-ayacucho',
  lima: 'patitas-pe/adopciones-lima',
  cusco: 'patitas-pe/adopciones-cusco'
};

export const departments = [
  { slug: 'ayacucho', name: 'Ayacucho' },
  { slug: 'lima', name: 'Lima' },
  { slug: 'cusco', name: 'Cusco' }
];

export function DepartmentProvider({ children }) {
  const [selectedDepartment, setSelectedDepartment] = useState(null);

  // Cargar desde localStorage al montar
  useEffect(() => {
    const saved = localStorage.getItem('selectedDepartment');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        const validDept = departments.find(d => d.slug === parsed.slug);
        if (validDept) setSelectedDepartment(validDept);
      } catch (error) {
        console.error('Error loading saved department:', error);
      }
    }
  }, []);

  const selectDepartment = (dept) => {
    setSelectedDepartment(dept);
    localStorage.setItem('selectedDepartment', JSON.stringify(dept));
  };

  const getDepartmentRepo = (department) => repoMap[department];
  const getDepartmentName = (slug) => departments.find(d => d.slug === slug)?.name || slug;
  const isValidDepartment = (department) => !!repoMap[department];

  return (
    <DepartmentContext.Provider value={{
      repoMap,
      departments,
      selectedDepartment,
      selectDepartment,
      getDepartmentRepo,
      getDepartmentName,
      isValidDepartment
    }}>
      {children}
    </DepartmentContext.Provider>
  );
}

export function useDepartment() {
  const context = useContext(DepartmentContext);
  if (!context) {
    throw new Error('useDepartment debe usarse dentro de DepartmentProvider');
  }
  return context;
}