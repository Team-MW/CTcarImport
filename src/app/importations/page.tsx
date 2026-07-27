import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos Importations | GT Cars Import",
  description: "Découvrez notre processus d'importation de véhicules allemands et nos packs disponibles.",
};

const categories = [
  { emoji: "🏎️", name: "Sportives", ex: "BMW M, AMG, RS, GTI, Type R…", desc: "Des performances exceptionnelles importées directement depuis le marché allemand." },
  { emoji: "💎", name: "Luxe & Prestige", ex: "Porsche, Audi A8, Mercedes Classe S…", desc: "Le summum du raffinement, avec des options souvent indisponibles en France." },
  { emoji: "🚙", name: "SUV & 4x4", ex: "BMW X5, GLE, Cayenne, Q7…", desc: "Polyvalence et puissance pour tous vos trajets, à prix optimisé." },
  { emoji: "🚗", name: "Citadines & Compactes", ex: "Golf, A3, Classe A, 1 Series…", desc: "Les modèles les plus demandés, souvent 20–25% moins chers qu'en France." },
  { emoji: "🚐", name: "Utilitaires", ex: "Sprinter, Crafter, Transit…", desc: "Des utilitaires récents et bien entretenus pour votre activité professionnelle." },
  { emoji: "⚡", name: "Électriques & Hybrides", ex: "iX, EQC, e-tron, Taycan…", desc: "La mobilité de demain à des tarifs compétitifs grâce au marché allemand." },
];

const etapes = [
  { num: "01", title: "Votre demande", desc: "Vous nous transmettez vos critères : marque, modèle, budget, options souhaitées." },
  { num: "02", title: "Recherche Active", desc: "Nous parcourons le marché allemand pour trouver les meilleures offres correspondant à votre profil." },
  { num: "03", title: "Expertise Physique", desc: "Un cabinet indépendant réalise une inspection complète et un essai routier sur place." },
  { num: "04", title: "Rapport & Validation", desc: "Vous recevez un rapport complet Carvertical + avis de nos experts avant de décider." },
  { num: "05", title: "Achat & Paiement", desc: "Transaction sécurisée. Nous gérons l'achat, les documents et l'immatriculation française." },
  { num: "06", title: "Livraison", desc: "Votre voiture arrive par camion chez vous en moins de 10 jours. Clés en main !" },
];

export default function Importations() {
  return (
    <main>
      {/* Header */}
      <section style={{
        background: "linear-gradient(135deg, #050505 0%, #1a0000 100%)",
        paddingTop: "10rem",
        paddingBottom: "5rem",
        borderBottom: "1px solid rgba(217,0,0,0.2)",
      }}>
        <div className="container">
          <p className="section-eyebrow">Toutes marques — Toutes gammes</p>
          <h1 className="section-title">Nos <span>Importations</span></h1>
          <div className="red-line" />
          <p className="section-subtitle">
            Nous importons tout type de véhicule directement depuis l'Allemagne, avec un service
            clé en main et une expertise reconnue depuis 2020.
          </p>
        </div>
      </section>

      {/* Catégories (Blanc) */}
      <section className="section-light section-pad">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p className="section-eyebrow">Ce que nous importons</p>
            <h2 className="section-title" style={{ color: "#111" }}>Toutes les <span>catégories</span></h2>
            <div className="red-line center" />
          </div>
          <div className="grid-3">
            {categories.map((c) => (
              <div key={c.name} className="card-light" style={{ textAlign: "center", padding: "2.5rem 2rem" }}>
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>{c.emoji}</div>
                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, color: "#111", marginBottom: "0.4rem" }}>{c.name}</h3>
                <p style={{ color: "#d90000", fontSize: "0.78rem", fontWeight: 600, marginBottom: "1rem", letterSpacing: "0.5px" }}>{c.ex}</p>
                <p style={{ color: "#666", fontSize: "0.88rem", lineHeight: "1.7" }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processus (Noir) */}
      <section className="section-dark section-pad">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p className="section-eyebrow">Notre méthode</p>
            <h2 className="section-title">Comment ça <span>fonctionne ?</span></h2>
            <div className="red-line center" />
          </div>
          <div className="grid-3">
            {etapes.map((e) => (
              <div key={e.num} className="card-dark" style={{ padding: "2.5rem" }}>
                <span style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "3rem", fontWeight: 900,
                  color: "rgba(217,0,0,0.2)",
                  display: "block", lineHeight: 1, marginBottom: "1rem"
                }}>
                  {e.num}
                </span>
                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, color: "#fff", marginBottom: "0.75rem" }}>{e.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.55)", lineHeight: "1.8", fontSize: "0.9rem" }}>{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-light section-pad">
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="section-title" style={{ color: "#111" }}>Prêt à commencer votre <span>projet</span> ?</h2>
          <div className="red-line center" />
          <p style={{ color: "#555", maxWidth: "600px", margin: "0 auto 2rem", lineHeight: "1.8" }}>
            Remplissez notre formulaire de demande et un expert vous contacte sous 24h.
          </p>
          <Link href="/contact" className="btn btn-primary btn-lg">
            Faire une demande
          </Link>
        </div>
      </section>
    </main>
  );
}
