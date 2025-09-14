'use client';

export default function ContactoPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6">📩 Contáctanos</h1>
      <p className="text-gray-700 mb-8">
        Si deseas más información sobre adopciones, voluntariado o apoyo, 
        completa este formulario y nos pondremos en contacto contigo.
      </p>

      <form className="space-y-6">
        <input
          type="text"
          placeholder="Tu nombre"
          className="w-full border rounded-lg px-4 py-3"
        />
        <input
          type="email"
          placeholder="Tu correo"
          className="w-full border rounded-lg px-4 py-3"
        />
        <textarea
          placeholder="Escribe tu mensaje"
          className="w-full border rounded-lg px-4 py-3 min-h-[150px]"
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
        >
          Enviar mensaje
        </button>
      </form>
    </main>
  );
}