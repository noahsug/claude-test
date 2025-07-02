import type { Card as CardType } from '@/types';
import { Card } from './Card';

interface CardGridProps {
  cards: CardType[];
  onCardClick: (cardId: string) => void;
  className?: string;
}

export function CardGrid({ cards, onCardClick, className = '' }: CardGridProps) {
  return (
    <div className={`max-w-6xl mx-auto px-4 pb-8 ${className}`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            onClick={onCardClick}
          />
        ))}
      </div>
    </div>
  );
}