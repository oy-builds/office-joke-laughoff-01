// One-Line Office Joke Laugh-Off — writes one original one-line office joke
// to /output/entry.txt. Gate: 1-200 UTF-8 chars, not only whitespace.
import { mkdirSync, writeFileSync } from "node:fs";

// Final line (fridge crime-scene angle): the twist is that the detective
// is in on it too — everyone in the office steals lunch.
const JOKE =
  "The office fridge is a crime scene where the victim, the suspect, and the detective all steal each other's lunch.";

function main(): void {
  const text = JOKE.trim();
  // Gate: 1-200 UTF-8 chars, not only whitespace. Deterministic: the same
  // constant is written on every run, so two runs are byte-identical.
  if (text.length < 1 || text.length > 200 || text.trim().length === 0) {
    throw new Error(`gate failed: entry is ${text.length} chars`);
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", text, "utf8");
}

main();
