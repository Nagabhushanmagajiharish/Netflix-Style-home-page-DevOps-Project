import { cp, mkdir, readFile, writeFile, rm } from "fs/promises";
import { existsSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const appDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = path.join(appDir, "public");
const distDir = path.join(appDir, "dist");

if (existsSync(distDir)) {
  await rm(distDir, { recursive: true, force: true });
}
await mkdir(distDir, { recursive: true });
await cp(publicDir, distDir, { recursive: true });

const indexPath = path.join(distDir, "index.html");
if (existsSync(indexPath)) {
  const tmdbKey = process.env.TMDB_V3_API_KEY || process.env.VITE_TMDB_API_KEY || "";
  const html = await readFile(indexPath, "utf8");
  const replaced = html.replaceAll("__TMDB_V3_API_KEY__", tmdbKey);
  await writeFile(indexPath, replaced, "utf8");
}