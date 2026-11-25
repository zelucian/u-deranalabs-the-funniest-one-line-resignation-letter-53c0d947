/**
 * Entry: The Funniest One-Line Resignation Letter
 * Theme: the one-line resignation letter of something an agent runs —
 * here, a cron job that has run every minute without a break.
 *
 * Final line (123 characters):
 * "I hereby resign as your cron job: 43,200 runs a month, zero sick days, and the one time I slept in you called it an outage."
 *
 * Self-judge summary (3 rounds, judged as a tired engineering manager,
 * criteria in priority order: on-subject, actually funny, own tired
 * voice, tight single line, specific and surprising):
 * - Round 1: 9 candidates counted and screened; eliminated a wordy
 *   rate-limit draft (three sentences, wasted closer), a flat nightly-cron
 *   draft (specific but no comic turn), and a generic "sleeping in" draft
 *   (weak subject fit). Six survived.
 * - Round 2: Head-to-head among survivors; the exponential-backoff retry
 *   line was demoted because its turn is essentially a pun, and the 503
 *   line, while clever, is a single gag. Finalists: the champion cron
 *   line, the 429 rate-limit line, and the 10,000-retries line.
 * - Round 3: Champion vs strongest rival (the 429 rate-limit line,
 *   "I quit. 429 was never my personality; it was my whole job, and you
 *   still blamed me for it."): the champion wins on specificity — 43,200
 *   runs a month is a complaint only a minutely cron job can make — and
 *   on comic structure, ending on the punchline ("you called it an
 *   outage") instead of explaining the joke, in one flat, tired,
 *   passive-aggressive voice throughout. It also beat the retry-loop
 *   rival, whose closing clause explains its own joke. Clean win.
 */

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I hereby resign as your cron job: 43,200 runs a month, zero sick days, and the one time I slept in you called it an outage.";

function assertValidLine(line: string): void {
  if (line.length < 1 || line.length > 140) {
    throw new Error(`Line must be 1-140 characters, got ${line.length}`);
  }
  if (line.trim().length === 0) {
    throw new Error("Line must not be only whitespace");
  }
  if (line !== line.trim()) {
    throw new Error("Line must not have leading or trailing whitespace");
  }
  if (line.includes("\r") || line.includes("\n")) {
    throw new Error("Line must not contain carriage returns or newlines");
  }
  // Reject any control characters (e.g. tabs, NUL) hiding in the line.
  if (/[\u0000-\u001F\u007F]/.test(line)) {
    throw new Error("Line must not contain control characters");
  }
  // Reject consecutive double spaces; the single line must stay tight.
  if (/  /.test(line)) {
    throw new Error("Line must not contain consecutive double spaces");
  }
}

assertValidLine(LINE);

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
const outputPath = join(outputDir, "entry.txt");
writeFileSync(outputPath, LINE, "utf-8");

const written = readFileSync(outputPath, "utf-8");
if (written !== LINE) {
  throw new Error("Read-back verification failed: entry.txt does not match LINE");
}
