// Copyright (c) Meta Platforms, Inc. and affiliates.

import React from 'react';
import {describe, expect, it} from 'vitest';
import {renderToStaticMarkup} from 'react-dom/server';
import {Theme} from '@pharos-ds/core/theme';
import {pharosTheme} from './pharosTheme';
import {AlexandriaLogo, type AlexandriaLogoProps} from './AlexandriaLogo';
import {alexandriaLogoSources} from './logos.generated';

function html(mode: 'light' | 'dark', props: AlexandriaLogoProps = {}) {
  return renderToStaticMarkup(
    <Theme theme={pharosTheme} mode={mode}>
      <AlexandriaLogo {...props} />
    </Theme>,
  );
}

// The markup HTML-escapes the data URI, so compare against its escaped form.
const escaped = (src: string) => src.replace(/&/g, '&amp;');

describe('AlexandriaLogo', () => {
  it('uses the gradient logo on light and white on dark', () => {
    expect(html('light')).toContain(
      escaped(alexandriaLogoSources.logo.colorido),
    );
    expect(html('dark')).toContain(escaped(alexandriaLogoSources.logo.white));
  });

  it('uses the transparent "A" on light and the gradient tile on dark', () => {
    expect(html('light', {kind: 'symbol'})).toContain(
      escaped(alexandriaLogoSources.symbol.transparente),
    );
    expect(html('dark', {kind: 'symbol'})).toContain(
      escaped(alexandriaLogoSources.symbol.gradiente),
    );
  });

  it('has the one-color symbol in azul and white', () => {
    expect(html('light', {kind: 'symbol', tone: 'azul'})).toContain(
      escaped(alexandriaLogoSources.symbol.azul),
    );
    expect(html('dark', {kind: 'symbol', tone: 'white'})).toContain(
      escaped(alexandriaLogoSources.symbol.white),
    );
    expect(alexandriaLogoSources.symbol.azul).toContain(
      encodeURIComponent('#034694'),
    );
    expect(alexandriaLogoSources.symbol.white).toContain(
      encodeURIComponent('#FFFFFF'),
    );
  });

  it('honors an explicit symbol background', () => {
    expect(html('dark', {kind: 'symbol', tone: 'branco'})).toContain(
      escaped(alexandriaLogoSources.symbol.branco),
    );
  });

  it('honors an explicit tone and the slogan kind', () => {
    expect(html('dark', {tone: 'azul', kind: 'slogan'})).toContain(
      escaped(alexandriaLogoSources.slogan.azul),
    );
  });
});
