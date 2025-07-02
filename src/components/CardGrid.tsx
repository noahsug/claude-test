import type { Card } from '@/types';
import { CardArtwork } from './CardArtwork';

interface CardGridProps {
  cards: Card[];
  onCardClick: (cardId: string) => void;
}

export function CardGrid({ cards, onCardClick }: CardGridProps) {
  return (
    <div className="max-w-6xl mx-auto px-4 pb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cards.map((card) => (
          <div
            key={card.id}
            onClick={() => onCardClick(card.id)}
            className="bg-white/10 backdrop-blur-sm rounded-lg p-4 shadow-lg hover:shadow-xl hover:bg-white/15 transition-all duration-200 cursor-pointer transform hover:scale-105"
          >
            <div className="aspect-[3/4] rounded-lg mb-3 overflow-hidden">
              <CardArtwork card={card} className="w-full h-full" />
            </div>
            <div className="text-white">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg truncate">{card.name}</h3>
                <span className="bg-yellow-500 text-black text-sm font-bold px-2 py-1 rounded-full ml-2">
                  {card.cost}
                </span>
              </div>
              <p className="text-white/80 text-sm mb-2 line-clamp-2">
                {card.description}
              </p>
              <div className="flex justify-between items-center">
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                  card.rarity === 'legendary' ? 'bg-orange-500 text-white' :
                  card.rarity === 'epic' ? 'bg-purple-500 text-white' :
                  card.rarity === 'rare' ? 'bg-blue-500 text-white' :
                  card.rarity === 'uncommon' ? 'bg-green-500 text-white' :
                  'bg-gray-500 text-white'
                }`}>
                  {card.rarity}
                </span>
                {card.attack !== undefined && card.defense !== undefined && (
                  <div className="flex gap-2 text-sm">
                    <span className="text-red-400">{card.attack}⚔</span>
                    <span className="text-blue-400">{card.defense}🛡</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}