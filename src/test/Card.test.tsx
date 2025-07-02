import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/preact';
import { Card } from '../components/Card';
import type { Card as CardType } from '../types';

const mockSpellCard: CardType = {
  id: '1',
  name: 'Electric Toaster',
  description: 'Deal 3 damage to any target. Perfect for breakfast battles.',
  imageUrl: '/test1.png',
  cost: 1,
  rarity: 'common',
  type: 'spell',
};

const mockCreatureCard: CardType = {
  id: '2',
  name: 'Mighty Banana',
  description: 'A potassium-powered protector of the fruit bowl.',
  imageUrl: '/test2.png',
  cost: 4,
  attack: 4,
  defense: 5,
  rarity: 'rare',
  type: 'creature',
};

const mockLegendaryCard: CardType = {
  id: '4',
  name: 'Dish Sponge Lord',
  description: 'Absorb all damage. When Dish Sponge Lord enters, clean up 2 enemy creatures.',
  imageUrl: '/test4.png',
  cost: 8,
  attack: 8,
  defense: 8,
  rarity: 'legendary',
  type: 'creature',
};

describe('Card Component', () => {
  const mockOnClick = vi.fn();

  beforeEach(() => {
    mockOnClick.mockClear();
  });

  describe('Basic Rendering', () => {
    it('renders card with basic information', () => {
      render(<Card card={mockSpellCard} onClick={mockOnClick} />);
      
      expect(screen.getByText('Electric Toaster')).toBeInTheDocument();
      expect(screen.getByText('Deal 3 damage to any target. Perfect for breakfast battles.')).toBeInTheDocument();
      expect(screen.getByText('1')).toBeInTheDocument(); // cost
      expect(screen.getByText('common')).toBeInTheDocument(); // rarity
    });

    it('renders with proper data attributes', () => {
      render(<Card card={mockSpellCard} onClick={mockOnClick} />);
      
      const cardElement = screen.getByTestId('card');
      expect(cardElement).toBeInTheDocument();
      expect(cardElement).toHaveAttribute('data-card-id', '1');
    });

    it('applies custom className when provided', () => {
      const customClass = 'custom-test-class';
      render(<Card card={mockSpellCard} onClick={mockOnClick} className={customClass} />);
      
      const cardElement = screen.getByTestId('card');
      expect(cardElement).toHaveClass(customClass);
    });
  });

  describe('Card Types and Stats', () => {
    it('displays attack and defense for creature cards', () => {
      render(<Card card={mockCreatureCard} onClick={mockOnClick} />);
      
      expect(screen.getByText('4⚔')).toBeInTheDocument(); // attack
      expect(screen.getByText('5🛡')).toBeInTheDocument(); // defense
    });

    it('does not display attack and defense for spell cards', () => {
      render(<Card card={mockSpellCard} onClick={mockOnClick} />);
      
      expect(screen.queryByText('⚔')).not.toBeInTheDocument();
      expect(screen.queryByText('🛡')).not.toBeInTheDocument();
    });
  });

  describe('Rarity Styling', () => {
    it('applies correct styling for common rarity', () => {
      render(<Card card={mockSpellCard} onClick={mockOnClick} />);
      
      const rarityElement = screen.getByText('common');
      expect(rarityElement).toHaveClass('bg-gray-500', 'text-white');
    });

    it('applies correct styling for rare rarity', () => {
      render(<Card card={mockCreatureCard} onClick={mockOnClick} />);
      
      const rarityElement = screen.getByText('rare');
      expect(rarityElement).toHaveClass('bg-blue-500', 'text-white');
    });

    it('applies correct styling for legendary rarity', () => {
      render(<Card card={mockLegendaryCard} onClick={mockOnClick} />);
      
      const rarityElement = screen.getByText('legendary');
      expect(rarityElement).toHaveClass('bg-orange-500', 'text-white');
    });
  });

  describe('Interactions', () => {
    it('calls onClick with card id when clicked', () => {
      render(<Card card={mockSpellCard} onClick={mockOnClick} />);
      
      const cardElement = screen.getByTestId('card');
      fireEvent.click(cardElement);
      
      expect(mockOnClick).toHaveBeenCalledWith('1');
      expect(mockOnClick).toHaveBeenCalledTimes(1);
    });

    it('has cursor pointer styling for clickable interaction', () => {
      render(<Card card={mockSpellCard} onClick={mockOnClick} />);
      
      const cardElement = screen.getByTestId('card');
      expect(cardElement).toHaveClass('cursor-pointer');
    });
  });

  describe('Visual Styling', () => {
    it('has proper hover effects classes', () => {
      render(<Card card={mockSpellCard} onClick={mockOnClick} />);
      
      const cardElement = screen.getByTestId('card');
      expect(cardElement).toHaveClass(
        'hover:shadow-xl',
        'hover:bg-white/15',
        'transition-all',
        'duration-200',
        'transform',
        'hover:scale-105'
      );
    });

    it('has proper background and styling classes', () => {
      render(<Card card={mockSpellCard} onClick={mockOnClick} />);
      
      const cardElement = screen.getByTestId('card');
      expect(cardElement).toHaveClass(
        'bg-white/10',
        'backdrop-blur-sm',
        'rounded-lg',
        'p-4',
        'shadow-lg'
      );
    });
  });

  describe('Card Content Layout', () => {
    it('renders card artwork with proper aspect ratio', () => {
      render(<Card card={mockSpellCard} onClick={mockOnClick} />);
      
      const artworkContainer = screen.getByTestId('card').querySelector('.aspect-\\[3\\/4\\]');
      expect(artworkContainer).toBeInTheDocument();
      expect(artworkContainer).toHaveClass('rounded-lg', 'mb-3', 'overflow-hidden');
    });

    it('truncates long card names', () => {
      render(<Card card={mockSpellCard} onClick={mockOnClick} />);
      
      const nameElement = screen.getByText('Electric Toaster');
      expect(nameElement).toHaveClass('truncate');
    });

    it('limits description to 2 lines', () => {
      render(<Card card={mockSpellCard} onClick={mockOnClick} />);
      
      const descriptionElement = screen.getByText(/Deal 3 damage to any target/);
      expect(descriptionElement).toHaveClass('line-clamp-2');
    });
  });

  describe('Cost Display', () => {
    it('displays cost with proper styling', () => {
      render(<Card card={mockCreatureCard} onClick={mockOnClick} />);
      
      const costElement = screen.getByText('4');
      expect(costElement).toHaveClass(
        'bg-yellow-500',
        'text-black',
        'text-sm',
        'font-bold',
        'px-2',
        'py-1',
        'rounded-full'
      );
    });
  });
});