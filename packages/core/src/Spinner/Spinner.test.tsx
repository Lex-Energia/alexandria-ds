// Copyright (c) Meta Platforms, Inc. and affiliates.

/**
 * @file Spinner.test.tsx
 * @input Uses vitest, @testing-library/react, Spinner component
 * @output Unit tests for Spinner component behavior
 * @position Testing; validates Spinner.tsx implementation
 *
 * SYNC: When Spinner.tsx changes, update tests to match new behavior
 */

import {describe, it, expect} from 'vitest';
import {render, screen} from '@testing-library/react';
import {Spinner} from './Spinner';

describe('Spinner', () => {
  it('renders with default props', () => {
    render(<Spinner data-testid="spinner" />);
    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });

  it('renders with size sm', () => {
    render(<Spinner size="sm" data-testid="spinner" />);
    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });

  it('renders with size md', () => {
    render(<Spinner size="md" data-testid="spinner" />);
    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });

  it('renders with size lg', () => {
    render(<Spinner size="lg" data-testid="spinner" />);
    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });

  it('renders with shade default', () => {
    render(<Spinner shade="default" data-testid="spinner" />);
    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });

  it('renders with shade onMedia', () => {
    render(<Spinner shade="onMedia" data-testid="spinner" />);
    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });

  it('renders with shade inherit', () => {
    render(<Spinner shade="inherit" data-testid="spinner" />);
    const spinner = screen.getByTestId('spinner');
    expect(spinner).toBeInTheDocument();
    expect(spinner).toHaveAttribute('data-shade', 'inherit');
  });

  it('draws the Alexandria "A" instead of a canvas ring', () => {
    render(<Spinner data-testid="s" />);
    const spinner = screen.getByTestId('s');
    expect(spinner.querySelector('canvas')).toBeNull();
    expect(spinner.querySelector('svg path')).toBeInTheDocument();
    expect(spinner.querySelector('svg')).toHaveAttribute('aria-hidden', 'true');
  });

  it('keeps the box of the ring spinner for each size', () => {
    const {rerender} = render(<Spinner size="sm" data-testid="s" />);
    // diameter + 2 * border: sm 14, md 20, lg 24, xl 36
    expect(screen.getByTestId('s')).toHaveStyle({
      width: '14px',
      height: '14px',
    });
    rerender(<Spinner size="md" data-testid="s" />);
    expect(screen.getByTestId('s')).toHaveStyle({
      width: '20px',
      height: '20px',
    });
    rerender(<Spinner size="lg" data-testid="s" />);
    expect(screen.getByTestId('s')).toHaveStyle({
      width: '24px',
      height: '24px',
    });
    rerender(<Spinner size="xl" data-testid="s" />);
    expect(screen.getByTestId('s')).toHaveStyle({
      width: '36px',
      height: '36px',
    });
  });

  it('uses the brand gradient on the default shade and currentColor otherwise', () => {
    const {rerender} = render(<Spinner data-testid="s" />);
    const path = () =>
      screen.getByTestId('s').querySelector('path') as SVGPathElement;
    expect(path().getAttribute('fill')).toMatch(/^url\(#pharos-spinner-/);
    expect(screen.getByTestId('s').querySelectorAll('stop')).toHaveLength(5);
    rerender(<Spinner shade="inherit" data-testid="s" />);
    expect(path().getAttribute('fill')).toBe('currentColor');
    expect(screen.getByTestId('s').querySelector('linearGradient')).toBeNull();
  });

  it('draws the brand shade in one color, with no gradient', () => {
    render(<Spinner shade="brand" data-testid="s" />);
    const root = screen.getByTestId('s');
    expect(root).toHaveAttribute('data-shade', 'brand');
    expect(root.querySelector('path')?.getAttribute('fill')).toBe(
      'currentColor',
    );
    expect(root.querySelector('linearGradient')).toBeNull();
  });

  it('has role="status"', () => {
    render(<Spinner data-testid="spinner" />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('has aria-label="Loading" by default', () => {
    render(<Spinner data-testid="spinner" />);
    expect(screen.getByTestId('spinner')).toHaveAttribute(
      'aria-label',
      'Loading',
    );
  });

  it('names the status element from the visible string label', () => {
    render(<Spinner label="Fetching data" data-testid="spinner" />);
    expect(screen.getByRole('status')).toHaveAccessibleName('Fetching data');
  });

  it('does not duplicate a visible string label as aria-label', () => {
    render(<Spinner label="Fetching data" data-testid="spinner" />);
    const status = screen.getByRole('status');
    expect(status).not.toHaveAttribute('aria-label');
    expect(status).toHaveAttribute('aria-labelledby');
  });

  it('uses explicit aria-label over string label', () => {
    render(
      <Spinner
        label="Loading..."
        aria-label="Please wait"
        data-testid="spinner"
      />,
    );
    expect(screen.getByRole('status')).toHaveAttribute(
      'aria-label',
      'Please wait',
    );
  });

  it('renders label content below the spinner', () => {
    render(<Spinner label="Loading..." data-testid="spinner" />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders ReactNode label', () => {
    render(
      <Spinner
        label={<span data-testid="custom-label">Custom content</span>}
        aria-label="Loading"
        data-testid="spinner"
      />,
    );
    expect(screen.getByTestId('custom-label')).toBeInTheDocument();
  });

  it('defaults aria-label to "Loading" for ReactNode label without explicit aria-label', () => {
    render(<Spinner label={<span>Rich content</span>} data-testid="spinner" />);
    expect(screen.getByRole('status')).toHaveAttribute('aria-label', 'Loading');
  });

  it('accepts data-testid', () => {
    render(<Spinner data-testid="my-spinner" />);
    expect(screen.getByTestId('my-spinner')).toBeInTheDocument();
  });

  it('renders as an inline element (span)', () => {
    render(<Spinner data-testid="spinner" />);
    const spinner = screen.getByTestId('spinner');
    expect(spinner.tagName.toLowerCase()).toBe('span');
  });
});
