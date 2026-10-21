#!/usr/bin/env node
// Copyright (c) Meta Platforms, Inc. and affiliates.

/**
 * Source check: Thumbnail block examples must use CORS-safe demo media.
 *
 * Thumbnail's remove-button overlay uses useImageMode, which FETCHES the image
 * (`fetch(src, {mode: 'cors'})` -> createImageBitmap -> OffscreenCanvas
 * getImageData) to sample pixels for APCA contrast. A cross-origin CDN URL
 * without `Access-Control-Allow-Origin` cannot be fetched/sampled, so contrast
 * detection fails silently and logs CORS errors in hosted previews. These
 * image-backed examples must use a self-contained, same-origin, samplable
 * source (a data: URI) instead of a cross-origin lookaside URL.
 *
 * Usage: node scripts/check-demo-media.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const THUMBNAIL_BLOCK_DIR = path.resolve(
  __dirname,
  '../packages/cli/templates/blocks/components/Thumbnail',
);

// Cross-origin demo hosts that cannot be CORS-sampled by useImageMode: Meta's
// lookaside CDN and the docs-host marker URLs (swapped for an inline
// placeholder only when a template is scaffolded or previewed).
const CROSS_ORIGIN_MEDIA = ['lookaside.facebook.com', 'pharos-ds.vercel.app/assets'];

const errors = [];
let checked = 0;

const files = fs.existsSync(THUMBNAIL_BLOCK_DIR)
  ? fs.readdirSync(THUMBNAIL_BLOCK_DIR).filter(f => f.endsWith('.tsx'))
  : [];

for (const file of files) {
  const full = path.join(THUMBNAIL_BLOCK_DIR, file);
  const source = fs.readFileSync(full, 'utf-8');

  // Only the examples that actually render an image-backed Thumbnail drive the
  // useImageMode sampling path; skip examples with no image src.
  if (!source.includes('src=') && !source.includes('src:')) continue;
  checked++;

  for (const host of CROSS_ORIGIN_MEDIA) {
    if (source.includes(host)) {
      errors.push({
        file,
        issue: `references cross-origin ${host} media — useImageMode cannot CORS-sample it for the remove-button overlay`,
      });
    }
  }
}

if (errors.length > 0) {
  console.error('❌ Thumbnail demo-media errors:\n');
  for (const {file, issue} of errors) {
    console.error(`  ${file}: ${issue}`);
  }
  console.error(
    `\n${errors.length} error(s). Fix: use a same-origin, samplable data: URI for image-backed Thumbnail examples.`,
  );
  process.exit(1);
}

console.log(
  `✅ ${checked} image-backed Thumbnail example(s) checked — all use CORS-safe demo media.`,
);
