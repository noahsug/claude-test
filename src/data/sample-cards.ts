import type { Card } from '@/types';

export const sampleCards: Card[] = [
  {
    id: '1',
    name: 'Lightning Bolt',
    description: 'Deal 3 damage to any target.',
    imageUrl:
      'https://via.placeholder.com/200x280/4F46E5/FFFFFF?text=Lightning+Bolt',
    cost: 1,
    rarity: 'common',
    type: 'spell',
  },
  {
    id: '2',
    name: 'Forest Guardian',
    description: 'A mighty protector of the ancient woods.',
    imageUrl:
      'https://via.placeholder.com/200x280/10B981/FFFFFF?text=Forest+Guardian',
    cost: 4,
    attack: 4,
    defense: 5,
    rarity: 'rare',
    type: 'creature',
  },
  {
    id: '3',
    name: 'Crystal Sword',
    description: 'Equipped creature gets +2/+1.',
    imageUrl:
      'https://via.placeholder.com/200x280/8B5CF6/FFFFFF?text=Crystal+Sword',
    cost: 2,
    rarity: 'uncommon',
    type: 'artifact',
  },
  {
    id: '4',
    name: 'Dragon Lord',
    description:
      'Flying. When Dragon Lord enters, deal 2 damage to all enemies.',
    imageUrl:
      'https://via.placeholder.com/200x280/EF4444/FFFFFF?text=Dragon+Lord',
    cost: 8,
    attack: 8,
    defense: 8,
    rarity: 'legendary',
    type: 'creature',
  },
];
