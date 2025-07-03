import type { Card as CardType } from '@/types';
import { memo } from 'preact/compat';

interface CardProps {
  card: CardType;
  onClick: (cardId: string) => void;
  className?: string;
}

function CardComponent({ card, onClick, className = '' }: CardProps) {
  const getRarityBorderStyles = () => {
    switch (card.rarity) {
      case 'legendary':
        return 'border-orange-400 shadow-orange-500/50 hover:shadow-orange-500/70 bg-gradient-to-br from-orange-500/10 via-red-500/5 to-pink-500/10';
      case 'epic':
        return 'border-purple-400 shadow-purple-500/50 hover:shadow-purple-500/70 bg-gradient-to-br from-purple-500/10 via-indigo-500/5 to-purple-500/10';
      case 'rare':
        return 'border-blue-400 shadow-blue-500/50 hover:shadow-blue-500/70 bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-blue-500/10';
      case 'uncommon':
        return 'border-green-400 shadow-green-500/50 hover:shadow-green-500/70 bg-gradient-to-br from-green-500/10 via-emerald-500/5 to-green-500/10';
      default:
        return 'border-white/30 shadow-black/20 hover:shadow-black/30 bg-gradient-to-br from-white/20 to-white/5';
    }
  };

  return (
    <div
      data-testid="card"
      data-card-id={card.id}
      onClick={() => onClick(card.id)}
      className={`
        backdrop-blur-md 
        border-2 
        rounded-xl 
        p-4 
        shadow-xl
        hover:shadow-2xl
        hover:border-white/50
        hover:from-white/30 hover:to-white/10
        transition-all duration-300 ease-out
        cursor-pointer 
        transform hover:scale-105 hover:-translate-y-1
        relative
        ${getRarityBorderStyles()}
        ${className}
      `}
    >
      <div className="relative z-10">
        <div className="aspect-[3/4] rounded-lg mb-3 overflow-hidden border-2 border-white/20 bg-gradient-to-br from-slate-700 to-slate-900">
          <img 
            src={card.imageUrl} 
            alt={card.name}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
            style={{ imageRendering: 'pixelated' }}
          />
        </div>
        <div className="text-white">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg truncate">{card.name}</h3>
          <span className="bg-gradient-to-r from-yellow-400 to-amber-500 text-black text-sm font-bold px-3 py-1 rounded-full ml-2 shadow-lg border border-yellow-300 hover:from-yellow-300 hover:to-amber-400 transition-all duration-200">
            {card.cost}
          </span>
        </div>
        <p className="text-white/80 text-sm mb-2 line-clamp-2">
          {card.description}
        </p>
        <div className="flex justify-between items-center">
          <span className={`text-xs font-bold px-3 py-1 rounded-full border-2 shadow-lg uppercase tracking-wide transition-all duration-200 hover:scale-105 ${
            card.rarity === 'legendary' ? 'bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 text-white border-orange-300 shadow-orange-500/50' :
            card.rarity === 'epic' ? 'bg-gradient-to-r from-purple-400 to-indigo-500 text-white border-purple-300 shadow-purple-500/50' :
            card.rarity === 'rare' ? 'bg-gradient-to-r from-blue-400 to-cyan-500 text-white border-blue-300 shadow-blue-500/50' :
            card.rarity === 'uncommon' ? 'bg-gradient-to-r from-green-400 to-emerald-500 text-white border-green-300 shadow-green-500/50' :
            'bg-gradient-to-r from-gray-400 to-slate-500 text-white border-gray-300 shadow-gray-500/50'
          }`}>
            {card.rarity}
          </span>
          {card.attack !== undefined && card.defense !== undefined && (
            <div className="flex gap-2 text-sm">
              <span className="bg-red-500/20 border border-red-400 text-red-300 px-2 py-1 rounded-md font-bold">
                {card.attack}⚔
              </span>
              <span className="bg-blue-500/20 border border-blue-400 text-blue-300 px-2 py-1 rounded-md font-bold">
                {card.defense}🛡
              </span>
            </div>
          )}
        </div>
        </div>
      </div>
    </div>
  );
}

// Memoize the component to prevent unnecessary re-renders
export const Card = memo(CardComponent);