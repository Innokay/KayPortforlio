import { describe, test, expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';

describe('HomePage Component', () => {
  test('renders heading with developer name', () => {
    render(<HomePage />);
    const headingElement = screen.getByText(/Khaemba Innocent Wanjala/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('renders subtitle text', () => {
    render(<HomePage />);
    const subtitleElement = screen.getByText(/Crafting elegant solutions with code/i);
    expect(subtitleElement).toBeInTheDocument();
  });

  test('renders View My Projects button', () => {
    render(<HomePage />);
    const buttonElement = screen.getByRole('button', { name: /View My Projects/i });
    expect(buttonElement).toBeInTheDocument();
  });
});
