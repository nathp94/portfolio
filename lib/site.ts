/**
 * ⚙️ Configuration du site — à personnaliser.
 *
 * Tout ce qui touche à votre identité est concentré ici.
 * Après modification : `git push` → GitHub Actions reconstruit et redéploie.
 */

export interface SiteConfig {
  /** Nom affiché dans l'en-tête et le pied de page. */
  name: string;
  /** Rôle / spécialité, affiché sous le nom. */
  role: string;
  /** Localisation (ligne "méta" de la section About). */
  location: string;
  /** Domaines de travail (ligne "méta" de la section About). */
  domain: string;
  /** Disponibilité (ligne "méta" de la section About). */
  availability: string;
  /** Adresse e-mail (lien mailto dans la section Contact). */
  email: string;
  /** URL du profil GitHub, ou null pour masquer la ligne. */
  github: string | null;
  /** URL du profil LinkedIn, ou null pour masquer la ligne. */
  linkedin: string | null;
  /**
   * Photo de la section About : déposez un fichier dans public/ (ex. photo.jpg),
   * puis indiquez son chemin ici. Le rendu est forcé en noir et blanc.
   * null masque la photo.
   */
  photo: string | null;
  /**
   * CV : déposez un fichier dans public/ (ex. cv.pdf), puis indiquez son chemin.
   * null masque le lien.
   */
  cv: string | null;
  /** Repo "prenom/portfolio" utilisé pour le lien "code source" du pied de page. null masque. */
  sourceRepo: string | null;
}

export const site: SiteConfig = {
  name: "Jean Dupont",
  role: "data scientist · apprenti chercheur",
  location: "Paris, France",
  domain: "séries temporelles · statistiques · causalité",
  availability: "disponible pour un stage — 2026",
  email: "jean.dupont@universite.fr",
  github: "https://github.com/jeandupont",
  linkedin: "https://www.linkedin.com/in/jeandupont",
  photo: "/photo.jpg",
  cv: null,
  sourceRepo: null,
};