import type { Card as CardType } from '@/types';
import { memo } from 'preact/compat';
import legendaryBorder from '@/assets/images/ui/legendary-border.png';
import epicBorder from '@/assets/images/ui/epic-border.png';
import rareBorder from '@/assets/images/ui/rare-border.png';
import costIconBg from '@/assets/images/icons/cost-icon-bg.png';
import attackIconBg from '@/assets/images/icons/attack-icon-bg.png';
import defenseIconBg from '@/assets/images/icons/defense-icon-bg.png';

interface CardProps {
  card: CardType;
  onClick: (cardId: string) => void;
  className?: string;
}

function CardComponent({ card, onClick, className = '' }: CardProps) {
  const getBorderImage = () => {
    switch (card.rarity) {
      case 'legendary':
        return legendaryBorder;
      case 'epic':
        return epicBorder;
      case 'rare':
        return rareBorder;
      default:
        return null;
    }
  };

  const borderImage = getBorderImage();

  return (
    <div
      data-testid="card"
      data-card-id={card.id}
      onClick={() => onClick(card.id)}
      className={`
        bg-gradient-to-br from-white/20 to-white/5 
        backdrop-blur-md 
        border-2 border-white/30 
        rounded-xl 
        p-4 
        shadow-xl shadow-black/20
        hover:shadow-2xl hover:shadow-black/30
        hover:border-white/50
        hover:from-white/30 hover:to-white/10
        transition-all duration-300 ease-out
        cursor-pointer 
        transform hover:scale-105 hover:-translate-y-1
        relative
        ${className}
      `}
    >
      {/* Rarity border effect overlay */}
      {borderImage && (
        <div 
          className="absolute inset-0 pointer-events-none opacity-60 rounded-xl"
          style={{
            backgroundImage: `url(${borderImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
      )}
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
          <span 
            className="relative bg-gradient-to-r from-yellow-400 to-amber-500 text-black text-sm font-bold px-3 py-1 rounded-full ml-2 shadow-lg border border-yellow-300 hover:from-yellow-300 hover:to-amber-400 transition-all duration-200"
            style={{
              backgroundImage: `url(${costIconBg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <span className="relative z-10">{card.cost}</span>
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
              <span 
                className="relative bg-red-500/20 border border-red-400 text-red-300 px-2 py-1 rounded-md font-bold"
                style={{
                  backgroundImage: `url(${attackIconBg})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <span className="relative z-10">{card.attack}⚔</span>
              </span>
              <span 
                className="relative bg-blue-500/20 border border-blue-400 text-blue-300 px-2 py-1 rounded-md font-bold"
                style={{
                  backgroundImage: `url(${defenseIconBg})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <span className="relative z-10">{card.defense}🛡</span>
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