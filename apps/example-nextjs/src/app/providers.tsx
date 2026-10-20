// Copyright (c) Meta Platforms, Inc. and affiliates.

'use client';

import Link from 'next/link';
import {Theme} from '@pharos-ds/core/theme';
import {LinkProvider} from '@pharos-ds/core/Link';
import {pharosTheme} from '@pharos-ds/theme-pharos/built';

export function Providers({children}: {children: React.ReactNode}) {
  return (
    <Theme theme={pharosTheme}>
      <LinkProvider component={Link}>{children}</LinkProvider>
    </Theme>
  );
}
