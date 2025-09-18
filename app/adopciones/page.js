'use client';
import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function AdopcionPage() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === '/adopcion') {
      router.replace('/adopcion/ayacucho');
    }
  }, [pathname, router]);

  return (
    <div className="flex h-screen items-center justify-center text-gray-500">
      Redirigiendo a Ayacucho...
    </div>
  );
}