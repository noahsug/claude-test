import type { Card as CardType } from '@/types';
import { Card } from './Card';

interface CardGridProps {
  cards: CardType[];
  onCardClick: (cardId: string) => void;
  className?: string;
}

export function CardGrid({ cards, onCardClick, className = '' }: CardGridProps) {
  return (
    <div className={`container mx-auto px-4 pb-8 ${className}`}>
      <div className="flex flex-wrap gap-4 justify-center">
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            onClick={onCardClick}
            className="w-[200px] flex-shrink-0"
          />
        ))}
      </div>
    </div>
  );
}