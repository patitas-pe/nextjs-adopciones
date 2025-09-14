'use client';

export default function OrganizacionesPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6">🏥 Registrar Organización</h1>
      <p className="text-gray-700 mb-8">
        Si representas a un refugio, organización o grupo de rescate de perritos, 
        completa este formulario para unirte a nuestra plataforma.
      </p>

      <form className="space-y-6">
        <input
          type="text"
          placeholder="Nombre de la organización"
          className="w-full border rounded-lg px-4 py-3"
        />
        <input
          type="email"
          placeholder="Correo de contacto"
          className="w-full border rounded-lg px-4 py-3"
        />
        <input
          type="text"
          placeholder="Departamento"
          className="w-full border rounded-lg px-4 py-3"
        />
        <textarea
          placeholder="Descripción / misión de la organización"
          className="w-full border rounded-lg px-4 py-3 min-h-[150px]"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Registrar
        </button>
      </form>
    </main>
  );
}