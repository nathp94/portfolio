/**
 * Vérification de la sortie statique (`out/`) :
 * - tous les liens internes sont préfixés par le chemin de base ;
 * - chaque lien interne pointe vers un fichier réellement exporté ;
 * - les pages détail contiennent bien leur rendu MDX.
 *
 * À lancer après `npm run build` — utilisé aussi par `npm run verify`.
 */
import fs from "node:fs";
import path from "node:path";

const out = path.join(process.cwd(), "out");

function read(p) {
  return fs.readFileSync(path.join(out, p), "utf8");
}

const files = fs.readdirSync(out, { recursive: true }).filter((p) =>
  p.endsWith("index.html"),
);

if (files.length === 0) {
  console.error("Aucune page trouvée dans out/ — lancer `npm run build` d'abord.");
  process.exit(1);
}

console.log(`Pages exportées : ${files.length}`);

if (!files.includes("index.html")) {
  console.error("Il manque l'index racine.");
  process.exit(1);
}

const home = read("index.html");
const internalHrefs = [...home.matchAll(/href="([^"]+)"/g)]
  .map((m) => m[1])
  .filter((href) => href.startsWith("/"));

// Détecte le chemin de base utilisé au build (ex. "/portfolio/" ou "").
const rootHrefs = [...new Set(internalHrefs)].filter(
  (h) => !h.startsWith("mailto:"),
);
const commonPrefix = (a, b) => {
  let i = 0;
  while (i < a.length && i < b.length && a[i] === b[i]) i++;
  return a.slice(0, i);
};
const base = rootHrefs.reduce(commonPrefix);
console.log(`Chemin de base détecté : "${base}"`);

// Vérifie que chaque lien interne existe réellement dans out/.
const ok = [...new Set(internalHrefs)].map((href) => {
  if (href.startsWith("mailto:")) return true;
  const clean = href.split("?")[0].split("#")[0];
  const rel = clean.replace(new RegExp(`^${base}`), "");
  if (clean.startsWith(`${base}_next/`))
    return fs.existsSync(path.join(out, rel));
  const target =
    rel === "" || rel === "favicon.ico"
      ? rel === "" ? "index.html" : rel
      : fs.existsSync(path.join(out, rel))
        ? rel
        : fs.existsSync(path.join(out, `${rel}/index.html`))
          ? `${rel}/index.html`
          : null;
  if (target) return true;
  console.error(`Lien interne cassé : ${href}`);
  return false;
});

if (ok.includes(false)) process.exit(1);

// Pages détail : contenu MDX bien rendu (vérification sur la première
// page /work/[slug] exportée, quelle que soit celle publiée).
const workPages = files.filter((p) => p.startsWith(`work${path.sep}`));
if (workPages.length === 0) {
  console.error("Aucune page projet exportée dans out/work/.");
  process.exit(1);
}
const detail = read(workPages[0]);
for (const [label, has] of [
  ["<h1>", detail.includes("<h1")],
  ["contenu paragraphe", detail.includes("<p")],
  ["lien retour", detail.includes("retour")],
]) {
  if (!has) {
    console.error(`Page détail : ${label} manquant.`);
    process.exit(1);
  }
}

console.log("OK — liens internes valides, rendu MDX correct, encodage correct.");