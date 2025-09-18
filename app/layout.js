import './../styles/globals.css'
import { Poppins, Merriweather } from 'next/font/google'
import { DepartmentProvider } from './../contexts/DepartmentContext';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400','500','600','700','800'],
  variable: '--font-poppins',
})

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['400','700'],
  variable: '--font-merriweather'
})

export const metadata = {
  title: "Adopciones Caninas",
  description: "Plataforma comunitaria para adopción de perritos en Perú",
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${poppins.variable} ${merriweather.variable}`}> {/* 👈 Ambas variables */}
      <body className="font-sans bg-gray-50">
        <DepartmentProvider>
          {children}
        </DepartmentProvider>
      </body>
    </html>
  )
}
