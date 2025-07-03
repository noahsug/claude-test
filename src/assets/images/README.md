# Placeholder Images

This directory contains placeholder images for the Pixel Cards project. These are temporary files that should be replaced with proper pixel art assets.

## Directory Structure

### `/backgrounds/`
- `background-pattern.png` (1920x1080) - Repeatable background pattern for the main app

### `/ui/`
- `header-sparkles.png` (800x200) - Decorative sparkles for the header
- `legendary-border.png` (240x340) - Orange/gold border effect for legendary cards
- `epic-border.png` (240x340) - Purple/indigo border effect for epic cards  
- `rare-border.png` (240x340) - Blue/cyan border effect for rare cards
- `loading-spinner.png` (64x64) - Loading animation spinner
- `card-back.png` (200x280) - Trading card back design
- `modal-texture.png` (600x800) - Background texture for modal dialogs

### `/icons/`
- `cost-icon-bg.png` (32x32) - Background for cost display
- `attack-icon-bg.png` (32x32) - Background for attack stat display
- `defense-icon-bg.png` (32x32) - Background for defense stat display

### `/cards/`
- `toaster.png` (200x200) - Electric Toaster card artwork ✅ **ACTUAL PIXEL ART**
- `banana.png` (200x200) - Mighty Banana card artwork ✅ **ACTUAL PIXEL ART**
- `power-cord.png` (200x200) - Power Cord card artwork ✅ **ACTUAL PIXEL ART**
- `sponge.png` (200x200) - Dish Sponge Lord card artwork ✅ **ACTUAL PIXEL ART**

## Replacement Instructions

The placeholder images (everything except `/cards/`) should be replaced with proper pixel art assets following the prompts in `IMAGE_PROMPTS.md`. The card artworks are already final pixel art assets.

## Usage in Code

These images can be imported and used in React components:

```tsx
import backgroundPattern from '@/assets/images/backgrounds/background-pattern.png';
import headerSparkles from '@/assets/images/ui/header-sparkles.png';
import costIconBg from '@/assets/images/icons/cost-icon-bg.png';
```

## Color Scheme

All final assets should use the project's bright, vibrant color palette:
- Primary: Pink (#FF69B4) → Purple (#9932CC) → Indigo (#4B0082)
- Accents: Cyan (#00FFFF), Yellow (#FFD700), Orange (#FF8C00)