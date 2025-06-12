import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between px-8 py-4 border-b border-gray-300 sticky">
      <div>
        <Link href="/" className="font-bold text-xl">
          Loopr
        </Link>
      </div>
      <div className="flex justify-between gap-8">
        <Link href="/features" className="hover:opacity-60">
          Funktioner
        </Link>
        <Link href="/contact" className="hover:opacity-60">
          Kontakta oss
        </Link>
      </div>
    </nav>
  );
}
