// News-image entry for Monday 23 November 2026 (Node 22, standard library only).
// The program copies the front-page image beside it to /output/entry.png.
// The image is drawn in code by build_image.py (PIL, deterministic, no network).
// The gate takes a whole PNG of at most 1 MiB and 1024 by 1024 pixels.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

copyFileSync(new URL('./entry.png', import.meta.url), join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'));
