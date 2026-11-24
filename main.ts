import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Your merge conflict is not a bug; it is two honest engineers meeting for the first time.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`Wrote ${entry.length} characters to /output/entry.txt`);
// One-liner entry: fortune-cookie wisdom about merge conflicts, exactly 88 characters.
