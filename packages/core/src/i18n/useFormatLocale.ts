// Copyright (c) Meta Platforms, Inc. and affiliates.

'use client';

/**
 * @file useFormatLocale.ts
 * @input InternationalizationContext (via use())
 * @output Locale string for Intl formatters, or undefined outside a provider
 * @position Client hook for date/number formatting. Without a provider it
 *   returns undefined so `Intl` keeps the runtime's default locale (the
 *   behaviour before locale support); inside one, server and client format
 *   with the same locale and hydration matches.
 *
 * SYNC: When modified, update these files to stay in sync:
 * - /packages/core/src/i18n/InternationalizationContext.ts
 * - /packages/core/src/i18n/index.ts
 */

import {use} from 'react';
import {InternationalizationContext} from './InternationalizationContext';

export function useFormatLocale(): string | undefined {
  const ctx = use(InternationalizationContext);
  return ctx.isProvided ? ctx.locale : undefined;
}
