import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | GT Cars Import",
  description: "Toutes les réponses à vos questions sur l'importation de véhicules depuis l'Allemagne avec GT Cars Import.",
};

const faqs = [
  {
    q: "Pourquoi acheter un véhicule en Allemagne ?",
    a: "L'Allemagne est le plus grand marché automobile d'Europe. Les prix sont souvent 15 à 25% moins élevés qu'en France grâce à la forte concurrence. Les véhicules sont généralement très bien entretenus et les normes de contrôle très strictes.",
  },
  {
    q: "Combien de temps prend une importation ?",
    a: "Une fois le véhicule trouvé et validé, la livraison par camion prend 5 à 10 jours. La phase de recherche dépend de vos critères, mais nous trouvons généralement un véhicule correspondant en quelques jours.",
  },
  {
    q: "Qu'est-ce qui est inclus dans vos frais ?",
    a: "Nos frais incluent systématiquement : la recherche personnalisée, la négociation, une expertise physique par un cabinet indépendant, un essai routier, le rapport Carvertical, la livraison par camion (pack frontière) et l'immatriculation complète.",
  },
  {
    q: "Est-ce que l'immatriculation est gérée par vos soins ?",
    a: "Oui, nous nous occupons de toutes les démarches administratives : homologation, contrôle technique si nécessaire, et immatriculation française. Vous n'avez rien à faire.",
  },
  {
    q: "Comment se passe le paiement ?",
    a: "Toutes les transactions sont sécurisées et gérées par nos experts allemands. Nous vous informons de chaque étape et vous avez une totale transparence sur les coûts avant tout engagement.",
  },
  {
    q: "Puis-je choisir n'importe quel véhicule ?",
    a: "Oui ! Nous importons toutes marques et toutes gammes : sportives, SUV, berlines, citadines, utilitaires, électriques et hybrides. Si vous avez un modèle en tête, nous le cherchons pour vous.",
  },
  {
    q: "Y a-t-il une garantie sur les véhicules importés ?",
    a: "Nous sélectionnons uniquement des véhicules dont l'état a été validé par notre cabinet d'expertise indépendant. Le rapport Carvertical vous garantit la transparence de l'historique du véhicule.",
  },
  {
    q: "Comment fonctionne votre programme de parrainage ?",
    a: "Si vous êtes entièrement satisfait de nos services, recommandez-nous à votre entourage. Pour chaque client parrainé qui concrétise une importation, vous recevez 100€ de récompense.",
  },
];

export default function FAQ() {
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
          <p className="section-eyebrow">On répond à tout</p>
          <h1 className="section-title">Questions <span>Fréquentes</span></h1>
          <div className="red-line" />
          <p className="section-subtitle">
            Tout ce que vous devez savoir sur l'importation de véhicules depuis l'Allemagne.
          </p>
        </div>
      </section>

      {/* FAQs (Blanc) */}
      <section className="section-light section-pad">
        <div className="container" style={{ maxWidth: "860px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {faqs.map((faq, i) => (
              <details key={i} style={{
                background: "#fff",
                border: "1px solid #e8e8e8",
                borderRadius: "12px",
                overflow: "hidden",
              }}>
                <summary style={{
                  padding: "1.5rem 2rem",
                  cursor: "pointer",
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: "#111",
                  listStyle: "none",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "1rem",
                  userSelect: "none",
                }}>
                  {faq.q}
                  <span style={{
                    color: "#d90000",
                    fontSize: "1.4rem",
                    fontWeight: 300,
                    flex: "0 0 auto",
                  }}>+</span>
                </summary>
                <div style={{
                  padding: "0 2rem 1.5rem",
                  color: "#555",
                  lineHeight: "1.8",
                  fontSize: "0.95rem",
                  borderTop: "1px solid #f0f0f0",
                  paddingTop: "1.2rem",
                }}>
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Encore des questions (Noir) */}
      <section className="section-dark-2 section-pad">
        <div className="container" style={{ textAlign: "center" }}>
          <p className="section-eyebrow">Vous n'avez pas trouvé votre réponse ?</p>
          <h2 className="section-title">Contactez notre <span>équipe</span></h2>
          <div className="red-line center" />
          <p className="section-subtitle" style={{ margin: "0 auto 2.5rem" }}>
            Nos conseillers sont disponibles pour répondre à toutes vos questions et vous accompagner dans votre projet.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:0970702675" className="btn btn-primary btn-lg">
              📞 09 70 70 26 75
            </a>
            <Link href="/contact" className="btn btn-outline btn-lg">
              Formulaire de contact
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
