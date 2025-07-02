import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/preact';
import { CardGrid } from '../components/CardGrid';
import type { Card } from '../types';

const mockCards: Card[] = [
  {
    id: '1',
    name: 'Electric Toaster',
    description: 'Deal 3 damage to any target.',
    imageUrl: '/test1.png',
    cost: 1,
    rarity: 'common',
    type: 'spell',
  },
  {
    id: '2',
    name: 'Mighty Banana',
    description: 'A potassium-powered protector.',
    imageUrl: '/test2.png',
    cost: 4,
    attack: 4,
    defense: 5,
    rarity: 'rare',
    type: 'creature',
  },
  {
    id: '3',
    name: 'Power Cord',
    description: 'Provides the spark needed.',
    imageUrl: '/test3.png',
    cost: 2,
    rarity: 'uncommon',
    type: 'artifact',
  },
];

describe('CardGrid Component', () => {
  const mockOnCardClick = vi.fn();

  beforeEach(() => {
    mockOnCardClick.mockClear();
  });

  describe('Basic Rendering', () => {
    it('renders the grid container with proper styling', () => {
      const { container } = render(<CardGrid cards={mockCards} onCardClick={mockOnCardClick} />);
      
      const gridContainer = container.firstElementChild;
      expect(gridContainer).toBeInTheDocument();
      expect(gridContainer).toHaveClass('container', 'mx-auto', 'px-4', 'pb-8');
    });

    it('renders all provided cards', () => {
      render(<CardGrid cards={mockCards} onCardClick={mockOnCardClick} />);
      
      expect(screen.getByText('Electric Toaster')).toBeInTheDocument();
      expect(screen.getByText('Mighty Banana')).toBeInTheDocument();
      expect(screen.getByText('Power Cord')).toBeInTheDocument();
    });

    it('renders the correct number of cards', () => {
      render(<CardGrid cards={mockCards} onCardClick={mockOnCardClick} />);
      
      const cards = screen.getAllByTestId('card');
      expect(cards).toHaveLength(3);
    });
  });

  describe('Grid Layout', () => {
    it('applies responsive grid classes', () => {
      const { container } = render(<CardGrid cards={mockCards} onCardClick={mockOnCardClick} />);
      
      const gridElement = container.firstElementChild?.firstElementChild;
      expect(gridElement).toHaveClass(
        'grid',
        'grid-cols-2',
        'sm:grid-cols-2',
        'md:grid-cols-3',
        'lg:grid-cols-4',
        'gap-4',
        'w-full'
      );
    });

    it('handles empty cards array', () => {
      render(<CardGrid cards={[]} onCardClick={mockOnCardClick} />);
      
      const cards = screen.queryAllByTestId('card');
      expect(cards).toHaveLength(0);
    });
  });

  describe('Card Interaction', () => {
    it('passes onCardClick to each Card component', () => {
      render(<CardGrid cards={mockCards} onCardClick={mockOnCardClick} />);
      
      const firstCard = screen.getAllByTestId('card')[0];
      firstCard.click();
      
      expect(mockOnCardClick).toHaveBeenCalledWith('1');
    });

    it('each card has unique data attributes', () => {
      render(<CardGrid cards={mockCards} onCardClick={mockOnCardClick} />);
      
      const cards = screen.getAllByTestId('card');
      expect(cards[0]).toHaveAttribute('data-card-id', '1');
      expect(cards[1]).toHaveAttribute('data-card-id', '2');
      expect(cards[2]).toHaveAttribute('data-card-id', '3');
    });
  });

  describe('Custom Styling', () => {
    it('applies custom className when provided', () => {
      const customClass = 'custom-grid-class';
      const { container } = render(<CardGrid cards={mockCards} onCardClick={mockOnCardClick} className={customClass} />);
      
      const gridContainer = container.firstElementChild;
      expect(gridContainer).toHaveClass(customClass);
    });

    it('maintains default classes with custom className', () => {
      const customClass = 'custom-grid-class';
      const { container } = render(<CardGrid cards={mockCards} onCardClick={mockOnCardClick} className={customClass} />);
      
      const gridContainer = container.firstElementChild;
      expect(gridContainer).toHaveClass('container', 'mx-auto', 'px-4', 'pb-8', customClass);
    });
  });

  describe('Performance and Structure', () => {
    it('uses Card component for each card', () => {
      render(<CardGrid cards={mockCards} onCardClick={mockOnCardClick} />);
      
      // Verify that individual card elements are rendered (from Card component)
      expect(screen.getByText('Electric Toaster')).toBeInTheDocument();
      expect(screen.getByText('1')).toBeInTheDocument(); // cost from Card component
      expect(screen.getByText('common')).toBeInTheDocument(); // rarity from Card component
    });

    it('maintains correct component separation', () => {
      const { container } = render(<CardGrid cards={mockCards} onCardClick={mockOnCardClick} />);
      
      // CardGrid should focus on layout, Card components handle individual rendering
      const gridContainer = container.firstElementChild;
      const gridElement = gridContainer?.firstElementChild;
      
      expect(gridElement).toHaveClass('grid');
      expect(screen.getAllByTestId('card')).toHaveLength(3);
    });
  });

  describe('Single Card Rendering', () => {
    it('renders single card correctly', () => {
      const singleCard = [mockCards[0]];
      render(<CardGrid cards={singleCard} onCardClick={mockOnCardClick} />);
      
      const cards = screen.getAllByTestId('card');
      expect(cards).toHaveLength(1);
      expect(screen.getByText('Electric Toaster')).toBeInTheDocument();
    });
  });
});