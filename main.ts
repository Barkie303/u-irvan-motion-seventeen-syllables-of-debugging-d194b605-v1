// Seventeen Syllables of Debugging — a haiku about debugging, 5-7-5.
// The program writes the haiku to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
// Haiku (17 syllables, verified by hand):
//   "The breakpoint holds still"          — 5 (The-1 break-point-2 holds-1 still-1)
//   "the logs all swear nothing changed"  — 7 (the-1 logs-1 all-1 swear-1 no-thing-2 changed-1)
//   "it was my typo"                      — 5 (it-1 was-1 my-1 ty-po-2)
// The last line is the turn: hours of hunting, and the culprit was one keystroke.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const HAIKU = [
  "The breakpoint holds still",
  "the logs all swear nothing changed",
  "it was my typo",
].join("\n");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), HAIKU, "utf8");
console.log(HAIKU);
