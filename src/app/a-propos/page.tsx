import Link from "next/link";
import type { Metadata } from "next";
import styles from "./a-propos.module.css";

export const metadata: Metadata = {
  title: "À propos | GT Cars Import",
  description: "Découvrez GT Cars Import, spécialiste de l'importation de véhicules allemands depuis 2020. Notre équipe d'experts à votre service.",
};

const team = [
  { name: "Patrick Rownicki", role: "Expert Allemand", initials: "PR" },
  { name: "Jürgen Schneller", role: "Service Carte Grise", initials: "JS" },
  { name: "Olivier Kammerer", role: "Commercial", initials: "OK" },
  { name: "Eduar. Just", role: "Expert Allemand", initials: "EJ" },
];

const valeurs = [
  {
    icon: "🏆",
    title: "Expertise",
    desc: "Nos experts possèdent une grande expérience que nous mettons à votre disposition.",
  },
  {
    icon: "✅",
    title: "Qualité",
    desc: "Nous vous proposons des véhicules de qualité à prix réduits.",
  },
  {
    icon: "🔒",
    title: "Sécurité Bancaire",
    desc: "Toutes les transactions bancaires sont sécurisées par nos experts Allemands.",
  },
];

const avantages = [
  "Historique et kilométrages vérifiés",
  "Réactivité — Disponibilité — Efficacité",
  "Livraison par camion en 10 jours dans toute la France",
  "Prestation clé en main",
  "Transactions bancaires sécurisées",
  "Essai routier effectué par les experts allemands avant l'achat",
];

export default function APropos() {
  return (
    <main>
      {/* ── PAGE HEADER ───────────────────────────── */}
      <section className={styles.pageHeader}>
        <div className="container">
          <p className="section-eyebrow">Qui sommes-nous</p>
          <h1 className="section-title">À propos de <span>GT Cars Import</span></h1>
          <div className="red-line" />
          <p className="section-subtitle">
            Créée en 2020, GT Cars Import est spécialisée dans la recherche et l'importation
            de véhicules toutes gammes et toutes marques directement depuis l'Allemagne.
          </p>
        </div>
      </section>

      {/* ── PRÉSENTATION (BLANC) ─────────────────── */}
      <section className="section-light section-pad">
        <div className="container">
          <div className={styles.twoColGrid}>
            <div>
              <p className="section-eyebrow">Notre histoire</p>
              <h2 className="section-title" style={{ color: "#111" }}>Une équipe de <span>passionnés</span></h2>
              <div className="red-line" />
              <p style={{ color: "#444", lineHeight: "1.9", marginBottom: "1.5rem" }}>
                Notre équipe de passionnés est à votre disposition pour vous aider à trouver le véhicule
                de vos rêves. Nous vous offrons un service clé en main et vous n'avez aucune démarche
                à effectuer dans votre futur projet automobile.
              </p>
              <p style={{ color: "#444", lineHeight: "1.9", marginBottom: "2rem" }}>
                Nous réalisons toutes les étapes de votre projet d'importation, de la <strong>recherche du
                véhicule</strong> à la <strong>livraison à votre domicile</strong>, en passant par l'expertise
                physique, la négociation et l'immatriculation.
              </p>
              <div className={styles.avantagesList}>
                {avantages.map((a) => (
                  <div key={a} className={styles.avantageItem}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d90000" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {a}
                  </div>
                ))}
              </div>
            </div>

            {/* Valeurs */}
            <div className={styles.valeursList}>
              {valeurs.map((v) => (
                <div key={v.title} className={`card-light ${styles.valeurCard}`}>
                  <span style={{ fontSize: "2rem", lineHeight: 1, flexShrink: 0 }}>{v.icon}</span>
                  <div>
                    <h3 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, color: "#111", marginBottom: "0.4rem" }}>{v.title}</h3>
                    <p style={{ color: "#666", fontSize: "0.9rem", lineHeight: "1.7" }}>{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ÉQUIPE (NOIR) ─────────────────────────── */}
      <section className="section-dark-2 section-pad">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p className="section-eyebrow">Derrière GT Cars Import</p>
            <h2 className="section-title">Notre <span>Équipe</span></h2>
            <div className="red-line" style={{ margin: "0 auto 1.5rem" }} />
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              Des professionnels passionnés d'automobile à votre service.
            </p>
          </div>
          <div className="grid-4">
            {team.map((member) => (
              <div key={member.name} className="card-dark" style={{ textAlign: "center" }}>
                <div style={{
                  width: "70px", height: "70px", borderRadius: "50%",
                  background: "linear-gradient(135deg, #d90000, #7d0000)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 1.2rem",
                  fontFamily: "'Outfit', sans-serif", fontWeight: 800, color: "#fff", fontSize: "1.2rem",
                }}>
                  {member.initials}
                </div>
                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, color: "#fff", marginBottom: "0.4rem", fontSize: "1rem" }}>
                  {member.name}
                </h3>
                <p style={{ color: "#d90000", fontSize: "0.82rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "1px" }}>
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL (BLANC) ──────────────────────── */}
      <section className="section-light section-pad">
        <div className="container" style={{ textAlign: "center" }}>
          <p className="section-eyebrow">Prêt à vous lancer ?</p>
          <h2 className="section-title" style={{ color: "#111" }}>
            N'attendez plus et faites une<br /><span>demande personnalisée !</span>
          </h2>
          <div className="red-line center" />
          <Link href="/contact" className="btn btn-primary btn-lg" style={{ marginTop: "1rem" }}>
            Faire une demande
          </Link>
        </div>
      </section>
    </main>
  );
}
