import type { Card } from '@/types';

export const sampleCards: Card[] = [
  {
    id: 'toaster',
    name: 'Electric Toaster',
    description: 'Deal 3 damage to any target. Perfect for breakfast battles and crispy comebacks.',
    imageUrl: '/src/assets/images/cards/toaster.png', // Pixel art toaster artwork
    cost: 1,
    rarity: 'common',
    type: 'spell',
  },
  {
    id: 'banana',
    name: 'Mighty Banana',
    description: 'A potassium-powered protector of the fruit bowl. Slippery when peeled.',
    imageUrl: '/src/assets/images/cards/banana.png', // Pixel art banana artwork
    cost: 4,
    attack: 4,
    defense: 5,
    rarity: 'rare',
    type: 'creature',
  },
  {
    id: 'power-cord',
    name: 'Power Cord',
    description: 'Equipped creature gets +2/+1. Provides the spark needed for victory.',
    imageUrl: '/src/assets/images/cards/power-cord.png', // Pixel art power cord artwork
    cost: 2,
    rarity: 'uncommon',
    type: 'artifact',
  },
  {
    id: 'sponge',
    name: 'Dish Sponge Lord',
    description: 'Absorb all damage. When Dish Sponge Lord enters, clean up 2 enemy creatures.',
    imageUrl: '/src/assets/images/cards/sponge.png', // Pixel art sponge artwork
    cost: 8,
    attack: 8,
    defense: 8,
    rarity: 'legendary',
    type: 'creature',
  },
];