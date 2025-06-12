import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Loopr | Din smarta golfcaddie-app",
  description:
    "Loopr är nästa generations golfapp som hjälper dig fatta smartare beslut ute på banan. Med personliga klubbrekommendationer, GPS-stöd och väderanpassade förslag är det som att ha en caddie i fickan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
