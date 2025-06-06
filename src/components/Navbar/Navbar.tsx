import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between px-8 py-4 border-b border-gray-300 sticky">
      <div>
        <Link href="/">Loopr</Link>
      </div>
      <div className="flex justify-between gap-8">
        <Link href="/features" className="hover:opacity-60">
          Features
        </Link>
        <Link href="/contact" className="hover:opacity-60">
          Contact
        </Link>
      </div>
    </nav>
  );
}
