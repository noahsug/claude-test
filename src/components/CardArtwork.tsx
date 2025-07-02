import type { Card } from '@/types';

interface CardArtworkProps {
  card: Card;
  className?: string;
}

export function CardArtwork({ card, className = '' }: CardArtworkProps) {
  const getArtworkStyle = (card: Card) => {
    switch (card.id) {
      case '1': // Lightning Bolt
        return {
          background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 25%, #d97706 50%, #b91c1c 75%, #7c2d12 100%)',
          content: '⚡',
          color: '#ffffff',
          textShadow: '0 0 20px #fbbf24, 0 0 40px #f59e0b',
        };
      case '2': // Forest Guardian
        return {
          background: 'linear-gradient(135deg, #065f46 0%, #047857 25%, #10b981 50%, #34d399 75%, #6ee7b7 100%)',
          content: '🌲',
          color: '#ffffff',
          textShadow: '0 0 20px #10b981',
        };
      case '3': // Crystal Sword
        return {
          background: 'linear-gradient(135deg, #1e1b4b 0%, #3730a3 25%, #6366f1 50%, #a5b4fc 75%, #e0e7ff 100%)',
          content: '⚔️',
          color: '#ffffff',
          textShadow: '0 0 20px #6366f1',
        };
      case '4': // Dragon Lord
        return {
          background: 'linear-gradient(135deg, #7f1d1d 0%, #dc2626 25%, #ef4444 50%, #fca5a5 75%, #fed7d7 100%)',
          content: '🐉',
          color: '#ffffff',
          textShadow: '0 0 20px #dc2626, 0 0 40px #ef4444',
        };
      default:
        return {
          background: 'linear-gradient(135deg, #374151 0%, #6b7280 50%, #9ca3af 100%)',
          content: '🎴',
          color: '#ffffff',
          textShadow: '0 0 10px #374151',
        };
    }
  };

  const style = getArtworkStyle(card);

  return (
    <div 
      className={`relative overflow-hidden flex items-center justify-center ${className}`}
      style={{ background: style.background }}
    >
      <div className="absolute inset-0 bg-black/10"></div>
      <div 
        className="text-6xl z-10 relative"
        style={{ 
          color: style.color, 
          textShadow: style.textShadow,
          filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))'
        }}
      >
        {style.content}
      </div>
      <div className="absolute bottom-2 right-2 text-xs text-white/60 font-mono">
        {card.type.charAt(0).toUpperCase()}
      </div>
      {/* Decorative elements */}
      <div className="absolute top-2 left-2 w-3 h-3 border border-white/30 rotate-45"></div>
      <div className="absolute top-2 right-2 w-3 h-3 border border-white/30 rotate-45"></div>
      <div className="absolute bottom-2 left-2 w-3 h-3 border border-white/30 rotate-45"></div>
    </div>
  );
}