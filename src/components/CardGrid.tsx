import type { Card as CardType } from '@/types';
import { Card } from './Card';

interface CardGridProps {
  cards: CardType[];
  onCardClick: (cardId: string) => void;
  className?: string;
}

export function CardGrid({ cards, onCardClick, className = '' }: CardGridProps) {
  return (
    <div className={`container mx-auto px-4 sm:px-6 lg:px-8 pb-12 ${className}`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center">
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            onClick={onCardClick}
            className="w-full max-w-[240px] sm:max-w-[200px]"
          />
        ))}
      </div>
    </div>
  );
}