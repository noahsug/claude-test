import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/preact';
import { Header } from '../components/Header';

describe('Header Component', () => {
  it('renders the app title correctly', () => {
    render(<Header />);
    
    const title = screen.getByRole('heading', { level: 1 });
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent('Trading Card Display');
  });

  it('renders the subtitle', () => {
    render(<Header />);
    
    const subtitle = screen.getByText('Discover your collection of mystical cards');
    expect(subtitle).toBeInTheDocument();
  });
});