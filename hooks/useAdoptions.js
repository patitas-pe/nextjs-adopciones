'use client';
import { useState, useEffect, useCallback } from 'react';

export function useAdoptions(selectedRepo = null) {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Construir la URL dinámicamente según el repo actual
  const getGitHubAPI = (repo) => {
    const GITHUB_REPO =
      repo ||  'patitas-pe/adopciones-ayacucho'; // default Ayacucho
    return `https://api.github.com/repos/${GITHUB_REPO}/issues?state=all&per_page=100`;
  };

  // ✅ usamos useCallback para evitar recrear la función y disparar useEffect
  const fetchDogs = useCallback(async () => {
    try {
      setLoading(true);
      const GITHUB_API = getGitHubAPI(selectedRepo);
      console.log('🔗 Fetching dogs from:', GITHUB_API);

      const res = await fetch(GITHUB_API);
      if (!res.ok) {
        throw new Error(
          `Error ${res.status}: ${res.statusText} - Repo: ${selectedRepo || 'ayacucho (default)'}`
        );
      }

      const issues = await res.json();
      console.log('📦 Issues received:', issues.length);

      const adoptionIssues = issues.filter((issue) => {
        if (issue.pull_request) return false;

        const labelNames = (issue.labels || [])
          .map((l) =>
            (l.name || '')
              .toLowerCase()
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')
          );

        return labelNames.includes('en adopcion') || labelNames.includes('adoptado');
      });

      setDogs(adoptionIssues);
      setError(null);
    } catch (err) {
      console.error('❌ Error fetching dogs:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [selectedRepo]); // ✅ solo recrea cuando hay cambio real de repositorio

  // efecto estable
  useEffect(() => {
    fetchDogs();
  }, [fetchDogs]);

  return { dogs, loading, error, refetch: fetchDogs };
}