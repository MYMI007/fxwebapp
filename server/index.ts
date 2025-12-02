import express from "express";
import path from "path";
import { existsSync } from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const projectRoot = path.resolve(__dirname, "..");
const buildPublicDir = path.join(projectRoot, "dist", "public");
const buildDir = path.join(projectRoot, "dist");

// Prefer built assets when available, otherwise serve directly from the project root for development.
const staticDir = existsSync(buildPublicDir)
  ? buildPublicDir
  : existsSync(path.join(buildDir, "index.html"))
    ? buildDir
    : projectRoot;

const indexPath = existsSync(path.join(buildDir, "index.html"))
  ? path.join(buildDir, "index.html")
  : path.join(projectRoot, "index.html");

app.use(express.static(staticDir));

app.get("*", (_req, res) => {
  res.sendFile(indexPath);
});

const port = Number(process.env.PORT) || 4173;
app.listen(port, () => {
  console.log(`Car Road site available at http://localhost:${port}`);
});
