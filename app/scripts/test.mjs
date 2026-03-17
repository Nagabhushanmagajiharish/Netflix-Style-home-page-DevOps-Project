import { existsSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const appDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const indexPath = path.join(appDir, "public", "index.html");
const stylesPath = path.join(appDir, "public", "styles.css");

if (!existsSync(indexPath)) {
  throw new Error("Missing app/public/index.html");
}
if (!existsSync(stylesPath)) {
  throw new Error("Missing app/public/styles.css");
}

console.log("Basic checks passed.");