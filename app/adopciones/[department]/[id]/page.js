'use client';
import { useEffect, useState } from 'react';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Header from '../../../../components/Header';
import LoadingSpinner from '../../../../components/LoadingSpinner';
import PhotoGrid from '../../../../components/PhotoGrid';

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

  // Limpiar fotos del markdown
  const cleanMarkdownFromImages = (text) => {
    if (!text) return '';
    return text.replace(/### 📸 Fotos[\s\S]*?(?=###|$)/g, '').trim();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onRefresh={() => {}} selectedDepartment={{ slug: department, name: department }} />

      <main className="max-w-4xl mx-auto px-4 py-8">
        {loading && <LoadingSpinner />}
        {error && <p className="text-red-500 text-center">{error}</p>}
        
        {dog && (
          <article className="bg-white rounded-xl shadow-lg p-6">
            <h1 className="text-3xl font-bold mb-4 text-gray-800">{dog.title}</h1>

            {/* Autor y fecha */}
            {dog.user && (
              <div className="flex items-center gap-3 mb-6 text-sm text-gray-600">
                <img
                  src={dog.user.avatar_url}
                  alt={dog.user.login}
                  className="w-8 h-8 rounded-full"
                />
                <div>
                  <a
                    href={dog.user.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-gray-800 hover:underline"
                  >
                    {dog.user.login}
                  </a>
                  <span className="ml-2 text-gray-500">
                    publicó el {new Date(dog.created_at).toLocaleDateString('es-PE', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>
              </div>
            )}

            {/* Labels */}
            {dog.labels && dog.labels.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {dog.labels.map((label) => (
                  <span
                    key={label.id}
                    className="px-3 py-1 text-sm rounded-full font-medium"
                    style={{ 
                      backgroundColor: `#${label.color}20`, 
                      color: `#${label.color}`,
                      border: `1px solid #${label.color}40`
                    }}
                  >
                    {label.name}
                  </span>
                ))}
              </div>
            )}

            {/* Contenido sin imágenes */}
            <div className="prose prose-lg max-w-none text-gray-800 mb-6">
              <ReactMarkdown 
                remarkPlugins={[remarkGfm]}
                components={{
                  h3: ({ children }) => (
                    <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800 flex items-center">
                      {children}
                    </h3>
                  ),
                  p: ({ children }) => (
                    <p className="mb-4 text-gray-700 leading-relaxed">
                      {children}
                    </p>
                  ),
                  strong: ({ children }) => (
                    <strong className="font-semibold text-gray-800">
                      {children}
                    </strong>
                  )
                }}
              >
                {cleanMarkdownFromImages(dog.body) || 'Sin descripción'}
              </ReactMarkdown>
            </div>

            {/* Grid de fotos */}
            <PhotoGrid body={dog.body} />

            {/* Link a GitHub */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <a
                href={dog.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
              >
                🔗 Ver post original en GitHub
              </a>
            </div>
          </article>
        )}
      </main>
    </div>
  );
}