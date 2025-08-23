// components/Footer.tsx
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 text-center p-6 mt-12 border-t border-pink-500">
      <div className="flex justify-center mb-4">
        <Image
          src="/images/logo.png"
          alt="Punk Stage Logo"
          width={60}
          height={60}
          className="rounded"
        />
      </div>
      <p className="mb-2 text-sm">&copy; {new Date().getFullYear()} Punk Stage. Todos los derechos reservados.</p>
      <div className="space-x-4 text-sm">
        <a href="#" className="hover:text-pink-400">Términos</a>
        <a href="#" className="hover:text-pink-400">Privacidad</a>
        <a href="#" className="hover:text-pink-400">Contacto</a>
      </div>
    </footer>
  );
}
