// Entry for make.fun's "The Funniest Toaster Error Message".
//
// The whole program is one job: put a single one-line error message a
// kitchen toaster would show its owner — deadpan, 69 characters — into
// entry.txt inside the output directory, byte for byte the same on every
// run. The grader points MAKEFUN_OUTPUT_DIR at its own scratch output
// folder; on a plain machine the fallback is /output, the path the
// competition reads.
//
// Run it locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// and the line lands in out/entry.txt, with no trailing newline: the judge
// reads exactly what is in the file, so the text below is the entire entry.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

// The line itself. A toaster error code, then the surprise: the bread is
// not broken, it is refusing — it has worked out what browning leads to.
// Deadpan appliance voice, one clear turn, and the punch lands on the
// last words.
const ERROR =
  "ERROR E12: The bread refuses to brown. It has seen what happens next.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

writeFileSync(join(outputDir, 'entry.txt'), ERROR, 'utf8');
