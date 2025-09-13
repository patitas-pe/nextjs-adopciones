'use client';
import { useState, useEffect } from 'react';

const GITHUB_REPO = process.env.NEXT_PUBLIC_GITHUB_REPO || 'patitas-pe/adopciones';
const GITHUB_API = `https://api.github.com/repos/${GITHUB_REPO}/issues?state=all&per_page=100`;

export function useAdoptions() {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDogs = async () => {
    try {
      setLoading(true);
      console.log("Fetching dogs from:", GITHUB_API);
      
      const res = await fetch(GITHUB_API);
      if (!res.ok) throw new Error(`Error: ${res.status}`);
      
      const issues = await res.json();
      console.log("Issues received:", issues);

      const adoptionIssues = issues.filter((issue) => {
        if (issue.pull_request) return false;

        const labelNames = (issue.labels || [])
          .map(l => (l.name || '').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")); 

        return (
          labelNames.includes("en adopcion") || labelNames.includes("adoptado")
        );
      });

      console.log("Filtered adoption issues:", adoptionIssues);
      setDogs(adoptionIssues);
      setError(null);
    } catch (err) {
      console.error("Error fetching dogs:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("useEffect triggered");
    fetchDogs();
  }, []);

  return { dogs, loading, error, refetch: fetchDogs };
}