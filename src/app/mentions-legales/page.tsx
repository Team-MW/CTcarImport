import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions Légales | GT Cars Import",
  description: "Mentions légales et informations juridiques du site GT Cars Import.",
};

export default function MentionsLegales() {
  return (
    <main>
      {/* ── PAGE HEADER ───────────────────────────── */}
      <section className="section-dark section-pad" style={{ paddingBottom: "3rem", borderBottom: "1px solid var(--border-dark)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <p className="section-eyebrow">Informations juridiques</p>
          <h1 className="section-title">Mentions <span>Légales</span></h1>
          <div className="red-line center" />
        </div>
      </section>

      {/* ── CONTENU (BLANC) ───────────────────────── */}
      <section className="section-light section-pad">
        <div className="container" style={{ maxWidth: "800px", color: "#444", lineHeight: "1.8" }}>
          
          <p style={{ marginBottom: "2rem" }}>
            Conformément aux dispositions légales applicables en Suisse relatives aux services en ligne et au commerce électronique, il est précisé aux utilisateurs du site GTA Invest l’identité des différents intervenants dans le cadre de sa réalisation et de son suivi.
          </p>

          <h2 style={{ color: "#111", marginTop: "2.5rem", marginBottom: "1rem", fontFamily: "var(--font-heading)", fontSize: "1.8rem" }}>Édition du site</h2>
          <p style={{ marginBottom: "1rem" }}>
            Le présent site, accessible à l’URL <strong>https://gtcarsimport.com</strong> (le « Site »), est édité par :
          </p>
          <p style={{ marginBottom: "1rem" }}>
            <strong>GTA Invest</strong>, société inscrite au Registre du Commerce suisse sous le numéro CHE-218.075.398, dont le siège social est situé :
          </p>
          <p style={{ marginLeft: "1rem", borderLeft: "3px solid var(--red)", paddingLeft: "1rem", marginBottom: "1rem", backgroundColor: "var(--off-white)", padding: "1rem" }}>
            Marktgasse 8<br />
            4051 Bâle<br />
            Suisse
          </p>
          <p style={{ marginBottom: "2rem" }}>
            La société est représentée par son représentant légal dûment habilité.
          </p>

          <h2 style={{ color: "#111", marginTop: "2.5rem", marginBottom: "1rem", fontFamily: "var(--font-heading)", fontSize: "1.8rem" }}>Hébergement</h2>
          <p style={{ marginBottom: "1rem" }}>
            Le Site est hébergé par la société <strong>Infomaniak Network SA</strong>, dont le siège social est situé :
          </p>
          <p style={{ marginLeft: "1rem", borderLeft: "3px solid var(--red)", paddingLeft: "1rem", marginBottom: "1rem", backgroundColor: "var(--off-white)", padding: "1rem" }}>
            Rue Eugène-Marziano 25<br />
            1227 Les Acacias (Genève)<br />
            Suisse
          </p>
          <p style={{ marginBottom: "2rem" }}>
            Téléphone : +41 22 820 35 44
          </p>

          <h2 style={{ color: "#111", marginTop: "2.5rem", marginBottom: "1rem", fontFamily: "var(--font-heading)", fontSize: "1.8rem" }}>Directeur de la publication</h2>
          <p style={{ marginBottom: "2rem" }}>
            Le Directeur de la publication du Site est le représentant légal de la société GTA Invest.
          </p>

          <h2 style={{ color: "#111", marginTop: "2.5rem", marginBottom: "1rem", fontFamily: "var(--font-heading)", fontSize: "1.8rem" }}>Nous contacter</h2>
          <p style={{ marginBottom: "0.5rem" }}>
            Par e-mail : <a href="mailto:gtcarsimport44@gmail.com" style={{ color: "var(--red)", fontWeight: 600 }}>gtcarsimport44@gmail.com</a>
          </p>
          <p style={{ marginBottom: "0.5rem" }}>Par courrier :</p>
          <p style={{ marginLeft: "1rem", borderLeft: "3px solid var(--red)", paddingLeft: "1rem", marginBottom: "2rem", backgroundColor: "var(--off-white)", padding: "1rem" }}>
            GTA Invest<br />
            Marktgasse 8<br />
            4051 Bâle<br />
            Suisse
          </p>

          <h2 style={{ color: "#111", marginTop: "2.5rem", marginBottom: "1rem", fontFamily: "var(--font-heading)", fontSize: "1.8rem" }}>Données personnelles</h2>
          <p style={{ marginBottom: "1rem" }}>
            La collecte et le traitement des données à caractère personnel effectués via le Site sont réalisés conformément à la Loi fédérale suisse sur la protection des données (LPD) ainsi qu’au Règlement Général sur la Protection des Données (RGPD) (UE) 2016/679 lorsque celui-ci est applicable.
          </p>
          <p style={{ marginBottom: "1rem" }}>
            Les utilisateurs disposent d’un droit d’accès, de rectification, de suppression ou de limitation du traitement de leurs données personnelles, dans les conditions prévues par la réglementation applicable.
          </p>
          <p style={{ marginBottom: "2rem" }}>
            Pour toute demande relative à la protection des données personnelles, l’utilisateur peut contacter la société GTA Invest aux coordonnées indiquées ci-dessus.
          </p>

        </div>
      </section>
    </main>
  );
}
