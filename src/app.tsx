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
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <Header />
      <CardGrid cards={sampleCards} onCardClick={handleCardClick} />
      {selectedCard && (
        <CardDetail card={selectedCard} onClose={handleCloseDetail} />
      )}
    </div>
  );
}
