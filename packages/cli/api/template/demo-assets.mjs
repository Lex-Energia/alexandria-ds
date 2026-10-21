// Copyright (c) Meta Platforms, Inc. and affiliates.

/**
 * @file Demo-image placeholder shared by the CLI scaffold and the preview apps.
 *
 * Template sources reference demo imagery through marker URLs on the Pharos
 * docs host (`https://pharos-ds.vercel.app/assets/<name>`). Nothing is served
 * from there: the CLI swaps every marker for an inline placeholder when it
 * emits a template, and the sandbox and template-viewer apply the same swap at
 * build time, so no page ever requests a marker URL.
 *
 * @input Template source text.
 * @output Source with demo image URLs replaced by a data URI.
 * @position api/template — dependency-free on purpose, so apps/* can import it
 *   directly; re-exported by _adapter.mjs and the template barrel.
 */

/**
 * Inline placeholder swapped in for demo imagery, so scaffolded and previewed
 * pages render with zero setup. Neutral hex colors (not design tokens) so it
 * renders in any project, themed or not. Mirrors
 * apps/docsite/public/template-assets/placeholder.svg.
 */
export const PLACEHOLDER_IMAGE =
  'data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20300%22%20preserveAspectRatio%3D%22xMidYMid%20slice%22%3E%3Crect%20width%3D%22400%22%20height%3D%22300%22%20fill%3D%22%23f5f6f8%22%2F%3E%3Cg%20transform%3D%22translate%28200%20150%29%22%20fill%3D%22none%22%20stroke%3D%22%23c2cad6%22%20stroke-width%3D%225%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Crect%20x%3D%22-44%22%20y%3D%22-44%22%20width%3D%2288%22%20height%3D%2288%22%20rx%3D%2216%22%2F%3E%3Ccircle%20cx%3D%2218%22%20cy%3D%22-18%22%20r%3D%222.5%22%20fill%3D%22%23c2cad6%22%20stroke%3D%22none%22%2F%3E%3Cpath%20d%3D%22M-34%2030%20L-8%200%20L10%2018%20L20%208%20L34%2024%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E';

/**
 * Demo-image sources to strip: the Pharos docs host the templates use as an
 * asset marker, and Meta's lookaside CDN (still used by some external
 * templates). Genuine third-party URLs (e.g. brand logos from
 * paypalobjects.com) are intentionally left untouched.
 *
 * @type {RegExp[]}
 */
export const DEMO_IMAGE_PATTERNS = [
  /https?:\/\/pharos-ds\.vercel\.app\/assets\/[^\s'"`)]+/g,
  /https?:\/\/(?:[\w-]+\.)*lookaside\.facebook\.com\/[^\s'"`)]+/g,
];

/**
 * Replace demo image references with a self-contained placeholder data URI so
 * pages render with zero setup. Builders drop in their own images.
 *
 * @param {string} source - Template source code.
 * @returns {string} Source with demo image references replaced.
 */
export function stripTemplateAssetRefs(source) {
  return DEMO_IMAGE_PATTERNS.reduce(
    (out, pattern) => out.replace(pattern, PLACEHOLDER_IMAGE),
    source,
  );
}
