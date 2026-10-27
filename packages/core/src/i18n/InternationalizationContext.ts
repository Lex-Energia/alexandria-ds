// Copyright (c) Meta Platforms, Inc. and affiliates.

'use client';

/**
 * @file InternationalizationContext.ts
 * @input React createContext, i18n types
 * @output Exports InternationalizationContext and InternationalizationContextValue
 * @position Context definition for client-side locale + messages
 *
 * Separated from InternationalizationProvider.tsx so components can consume
 * the context without pulling in the full provider implementation.
 * Follows the LinkContext.ts / ThemeContext.ts pattern.
 *
 * SYNC: When modified, update these files to stay in sync:
 * - /packages/core/src/i18n/InternationalizationProvider.tsx
 * - /packages/core/src/i18n/t.client.ts
 * - /packages/core/src/i18n/useDirection.ts
 * - /packages/core/src/i18n/getLocaleDirection.ts
 * - /packages/core/src/i18n/index.ts
 */

import {createContext} from 'react';
import type {Locale, MessagesByLocale, Overrides} from './types';

export interface InternationalizationContextValue {
  locale: Locale;
  direction: 'ltr' | 'rtl';
  messages: MessagesByLocale;
  overrides?: Overrides;
  /**
   * True when an InternationalizationProvider supplied this value. Lets
   * formatters tell an explicit locale apart from the `en` fallback, so
   * consumers without a provider keep the runtime's default locale.
   */
  isProvided?: boolean;
}

/**
 * Default value falls through to the shipped en catalog in resolve().
 * A consumer that doesn't render a provider still gets English defaults.
 */
export const InternationalizationContext =
  createContext<InternationalizationContextValue>({
    locale: 'en',
    direction: 'ltr',
    messages: {},
  });
InternationalizationContext.displayName = 'InternationalizationContext';
