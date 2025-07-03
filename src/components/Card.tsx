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
        return 'border-4 border-orange-400 shadow-[0_0_25px_rgba(251,146,60,0.8)] hover:shadow-[0_0_35px_rgba(251,146,60,1)] bg-gradient-to-br from-orange-500/20 via-red-500/10 to-pink-500/20 hover:from-orange-500/30 hover:to-pink-500/30';
      case 'epic':
        return 'border-4 border-purple-400 shadow-[0_0_25px_rgba(168,85,247,0.8)] hover:shadow-[0_0_35px_rgba(168,85,247,1)] bg-gradient-to-br from-purple-500/20 via-indigo-500/10 to-purple-500/20 hover:from-purple-500/30 hover:to-indigo-500/30';
      case 'rare':
        return 'border-4 border-blue-400 shadow-[0_0_25px_rgba(59,130,246,0.8)] hover:shadow-[0_0_35px_rgba(59,130,246,1)] bg-gradient-to-br from-blue-500/20 via-cyan-500/10 to-blue-500/20 hover:from-blue-500/30 hover:to-cyan-500/30';
      case 'uncommon':
        return 'border-4 border-green-400 shadow-[0_0_25px_rgba(34,197,94,0.8)] hover:shadow-[0_0_35px_rgba(34,197,94,1)] bg-gradient-to-br from-green-500/20 via-emerald-500/10 to-green-500/20 hover:from-green-500/30 hover:to-emerald-500/30';
      default:
        return 'border-4 border-slate-400 shadow-[0_0_20px_rgba(148,163,184,0.6)] hover:shadow-[0_0_30px_rgba(148,163,184,0.8)] bg-gradient-to-br from-slate-500/20 via-slate-600/10 to-slate-500/20 hover:from-slate-500/30 hover:to-slate-600/30';
    }
  };

  return (
    <div
      data-testid="card"
      data-card-id={card.id}
      onClick={() => onClick(card.id)}
      className={`
        backdrop-blur-md 
        rounded-2xl 
        p-4 
        transition-all duration-300 ease-out
        cursor-pointer 
        transform hover:scale-[1.08] hover:-translate-y-2
        relative
        ${getRarityBorderStyles()}
        ${className}
      `}
      style={{
        imageRendering: 'pixelated',
        filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))'
      }}
    >
      <div className="relative z-10">
        <div className="aspect-[3/4] rounded-xl mb-3 overflow-hidden border-4 border-white/40 bg-gradient-to-br from-slate-700 to-slate-900 shadow-inner">
          <img 
            src={card.imageUrl} 
            alt={card.name}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
            style={{ imageRendering: 'pixelated' }}
          />
        </div>
        <div className="text-white">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-pixel text-lg truncate text-white">{card.name}</h3>
          <span className="cost-gem text-black text-sm font-pixel font-bold px-4 py-2 rounded-lg ml-2 cursor-pointer">
            {card.cost}
          </span>
        </div>
        <p className="text-white/90 text-sm mb-2 line-clamp-2">
          {card.description}
        </p>
        <div className="flex justify-between items-center">
          <span className={`btn-pixel font-pixel text-xs font-bold px-4 py-2 rounded-lg uppercase tracking-wide text-white cursor-pointer ${
            card.rarity === 'legendary' ? 'rarity-legendary' :
            card.rarity === 'epic' ? 'rarity-epic' :
            card.rarity === 'rare' ? 'rarity-rare' :
            card.rarity === 'uncommon' ? 'rarity-uncommon' :
            'rarity-common'
          }`}>
            {card.rarity}
          </span>
          {card.attack !== undefined && card.defense !== undefined && (
            <div className="flex gap-3 text-sm">
              <span className="btn-pixel bg-red-500 border-red-700 text-white px-3 py-2 rounded-lg font-pixel font-bold cursor-pointer">
                {card.attack}⚔
              </span>
              <span className="btn-pixel bg-blue-500 border-blue-700 text-white px-3 py-2 rounded-lg font-pixel font-bold cursor-pointer">
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