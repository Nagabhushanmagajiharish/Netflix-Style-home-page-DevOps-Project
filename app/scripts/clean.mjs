import { rm } from "fs/promises";
import { existsSync } from "fs";

const dist = new URL("../dist", import.meta.url);
if (existsSync(dist)) {
  await rm(dist, { recursive: true, force: true });
}