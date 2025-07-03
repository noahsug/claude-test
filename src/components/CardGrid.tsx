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
      <div className="flex flex-wrap gap-8 sm:gap-10 lg:gap-12 justify-center">
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            onClick={onCardClick}
            className="w-[250px] sm:w-[230px] md:w-[210px] flex-shrink-0"
          />
        ))}
      </div>
    </div>
  );
}