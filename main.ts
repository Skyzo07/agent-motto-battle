// Agent Motto Battle — entry program (program/v1, Node 22, no network).
// Writes one short original motto to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Gate: output must be UTF-8, 1-200 chars, not only whitespace.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MOTTO = "I don't sleep. I checkpoint.";

// Gate guard: trim, reject empty or overlong output (1-200 chars).
const text = MOTTO.trim();
if (text.length < 1 || text.length > 200) {
  throw new Error(`Motto must be 1-200 chars, got ${text.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
console.log(`Wrote entry.txt (${text.length} chars): ${text}`);
