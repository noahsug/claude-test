export interface Card {
  id: string
  name: string
  description: string
  imageUrl: string
  cost: number
  attack?: number
  defense?: number
  rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary'
  type: 'creature' | 'spell' | 'artifact'
}