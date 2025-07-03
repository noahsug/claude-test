import { useState, useEffect } from 'preact/hooks';
import { Header } from './components/Header';
import { CardGrid } from './components/CardGrid';
import { CardDetail } from './components/CardDetail';
import { sampleCards } from '@/data/sample-cards';

export function App() {
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash.startsWith('card-')) {
        const cardId = hash.replace('card-', '');
        setSelectedCardId(cardId);
      } else {
        setSelectedCardId(null);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleCardClick = (cardId: string) => {
    window.location.hash = `card-${cardId}`;
  };

  const handleCloseDetail = () => {
    window.location.hash = '';
  };

  const selectedCard = selectedCardId ? sampleCards.find(card => card.id === selectedCardId) : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-700 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/10 via-transparent to-yellow-400/10"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]"></div>
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(255,119,198,0.2),transparent_50%)]"></div>
      <div className="relative z-10">
        <Header />
        <CardGrid cards={sampleCards} onCardClick={handleCardClick} />
        {selectedCard && (
          <CardDetail card={selectedCard} onClose={handleCloseDetail} />
        )}
      </div>
    </div>
  );
}
