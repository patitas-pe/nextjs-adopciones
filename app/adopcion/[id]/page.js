'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Link from 'next/link';

const GITHUB_REPO = process.env.NEXT_PUBLIC_GITHUB_REPO || 'patitas-pe/adopciones';

export default function AdopcionDetalle() {
  const { id } = useParams(); // ← número del issue
  const [dog, setDog] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchDog = async () => {
    try {
      const res = await fetch(`https://api.github.com/repos/${GITHUB_REPO}/issues/${id}`);
      const data = await res.json();
      setDog(data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDog();
  }, [id]);

  if (loading) {
    return <p className="p-6 text-gray-500">Cargando detalle...</p>;
  }

  if (!dog || dog.message === "Not Found") {
    return <p className="p-6 text-red-500">No se encontró esta adopción.</p>;
  }

  const firstImage = (() => {
    const match = dog.body?.match(/!\[.*?\]\((.*?)\)/);
    return match ? match[1] : null;
  })();

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/" className="text-blue-600 hover:underline">← Volver</Link>
      <h1 className="text-3xl font-bold mt-4 mb-2">{dog.title}</h1>

      {firstImage && (
        <img src={firstImage} alt={dog.title} className="rounded-xl shadow-md mb-6 w-full object-cover" />
      )}

      <div className="prose prose-lg max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {dog.body || 'Sin descripción'}
        </ReactMarkdown>
      </div>

      <div className="mt-6 text-gray-500 text-sm">
        Publicado el {new Date(dog.created_at).toLocaleDateString('es-ES')}
        {' '}por <a href={dog.user.html_url} className="text-blue-600 hover:underline">{dog.user.login}</a>
      </div>
    </div>
  );
}