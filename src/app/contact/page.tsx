import type { Metadata } from "next";
import styles from "./contact.module.css";
import JotForm from "@/components/JotForm";

export const metadata: Metadata = {
  title: "Faire une demande | GT Cars Import",
  description: "Faites une demande personnalisée d'importation de véhicule. Notre équipe vous recontacte sous 24h.",
};

export default function Contact() {
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
          <p className="section-eyebrow">Démarrez votre projet</p>
          <h1 className="section-title">Faire une <span>demande</span></h1>
          <div className="red-line" />
          <p className="section-subtitle">
            Remplissez ce formulaire et un expert GT Cars Import vous contacte sous <strong>24h</strong>.
          </p>
        </div>
      </section>

      {/* Contact section (Blanc) */}
      <section className="section-light section-pad">
        <div className="container">
          <div className={styles.contactGrid}>
            {/* Formulaire JotForm */}
            <div className={styles.formCard}>
              <h2 className={styles.formTitle}>Votre demande personnalisée</h2>
              <JotForm />
            </div>

            {/* Infos de contact */}
            <div className={styles.contactInfo}>
              <div className={styles.infoBlock}>
                <h3 className={styles.infoTitle}>Nous contacter directement</h3>
                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.89 12.07 19.79 19.79 0 0 1 1.79 3.41 2 2 0 0 1 3.77 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6.61 6.61l1.1-1.1a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div>
                    <p className={styles.infoLabel}>Téléphone</p>
                    <a href="tel:0970702675" className={styles.infoValue}>09 70 70 26 75</a>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div>
                    <p className={styles.infoLabel}>Email</p>
                    <a href="mailto:gtcarsimport44@gmail.com" className={styles.infoValue}>gtcarsimport44@gmail.com</a>
                  </div>
                </div>
              </div>

              {/* Promesses */}
              <div className={styles.promessesBlock}>
                <h3 className={styles.infoTitle}>Nos engagements</h3>
                {[
                  { icon: "⚡", label: "Réponse sous 24h" },
                  { icon: "🔍", label: "Recherche personnalisée" },
                  { icon: "🛡️", label: "Expertise indépendante garantie" },
                  { icon: "🔑", label: "Clé en main, aucune démarche" },
                  { icon: "🚛", label: "Livraison Europe en 10 jours" },
                ].map((p) => (
                  <div key={p.label} className={styles.promesseItem}>
                    <span className={styles.promesseIcon}>{p.icon}</span>
                    <span className={styles.promesseLabel}>{p.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
