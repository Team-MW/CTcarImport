import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GT Cars Import | Importation de Véhicules Allemands",
  description:
    "Spécialiste de l'importation de véhicules allemands depuis 2020. Recherche personnalisée, expertise physique et livraison clé en main dans toute l'Europe.",
  keywords: "import voiture Allemagne, importation véhicule, GT Cars Import, voiture allemande pas chère",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={geistSans.variable}>
      <body>
        <Navbar />
        <div style={{ paddingTop: "0" }}>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
