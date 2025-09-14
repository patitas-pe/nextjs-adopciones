'use client';
import { useEffect, useState } from 'react';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Header from '../../../../components/Header';
import LoadingSpinner from '../../../../components/LoadingSpinner';

export default function DogDetailPage({ params }) {
  const { department, id } = params;
  const [dog, setDog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const repoMap = {
    ayacucho: 'patitas-pe/adopciones-ayacucho',
    lima: 'patitas-pe/adopciones-lima',
    cusco: 'patitas-pe/adopciones-cusco'
  };

  const repo = repoMap[department];

  useEffect(() => {
    if (!repo) return;

    const fetchDog = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://api.github.com/repos/${repo}/issues/${id}`);
        if (!res.ok) throw new Error('No se pudo cargar el post');
        const issue = await res.json();
        setDog(issue);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDog();
  }, [repo, id]);

  if (!repo) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onRefresh={() => {}} selectedDepartment={{ slug: department, name: department }} />

      <main className="max-w-4xl mx-auto px-4 py-8">
        {loading && <LoadingSpinner />}
        {error && <p className="text-red-500">{error}</p>}
        
{dog && (
  <article className="bg-white rounded-xl shadow p-6">
    <h1 className="text-3xl font-bold mb-4">{dog.title}</h1>

    {/* Labels */}
    {dog.labels && dog.labels.length > 0 && (
      <div className="flex flex-wrap gap-2 mb-4">
        {dog.labels.map((label) => (
          <span
            key={label.id}
            className="px-2 py-1 text-sm rounded-full"
            style={{ backgroundColor: `#${label.color}20`, color: `#${label.color}` }}
          >
            {label.name}
          </span>
        ))}
      </div>
    )}

    <div className="prose prose-lg text-gray-800">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {dog.body || 'Sin descripción'}
      </ReactMarkdown>
    </div>

    <div className="mt-6">
      <a
        href={dog.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        🔗 Ver en GitHub
      </a>
    </div>
  </article>
)}
      </main>
    </div>
  );
}