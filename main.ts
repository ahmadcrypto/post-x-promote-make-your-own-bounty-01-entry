// Entry: Post on X — Promote Make your own bounty
// Reads POST.json (the verified public X post) and prints its URL.
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const data = JSON.parse(readFileSync(join(root, "POST.json"), "utf8"));

if (typeof data.url !== "string" || !data.url.startsWith("https://x.com/")) {
  throw new Error("POST.json must contain a valid x.com post URL");
}

console.log("bounty: post-x-promote-make-your-own-bounty-01");
console.log(`post: ${data.url}`);
console.log("play code: makefun-engine-statue-bakery");
