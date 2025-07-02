# Card Images Guide

This project uses CSS-generated artwork for trading cards via the `CardArtwork` component. This provides quirky, fun card art featuring household objects and everyday items without requiring external image files.

## Current Implementation

- **CSS Gradients**: Each card has unique gradient backgrounds matching their theme
- **Emoji Icons**: Large thematic emojis for visual appeal (🍌 🔌 🍞 🧽)
- **Dynamic Styling**: Colors and effects match card rarity and type
- **No External Files**: All artwork is generated via CSS/JSX

## Card Artwork Details

| Card ID | Name | Theme | Gradient | Icon |
|---------|------|-------|----------|------|
| 1 | Electric Toaster | Household Appliance | Chrome→Gold→Orange | 🍞 |
| 2 | Mighty Banana | Fruit Power | Yellow→Green gradient | 🍌 |
| 3 | Power Cord | Electronic Accessory | Black→Gray→Silver | 🔌 |
| 4 | Dish Sponge Lord | Cleaning Supplies | Blue→Yellow→Green | 🧽 |

## Replacing with Real Images

When you're ready to use actual artwork, follow these steps:

### Option 1: AI-Generated Images

Use services like:

- **DALL-E 3**: High-quality quirky art
- **Midjourney**: Artistic household objects
- **Stable Diffusion**: Free/local generation

**Prompt suggestions**:

- "Toaster appliance trading card art, quirky fun style, household object, 200x280 pixels"
- "Banana fruit trading card art, playful cartoon style, bright colors, 200x280 pixels"

### Option 2: Free Stock Images

Download from:

- **Freepik**: Free quirky card templates
- **Unsplash**: High-quality photography of household objects and food
- **Pixabay**: Free illustrations of everyday items and fruits

### Option 3: Commission Artists

- **Fiverr**: Affordable quirky card art commissions
- **ArtStation**: Professional illustrators who can create quirky themes
- **DeviantArt**: Artists specializing in fun, cartoon-style artwork

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
- **Style**: Quirky, fun aesthetic with household objects and fruits
- **Quality**: High-resolution for crisp display
- **Theme**: Match card type (household appliances, fruits, everyday objects)

## Fallback Strategy

The current CSS artwork serves as an excellent fallback system:

- No broken image icons
- Consistent visual style
- Fast loading (no HTTP requests)
- Theme-appropriate colors and symbols
