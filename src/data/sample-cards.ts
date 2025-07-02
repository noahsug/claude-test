import type { Card } from '@/types';

export const sampleCards: Card[] = [
  {
    id: '1',
    name: 'Lightning Bolt',
    description: 'Deal 3 damage to any target. The raw power of the storm condensed into pure magical energy.',
    imageUrl: '/src/assets/images/cards/1.png', // CSS-based artwork via CardArtwork component
    cost: 1,
    rarity: 'common',
    type: 'spell',
  },
  {
    id: '2',
    name: 'Forest Guardian',
    description: 'A mighty protector of the ancient woods. Its roots run deep, drawing strength from the earth itself.',
    imageUrl: '/src/assets/images/cards/2.png', // CSS-based artwork via CardArtwork component
    cost: 4,
    attack: 4,
    defense: 5,
    rarity: 'rare',
    type: 'creature',
  },
  {
    id: '3',
    name: 'Crystal Sword',
    description: 'Equipped creature gets +2/+1. Forged from enchanted crystal, this blade never dulls.',
    imageUrl: '/src/assets/images/cards/3.png', // CSS-based artwork via CardArtwork component
    cost: 2,
    rarity: 'uncommon',
    type: 'artifact',
  },
  {
    id: '4',
    name: 'Dragon Lord',
    description: 'Flying. When Dragon Lord enters, deal 2 damage to all enemies. Ancient ruler of the skies.',
    imageUrl: '/src/assets/images/cards/4.png', // CSS-based artwork via CardArtwork component
    cost: 8,
    attack: 8,
    defense: 8,
    rarity: 'legendary',
    type: 'creature',
  },
];
