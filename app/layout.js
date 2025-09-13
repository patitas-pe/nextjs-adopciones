import './../styles/globals.css';

export const metadata = {
  title: "🐶 Adopciones Caninas",
  description: "Plataforma de adopción de perritos usando GitHub Issues",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-gray-50 font-sans antialiased">
        {children}
      </body>
    </html>
  )
}