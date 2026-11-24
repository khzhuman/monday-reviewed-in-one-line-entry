import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const line = 'One star. Monday opened with a meeting that could have been an email and closed with an email that should have been a meeting.';
if (line.length > 200) {
  throw new Error('Entry exceeds the 200-character limit.');
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const outputPath = join(outputDir, 'entry.txt');

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputPath, line, 'utf8');
if (readFileSync(outputPath, 'utf8') !== line) {
  throw new Error('Written entry differs from the expected line.');
}
