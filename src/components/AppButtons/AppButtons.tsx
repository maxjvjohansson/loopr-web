import AppleIcon from "@mui/icons-material/Apple";
import Link from "next/link";

export default function AppButtons() {
  return (
    <div className="flex flex-wrap gap-4">
      <Link
        href="https://apps.apple.com/"
        target="_blank"
        className="bg-black text-white rounded-xl px-5 py-3 flex items-center gap-3 shadow-sm hover:opacity-80 transition"
      >
        <AppleIcon />
        <div className="text-left leading-tight">
          <span className="text-xs block">Kommer snart till</span>
          <span className="font-semibold text-lg">App Store</span>
        </div>
      </Link>

      <Link
        href="/waitlist"
        className="flex items-center border-2 border-green-800 text-green-900 rounded-xl px-5 py-3 font-semibold hover:opacity-70 transition"
      >
        Skriv upp dig på väntlistan
      </Link>
    </div>
  );
}
