import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sunu Entreprise",
  description: "Entreprise de développement web",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans bg-gray-100 text-gray-900`}
      >
        <header className="flex justify-between items-center bg-slate-900 text-white py-4 px-6 shadow-md">
          <div className="text-lg font-bold">Sunu Entreprise</div>
          <nav className="flex gap-6">
            <Link href="/" className="text-white hover:text-gray-300 transition-colors">
              Accueil
            </Link>
            <Link href="/about" className="text-white hover:text-gray-300 transition-colors">
              A propos
            </Link>
            <Link href="/service" className="text-white hover:text-gray-300 transition-colors">
              Services
            </Link>
            <Link href="/contact" className="text-white hover:text-gray-300 transition-colors">
              Contact
            </Link>
          </nav>
        </header>

        <main>
          {children}
          </main>

        <footer className="bg-gray-800 text-white text-center py-4 mt-8">
          <p>&copy; {new Date().getFullYear()} Sunu Entreprise. Tous droits réservés.</p>
        </footer>
      </body>
    </html>
  );
}
