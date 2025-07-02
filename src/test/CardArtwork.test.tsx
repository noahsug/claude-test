import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/preact';
import { CardArtwork } from '../components/CardArtwork';
import type { Card } from '../types';

const mockCard: Card = {
  id: '1',
  name: 'Electric Toaster',
  description: 'Deal 3 damage to any target.',
  imageUrl: '/test.png',
  cost: 1,
  rarity: 'common',
  type: 'spell',
};

describe('CardArtwork Component', () => {
  it('renders card artwork with proper styling', () => {
    const { container } = render(<CardArtwork card={mockCard} />);
    
    const artworkElement = container.firstElementChild;
    expect(artworkElement).toBeInTheDocument();
    expect(artworkElement).toHaveClass('relative', 'overflow-hidden', 'flex', 'items-center', 'justify-center');
  });

  it('displays the correct emoji for Electric Toaster', () => {
    const { container } = render(<CardArtwork card={mockCard} />);
    
    const emojiElement = container.querySelector('.text-6xl');
    expect(emojiElement).toBeInTheDocument();
    expect(emojiElement).toHaveTextContent('🍞');
  });

  it('shows card type indicator', () => {
    const { container } = render(<CardArtwork card={mockCard} />);
    
    const typeIndicator = container.querySelector('.text-xs');
    expect(typeIndicator).toBeInTheDocument();
    expect(typeIndicator).toHaveTextContent('S'); // First letter of 'spell'
  });

  it('renders decorative border elements', () => {
    const { container } = render(<CardArtwork card={mockCard} />);
    
    const decorativeElements = container.querySelectorAll('.border');
    expect(decorativeElements).toHaveLength(3); // Three corner decorations
  });

  it('applies custom className when provided', () => {
    const customClass = 'custom-test-class';
    const { container } = render(<CardArtwork card={mockCard} className={customClass} />);
    
    const artworkElement = container.firstElementChild;
    expect(artworkElement).toHaveClass(customClass);
  });
});