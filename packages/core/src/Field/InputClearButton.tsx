// Copyright (c) Meta Platforms, Inc. and affiliates.

'use client';

/**
 * @file InputClearButton.tsx
 * @input Uses React, Button, Icon
 * @output Exports InputClearButton shared clear button for input components
 * @position Shared primitive; used by Typeahead, Tokenizer, TextInput
 */

import type {ReactNode} from 'react';
import * as stylex from '@stylexjs/stylex';
import {Button} from '../Button';
import {spacingVars} from '../theme/tokens.stylex';
import {Icon} from '../Icon';

const styles = stylex.create({
  button: {
    // 24px keeps the target at the WCAG 2.5.8 minimum; callers that need a
    // smaller visual box pass an xstyle.
    height: spacingVars['--spacing-6'],
    minWidth: spacingVars['--spacing-6'],
    flexShrink: 0,
  },
});

export interface InputClearButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  xstyle?: stylex.StyleXStyles;
}

export function InputClearButton({
  label,
  onClick,
  xstyle,
}: InputClearButtonProps): ReactNode {
  return (
    <Button
      variant="ghost"
      size="sm"
      label={label}
      icon={<Icon icon="close" size="sm" color="inherit" />}
      onClick={onClick}
      isIconOnly
      xstyle={[styles.button, xstyle]}
    />
  );
}

InputClearButton.displayName = 'InputClearButton';
