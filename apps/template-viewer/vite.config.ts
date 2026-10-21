// Copyright (c) Meta Platforms, Inc. and affiliates.

import {defineConfig, type Plugin} from 'vite';
import react from '@vitejs/plugin-react';
import {pharosStylex} from '@pharos-ds/build/vite';

// Template sources point demo images at marker URLs on the docs host, where
// nothing is served. Swap them for the inline placeholder, as the CLI does when
// it scaffolds a template. The helper is plain ESM JS, so load it by URL.
const demoAssetsHelper = new URL(
  '../../packages/cli/api/template/demo-assets.mjs',
  import.meta.url,
).href;

function pharosDemoAssets(): Plugin {
  return {
    name: 'pharos-demo-assets',
    enforce: 'pre',
    async transform(code, id) {
      if (!id.includes('/packages/cli/templates/') || !id.endsWith('.tsx')) {
        return null;
      }
      const {stripTemplateAssetRefs} = await import(
        /* @vite-ignore */ demoAssetsHelper
      );
      return {code: stripTemplateAssetRefs(code), map: null};
    },
  };
}

export default defineConfig({
  plugins: [pharosDemoAssets(), ...pharosStylex(), react()],
  // Templates live outside this app's root (packages/cli/templates).
  server: {fs: {allow: ['../..']}},
});
