'use client';
import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/image';
import { GlobeAltIcon } from '@heroicons/react/24/outline';

export default function TeamsPage() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedDepartment, setSelectedDepartment] = useState(null);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const res = await fetch('https://api.github.com/orgs/salvemospatitas/teams', {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`, 
            Accept: 'application/vnd.github+json',
          },
        });

        if (!res.ok) throw new Error('No se pudieron cargar los equipos');
        const data = await res.json();
        setTeams(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTeams();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header global */}
      <Header
        onRefresh={() => window.location.reload()}
        selectedDepartment={selectedDepartment}
        onDepartmentChange={setSelectedDepartment}
      />

      <main className="flex-1 max-w-5xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold text-sky-700 mb-6 text-center">
          Red de Organizaciones y Equipos de Rescate en el Perú
        </h1>

        {loading && <p className="text-center py-10">Cargando equipos...</p>}
        {error && <p className="text-center text-red-600 py-10">Error: {error}</p>}

        {!loading && !error && (
          <>
            {teams.length === 0 ? (
              <p className="text-center text-gray-500">No se encontraron equipos.</p>
            ) : (
              <ul className="space-y-4">
                {teams.map((team) => {
                  let description = team.description || "Sin descripción";
                  let link = null;

                  // separar por "|"
                  if (description.includes("|")) {
                    const parts = description.split("|").map(p => p.trim());
                    description = parts[0] || description;
                    if (parts[1] && parts[1].startsWith("http")) {
                      link = parts[1];
                    }
                  }

                  // foto del team o fallback
                  const teamAvatar = team.avatar_url || team.organization?.avatar_url || "/images/default-team.png";

                  return (
                    <li
                      key={team.id}
                      className="p-4 border rounded-lg shadow hover:shadow-md transition"
                    >
                      <div className="flex items-center gap-3">
                        {/* Avatar del team */}
                        <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                          <Image
                            src={teamAvatar}
                            alt={`Logo de ${team.name}`}
                            fill
                            className="object-cover"
                          />
                        </div>

                        {/* Nombre + link */}
                        <div className="flex items-center gap-2">
                          <h2 className="text-xl font-semibold text-gray-800">
                            {team.name}
                          </h2>
                          {link && (
                            <a
                              href={link}
                              target="_blank"
                              rel="noopener noreferrer"
                              title="Visitar sitio web"
                              className="text-sky-600 hover:text-sky-800"
                            >
                              <GlobeAltIcon className="h-5 w-5" />
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Descripción siempre */}
                      <p className="text-sm text-gray-600 mt-2">
                        {description}
                      </p>

                    </li>
                  );
                })}
              </ul>
            )}
          </>
        )}
      </main>

      {/* Footer global */}
      <Footer />
    </div>
  );
}