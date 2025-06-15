import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <div className="max-w-6xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-3">
        <div className="space-y-4">
          <h3 className="flex items-center gap-2 text-xl font-bold">Loopr</h3>
          <p className="text-sm text-neutral-600">
            Framtidens golf finns här. Spela smartare med .
          </p>
        </div>

        <div className="flex gap-16">
          <ul className="space-y-2">
            <h4 className="font-semibold">Produkt</h4>
            <li>
              <Link href="/features" className="hover:underline transition">
                Funktioner
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:underline transition">
                Pris
              </Link>
            </li>
            <li>
              <Link href="/updates" className="hover:underline transition">
                Uppdateringar
              </Link>
            </li>
          </ul>
          <ul className="space-y-2">
            <h4 className="font-semibold">Support</h4>
            <li>
              <Link href="/help" className="hover:underline transition">
                Hjälpcenter
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline transition">
                Kontakt
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:underline transition">
                Integritet
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h4 className="font-semibold">Följ oss</h4>
          <div className="flex gap-4">
            <Link
              href="https://twitter.com"
              target="_blank"
              className="hover:underline transition"
            >
              Twitter
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              className="hover:underline transition"
            >
              Instagram
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-200 py-6 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} Loopr
      </div>
    </footer>
  );
}
