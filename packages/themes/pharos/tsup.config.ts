// Copyright (c) Meta Platforms, Inc. and affiliates.

import {defineConfig} from 'tsup';

const external = ['@pharos-ds/core', 'react', 'lucide-react'];

export default defineConfig([
  {
    entry: ['src/source.ts', 'src/icons.tsx', 'src/brand.ts'],
    format: ['cjs', 'esm'],
    dts: false,
    clean: false, // Don't clean — pharos theme build already put theme files in dist/
    external,
  },
  {
    // The logo reads the theme mode through a hook, so it must stay a client
    // module. esbuild drops module-level directives when bundling, so add it
    // as a banner — on this entry only, so the theme entry stays server-safe.
    entry: ['src/logo.ts'],
    format: ['cjs', 'esm'],
    dts: false,
    clean: false,
    external,
    banner: {js: "'use client';"},
  },
]);
