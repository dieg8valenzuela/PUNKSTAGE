import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-10 py-4 bg-black border-b border-pink-500 sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <Image src="/images/logo.png" alt="Punk Stage Logo" width={45} height={45} />
        <h1 className="text-xl font-bold text-pink-500 tracking-wider">Punk Stage</h1>
      </div>

      {/* Links */}
      <div className="flex space-x-8 text-gray-200 font-semibold">
        <Link href="#shows" className="hover:text-pink-400 transition-colors">Shows</Link>
        <Link href="#merch" className="hover:text-pink-400 transition-colors">Merch</Link>
        <Link href="#loyalty" className="hover:text-pink-400 transition-colors">Punk Score</Link>
      </div>
    </nav>
  );
}
