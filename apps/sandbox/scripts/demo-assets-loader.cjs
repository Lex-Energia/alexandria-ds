// Copyright (c) Meta Platforms, Inc. and affiliates.

/**
 * @file Webpack loader that swaps template demo-image marker URLs for the
 * inline placeholder, so the sandbox previews never request them.
 *
 * @input Template source (packages/cli/templates/**.tsx).
 * @output The same source with demo image URLs replaced by a data URI.
 * @position Sandbox build — wired in next.config.mjs. Uses the same helper the
 *   CLI applies when it scaffolds a template (api/template/demo-assets.mjs).
 */

const path = require('node:path');
const {pathToFileURL} = require('node:url');

const HELPER = path.resolve(
  __dirname,
  '../../../packages/cli/api/template/demo-assets.mjs',
);

module.exports = function demoAssetsLoader(source) {
  const callback = this.async();
  import(pathToFileURL(HELPER).href)
    .then(({stripTemplateAssetRefs}) =>
      callback(null, stripTemplateAssetRefs(source)),
    )
    .catch(callback);
};
