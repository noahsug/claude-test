import type { Card as CardType } from '@/types';
import { Card } from './Card';

interface CardGridProps {
  cards: CardType[];
  onCardClick: (cardId: string) => void;
  className?: string;
}

export function CardGrid({ cards, onCardClick, className = '' }: CardGridProps) {
  return (
    <div className={`container mx-auto px-6 sm:px-8 lg:px-12 pb-16 ${className}`}>
      <div className="flex flex-wrap gap-4 sm:gap-4 lg:gap-6 justify-center">
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            onClick={onCardClick}
            className="w-[200px] sm:w-[220px] md:w-[240px] flex-shrink-0 aspect-[5/7]"
          />
        ))}
      </div>
    </div>
  );
}