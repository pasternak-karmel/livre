import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Formation Pub Facebook</div>
        <nav className="space-x-4">
          <Link href="/" className="hover:text-gray-200">
            Accueil
          </Link>
          <Link href="/contact" className="hover:text-gray-200">
            Contact
          </Link>
          <Link href="/about" className="hover:text-gray-200">
            À propos
          </Link>
        </nav>
      </div>
    </header>
  );
}
