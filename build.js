// Copie les fichiers du site dans dist/ (dossier de sortie à indiquer à l'hébergeur).
const fs = require("fs");
const path = require("path");

const out = path.join(__dirname, "dist");
const ignorer = new Set(["dist", "node_modules", ".git", "package.json", "package-lock.json", "build.js", ".gitignore"]);

fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out);
for (const nom of fs.readdirSync(__dirname)) {
  if (ignorer.has(nom) || nom.startsWith(".")) continue;
  fs.cpSync(path.join(__dirname, nom), path.join(out, nom), { recursive: true });
}
console.log("Site copié dans dist/");
