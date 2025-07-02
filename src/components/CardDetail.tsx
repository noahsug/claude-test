import type { Card } from '@/types';
import { CardArtwork } from './CardArtwork';

interface CardDetailProps {
  card: Card;
  onClose: () => void;
}

export function CardDetail({ card, onClose }: CardDetailProps) {
  return (
    <div 
      data-testid="card-detail"
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <div 
        className="bg-white/10 backdrop-blur-md rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <button
            data-testid="close-button"
            onClick={onClose}
            className="float-right text-white/70 hover:text-white text-2xl font-bold leading-none"
          >
            ×
          </button>
          
          <div className="clear-both">
            <div className="aspect-[3/4] rounded-lg mb-4 overflow-hidden">
              <CardArtwork card={card} className="w-full h-full" />
            </div>
            
            <div className="text-white space-y-4">
              <div className="flex justify-between items-start">
                <h2 data-testid="card-name" className="text-2xl font-bold">{card.name}</h2>
                <span data-testid="card-cost" className="bg-yellow-500 text-black text-lg font-bold px-3 py-1 rounded-full">
                  {card.cost}
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className={`text-sm font-semibold px-3 py-1 rounded-full ${
                  card.rarity === 'legendary' ? 'bg-orange-500 text-white' :
                  card.rarity === 'epic' ? 'bg-purple-500 text-white' :
                  card.rarity === 'rare' ? 'bg-blue-500 text-white' :
                  card.rarity === 'uncommon' ? 'bg-green-500 text-white' :
                  'bg-gray-500 text-white'
                }`}>
                  {card.rarity.toUpperCase()}
                </span>
                <span className="text-white/70 capitalize">{card.type}</span>
              </div>
              
              {card.attack !== undefined && card.defense !== undefined && (
                <div className="flex gap-4 text-lg">
                  <div className="flex items-center gap-2">
                    <span className="text-red-400">⚔</span>
                    <span>Attack: {card.attack}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-400">🛡</span>
                    <span>Defense: {card.defense}</span>
                  </div>
                </div>
              )}
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Description</h3>
                <p data-testid="card-description" className="text-white/90 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}