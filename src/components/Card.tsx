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
        return 'border-4 border-orange-400 shadow-[0_0_25px_rgba(251,146,60,0.8)] bg-gradient-to-br from-orange-500/20 via-red-500/10 to-pink-500/20';
      case 'epic':
        return 'border-4 border-purple-400 shadow-[0_0_25px_rgba(168,85,247,0.8)] bg-gradient-to-br from-purple-500/20 via-indigo-500/10 to-purple-500/20';
      case 'rare':
        return 'border-4 border-blue-400 shadow-[0_0_25px_rgba(59,130,246,0.8)] bg-gradient-to-br from-blue-500/20 via-cyan-500/10 to-blue-500/20';
      case 'uncommon':
        return 'border-4 border-green-400 shadow-[0_0_25px_rgba(34,197,94,0.8)] bg-gradient-to-br from-green-500/20 via-emerald-500/10 to-green-500/20';
      default:
        return 'border-4 border-slate-400 shadow-[0_0_20px_rgba(148,163,184,0.6)] bg-gradient-to-br from-slate-500/20 via-slate-600/10 to-slate-500/20';
    }
  };

  const getResponsiveTitleSize = (text: string) => {
    const length = text.length;
    if (length <= 10) return 'text-lg';
    if (length <= 15) return 'text-base';
    if (length <= 20) return 'text-sm';
    return 'text-xs';
  };

  const getResponsiveDescriptionSize = (text: string) => {
    const length = text.length;
    if (length <= 50) return 'text-sm';
    if (length <= 80) return 'text-xs';
    return 'text-[10px]';
  };

  const getRarityClassName = () => {
    switch (card.rarity) {
      case 'legendary':
        return 'rarity-legendary';
      case 'epic':
        return 'rarity-epic';
      case 'rare':
        return 'rarity-rare';
      case 'uncommon':
        return 'rarity-uncommon';
      default:
        return 'rarity-common';
    }
  };

  return (
    <div
      data-testid="card"
      data-card-id={card.id}
      onClick={() => onClick(card.id)}
      className={`
        group
        backdrop-blur-md
        rounded-2xl
        pt-0 px-0 pb-1
        transition-all duration-300 ease-out
        cursor-pointer
        transform hover:scale-[1.08] hover:-translate-y-2
        relative
        ${getRarityBorderStyles()}
        ${className}
      `}
      style={{
        filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))',
      }}
    >
      <div className="relative z-10 flex flex-col h-full">
        <div className="aspect-[5/3.5] rounded-xl rounded-b-none overflow-hidden bg-gradient-to-br from-slate-700 to-slate-900 shadow-inner">
          <img
            src={card.imageUrl}
            alt={card.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className="text-white px-2 flex flex-col flex-1 mt-1 relative">
          <span className="cost-gem text-black text-xs font-pixel font-bold px-2 py-1 rounded cursor-pointer absolute top-0 right-2 z-20">
            {card.cost}
          </span>
          <div className="mb-1">
            <h3
              className={`font-pixel ${getResponsiveTitleSize(card.name)} text-white leading-tight max-w-[calc(100%-50px)]`}
            >
              {card.name}
            </h3>
          </div>
          <p
            className={`text-white/90 ${getResponsiveDescriptionSize(card.description)} mb-1 leading-snug font-fun flex-1`}
          >
            {card.description}
          </p>
          <div className="flex justify-between items-end mt-auto">
            <span
              className={`font-pixel text-xs font-bold px-1 py-0 rounded uppercase tracking-wide text-white ml-1 ${getRarityClassName()}`}
            >
              {card.rarity}
            </span>
            {card.attack !== undefined && card.defense !== undefined && (
              <span className="bg-gray-800 border border-gray-600 text-white px-1 py-0.5 rounded text-xs font-pixel font-bold flex-shrink-0">
                {card.attack}⚔{card.defense}🛡
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Memoize the component to prevent unnecessary re-renders
export const Card = memo(CardComponent);
