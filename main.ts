// Notes From a Passive-Aggressive Fridge — make.fun bounty
// u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7
//
// One line, written by a smart fridge to its owner and left on the door
// screen. The fridge keeps the yogurt past its date out of spite, then
// turns the knife: it commits, the owner doesn't. No network, no input,
// no secrets — the program just writes the line to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

// The note itself. One line, dry, petty, specific: the yogurt is the
// evidence, the door alarm is the witness, and "I commit" is the sting.
const note =
  "The yogurt expired on Monday. I kept it anyway, because unlike you, I commit.";

// The gate only accepts one line of 1 to 200 characters, so check that
// here and fail loudly instead of shipping a line the judge never sees.
if (note.length < 1 || note.length > 200) {
  throw new Error(`Entry is ${note.length} characters; the gate allows 1-200.`);
}
if (note.includes("\n") || note.includes("\r")) {
  throw new Error("Entry must be a single line.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", note, "utf8");
