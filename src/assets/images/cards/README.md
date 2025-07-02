# Card Images

This directory contains artwork for trading cards.

## Image Requirements

- **Format**: PNG or JPG
- **Dimensions**: 200x280 pixels (standard trading card aspect ratio 5:7)
- **Naming**: Use card ID as filename (e.g., `1.png`, `2.jpg`)
- **Style**: Trading card game aesthetic matching project theme

## Current Cards

- `1.png` - Lightning Bolt (spell)
- `2.png` - Forest Guardian (creature) 
- `3.png` - Crystal Sword (artifact)
- `4.png` - Dragon Lord (creature)

## Image Sources

For development, you can use:
- AI image generators (DALL-E, Midjourney, Stable Diffusion)
- Free fantasy art from sites like Unsplash, Pixabay
- Commission custom artwork
- Create placeholder designs

## Adding New Cards

1. Add image file to this directory
2. Update `src/data/sample-cards.ts` with new imageUrl path
3. Ensure image follows size and style guidelines