import type { Meta, StoryObj } from '@storybook/preact';
import { Card } from '../components/Card';
import type { Card as CardType } from '../types';

// Sample card data for stories
const electricToaster: CardType = {
  id: 'toaster',
  name: 'Electric Toaster',
  description: 'Deal 3 damage to any target. Perfect for breakfast battles and crispy comebacks.',
  imageUrl: '/src/assets/images/cards/toaster.png',
  cost: 1,
  rarity: 'common',
  type: 'spell',
};

const mightyBanana: CardType = {
  id: 'banana',
  name: 'Mighty Banana',
  description: 'A potassium-powered protector of the fruit bowl. Slippery when peeled.',
  imageUrl: '/src/assets/images/cards/banana.png',
  cost: 4,
  attack: 4,
  defense: 5,
  rarity: 'rare',
  type: 'creature',
};

const powerCord: CardType = {
  id: 'power-cord',
  name: 'Power Cord',
  description: 'Equipped creature gets +2/+1. Provides the spark needed for victory.',
  imageUrl: '/src/assets/images/cards/power-cord.png',
  cost: 2,
  rarity: 'uncommon',
  type: 'artifact',
};

const dishSpongeLord: CardType = {
  id: 'sponge',
  name: 'Dish Sponge Lord',
  description: 'Absorb all damage. When Dish Sponge Lord enters, clean up 2 enemy creatures.',
  imageUrl: '/src/assets/images/cards/4.png',
  cost: 8,
  attack: 8,
  defense: 8,
  rarity: 'legendary',
  type: 'creature',
};

const longNameCard: CardType = {
  id: 'long-appliance',
  name: 'Super Ultra Mega Premium Deluxe Kitchen Appliance',
  description: 'This card has an extremely long name that should be truncated properly to test the UI layout. It demonstrates how the component handles overflow text.',
  imageUrl: '/src/assets/images/cards/toaster.png',
  cost: 15,
  attack: 1,
  defense: 1,
  rarity: 'epic',
  type: 'creature',
};

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Individual trading card component displaying quirky themed cards with hover effects and interactive elements.',
      },
    },
  },
  tags: ['autodocs'],
  args: {
    card: electricToaster,
  },
  argTypes: {
    card: {
      control: 'object',
      description: 'Card data object containing all card information',
    },
    onClick: { action: 'clicked' },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply to the card',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ 
        background: 'linear-gradient(135deg, #4c1d95 0%, #1e3a8a 50%, #3730a3 100%)',
        padding: '2rem',
        minHeight: '400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{ maxWidth: '300px' }}>
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// Stories
export const Common: Story = {};
(Common as any).args = { card: electricToaster };

export const Uncommon: Story = {};
(Uncommon as any).args = { card: powerCord };

export const Rare: Story = {};
(Rare as any).args = { card: mightyBanana };

export const Legendary: Story = {};
(Legendary as any).args = { card: dishSpongeLord };

export const Spell: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Spell cards do not display attack/defense stats.',
      },
    },
  },
};
(Spell as any).args = { card: electricToaster };

export const Creature: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Creature cards display attack (⚔) and defense (🛡) stats.',
      },
    },
  },
};
(Creature as any).args = { card: mightyBanana };

export const Artifact: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Artifact cards typically do not have attack/defense stats.',
      },
    },
  },
};
(Artifact as any).args = { card: powerCord };

export const LongName: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Cards with long names are truncated with ellipsis to maintain layout.',
      },
    },
  },
};
(LongName as any).args = { card: longNameCard };

export const AllRarities: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
      <Card card={electricToaster} onClick={() => {}} />
      <Card card={powerCord} onClick={() => {}} />
      <Card card={mightyBanana} onClick={() => {}} />
      <Card card={dishSpongeLord} onClick={() => {}} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comparison of all rarity types: Common (gray), Uncommon (green), Rare (blue), Legendary (orange).',
      },
    },
  },
};

export const CustomClassName: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Cards can accept custom CSS classes for additional styling.',
      },
    },
  },
};
(CustomClassName as any).args = { card: mightyBanana, className: 'ring-2 ring-yellow-400' };