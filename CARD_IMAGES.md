# Card Images Guide

This project currently uses CSS-generated artwork for trading cards via the `CardArtwork` component. This provides professional-looking card art without requiring external image files.

## Current Implementation

- **CSS Gradients**: Each card has unique gradient backgrounds matching their theme
- **Emoji Icons**: Large thematic emojis for visual appeal (⚡ ⚔️ 🌲 🐉)
- **Dynamic Styling**: Colors and effects match card rarity and type
- **No External Files**: All artwork is generated via CSS/JSX

## Card Artwork Details

| Card ID | Name | Theme | Gradient | Icon |
|---------|------|-------|----------|------|
| 1 | Lightning Bolt | Electric/Fire | Yellow→Orange→Red→Brown | ⚡ |
| 2 | Forest Guardian | Nature/Green | Dark Green→Light Green | 🌲 |
| 3 | Crystal Sword | Magic/Purple | Dark Blue→Light Blue | ⚔️ |
| 4 | Dragon Lord | Fire/Red | Dark Red→Light Red | 🐉 |

## Replacing with Real Images

When you're ready to use actual artwork, follow these steps:

### Option 1: AI-Generated Images
Use services like:
- **DALL-E 3**: High-quality fantasy art
- **Midjourney**: Artistic fantasy images
- **Stable Diffusion**: Free/local generation

**Prompt suggestions**:
- "Lightning Bolt spell card art, fantasy trading card game style, magical energy, 200x280 pixels"
- "Forest Guardian creature, ancient tree spirit, fantasy card art, 200x280 pixels"

### Option 2: Free Stock Images
Download from:
- **Freepik**: Free fantasy card templates
- **Unsplash**: High-quality fantasy photography
- **Pixabay**: Free fantasy illustrations

### Option 3: Commission Artists
- **Fiverr**: Affordable card art commissions
- **ArtStation**: Professional fantasy artists
- **DeviantArt**: Card art specialists

## Implementation Steps

1. **Save images** to `src/assets/images/cards/` (e.g., `1.png`, `2.jpg`)
2. **Update sample-cards.ts**:
   ```typescript
   imageUrl: '/src/assets/images/cards/1.png'
   ```
3. **Replace CardArtwork component** usage with standard `<img>` tags
4. **Keep CardArtwork** as fallback for missing images

## Image Specifications

- **Format**: PNG or JPG recommended
- **Dimensions**: 200x280 pixels (5:7 aspect ratio)
- **Style**: Fantasy trading card game aesthetic
- **Quality**: High-resolution for crisp display
- **Theme**: Match card type (spell effects, creatures, artifacts)

## Fallback Strategy

The current CSS artwork serves as an excellent fallback system:
- No broken image icons
- Consistent visual style
- Fast loading (no HTTP requests)
- Theme-appropriate colors and symbols