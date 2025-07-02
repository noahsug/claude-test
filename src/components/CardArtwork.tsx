import type { Card } from '@/types';

interface CardArtworkProps {
  card: Card;
  className?: string;
}

export function CardArtwork({ card, className = '' }: CardArtworkProps) {
  const getArtworkStyle = (card: Card) => {
    switch (card.id) {
      case '1': // Electric Toaster
        return {
          background: 'linear-gradient(135deg, #c0c0c0 0%, #ffd700 25%, #ff8c00 50%, #ff4500 75%, #8b4513 100%)',
          content: '🍞',
          color: '#ffffff',
          textShadow: '0 0 20px #ffd700, 0 0 40px #ff8c00',
        };
      case '2': // Mighty Banana
        return {
          background: 'linear-gradient(135deg, #228B22 0%, #32CD32 25%, #FFFF00 50%, #FFD700 75%, #FFA500 100%)',
          content: '🍌',
          color: '#ffffff',
          textShadow: '0 0 20px #FFFF00',
        };
      case '3': // Power Cord
        return {
          background: 'linear-gradient(135deg, #2F2F2F 0%, #696969 25%, #A9A9A9 50%, #D3D3D3 75%, #F5F5F5 100%)',
          content: '🔌',
          color: '#ffffff',
          textShadow: '0 0 20px #A9A9A9',
        };
      case '4': // Dish Sponge Lord
        return {
          background: 'linear-gradient(135deg, #0066CC 0%, #3399FF 25%, #FFFF00 50%, #FFD700 75%, #32CD32 100%)',
          content: '🧽',
          color: '#ffffff',
          textShadow: '0 0 20px #3399FF, 0 0 40px #FFFF00',
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