import type { Card } from '@/types';

// Import all card images as modules so they get bundled
import toasterImg from '@/assets/images/cards/toaster.png';
import bananaImg from '@/assets/images/cards/banana.png';
import powerCordImg from '@/assets/images/cards/power-cord.png';
import spongeImg from '@/assets/images/cards/sponge.png';
import duckImg from '@/assets/images/cards/duck.png';
import mugImg from '@/assets/images/cards/mug.png';
import calculatorImg from '@/assets/images/cards/calculator.png';
import timerImg from '@/assets/images/cards/timer.png';

export const sampleCards: Card[] = [
  {
    id: 'toaster',
    name: 'Electric Toaster',
    description:
      'Deal 3 damage to any target. Perfect for breakfast battles and crispy comebacks.',
    imageUrl: toasterImg, // Pixel art toaster artwork
    cost: 1,
    rarity: 'common',
    type: 'spell',
  },
  {
    id: 'banana',
    name: 'Mighty Banana',
    description:
      'A potassium-powered protector of the fruit bowl. Slippery when peeled.',
    imageUrl: bananaImg, // Pixel art banana artwork
    cost: 4,
    attack: 4,
    defense: 5,
    rarity: 'rare',
    type: 'creature',
  },
  {
    id: 'power-cord',
    name: 'Power Cord',
    description:
      'Equipped creature gets +2/+1. Provides the spark needed for victory.',
    imageUrl: powerCordImg, // Pixel art power cord artwork
    cost: 2,
    rarity: 'uncommon',
    type: 'artifact',
  },
  {
    id: 'sponge',
    name: 'Dish Sponge Lord',
    description:
      'Absorb all damage. When Dish Sponge Lord enters, clean up 2 enemy creatures.',
    imageUrl: spongeImg, // Pixel art sponge artwork
    cost: 8,
    attack: 8,
    defense: 8,
    rarity: 'legendary',
    type: 'creature',
  },
  {
    id: 'rubber-duck',
    name: 'Debug Duck',
    description:
      'When played, reveal all bugs in enemy code. Squeaks when pressed.',
    imageUrl: duckImg,
    cost: 2,
    attack: 1,
    defense: 3,
    rarity: 'uncommon',
    type: 'creature',
  },
  {
    id: 'coffee-mug',
    name: 'Caffeinated Mug',
    description:
      'Grant +2 attack to all friendly creatures until end of turn. Contains 100% pure energy.',
    imageUrl: mugImg,
    cost: 3,
    rarity: 'common',
    type: 'spell',
  },
  {
    id: 'calculator',
    name: 'Scientific Calculator',
    description:
      'Calculate the exact probability of victory. Always shows the answer is 42.',
    imageUrl: calculatorImg,
    cost: 5,
    attack: 3,
    defense: 7,
    rarity: 'epic',
    type: 'artifact',
  },
  {
    id: 'kitchen-timer',
    name: 'Ticking Timer',
    description:
      'Countdown 3 turns. When timer reaches 0, deal 5 damage to all enemies.',
    imageUrl: timerImg,
    cost: 4,
    rarity: 'rare',
    type: 'artifact',
  },
];
