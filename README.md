# Trading Card Display

A modern web application that displays a collection of trading card game-style cards with an engaging, interactive interface inspired by popular TCGs like Magic: The Gathering and Hearthstone.

## Features

- **Trading Card Game Aesthetic** - Cards designed with authentic TCG styling
- **Responsive Design** - Optimized for mobile, tablet, and desktop
- **Clean UI** - Uncluttered interface with fun, approachable theme
- **Interactive Cards** - Hover effects and smooth animations
- **Type-Safe Development** - Built with TypeScript for reliability

## Tech Stack

- **[Vite](https://vitejs.dev/)** - Build tool and development server
- **[Preact](https://preactjs.com/)** - Lightweight React alternative
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Prettier](https://prettier.io/)** - Code formatting
- **[Storybook](https://storybook.js.org/)** - Component documentation and development
- **[React Testing Library](https://testing-library.com/)** - Component testing framework
- **[Vitest](https://vitest.dev/)** - Unit testing framework

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd claude-test
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run unit tests
- `npm run test:ui` - Run tests with UI
- `npm run storybook` - Start Storybook for component development
- `npm run build-storybook` - Build Storybook for deployment
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Project Structure

```
src/
├── components/     # Reusable UI components
├── data/          # Sample data and constants
├── types/         # TypeScript type definitions
├── test/          # Test utilities and setup
├── app.tsx        # Main application component
├── main.tsx       # Application entry point
└── index.css      # Global styles (Tailwind imports)
```

## Development Guidelines

### Code Organization

- **Flat Structure** - Keep directory structure shallow and intuitive
- **Component Proximity** - Keep components close to where they're used
- **Clear Naming** - Use descriptive names for files, components, and variables
- **Explicit Over Implicit** - Use clear, descriptive names and avoid magic strings or numbers
- **Small, Focused Files** - Break large files into smaller, single-purpose modules
- **No Generic Helpers** - Avoid catch-all utility directories; place helpers close to where they're used

### Code Quality

- **TypeScript** - Use strict type checking for reliability
- **ESLint** - Follow established linting rules
- **Prettier** - Maintain consistent code formatting
- **Testing** - Write tests for components using React Testing Library

### Path Aliases

The project uses path aliases for clean imports:

- `@/*` - src directory
- `@/components/*` - components directory
- `@/types/*` - types directory
- `@/data/*` - data directory

## Card Data Structure

Cards follow this TypeScript interface:

```typescript
interface Card {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  cost: number;
  attack?: number;
  defense?: number;
  rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
  type: 'creature' | 'spell' | 'artifact';
}
```

## Design Guidelines

- **Trading Card Game Aesthetic** - Cards should evoke the look and feel of popular TCGs
- **Mobile First** - Design for mobile devices, then enhance for larger screens
- **Fun Theme** - Use engaging colors, fonts, and visual elements
- **Consistent Styling** - All cards follow a unified design language
- **Clear Hierarchy** - Easy-to-scan layout with proper visual hierarchy

## Contributing

1. Follow the coding best practices outlined in [CLAUDE.md](./CLAUDE.md)
2. Write tests for new components
3. Update Storybook stories for visual components
4. Run linting and formatting before committing
5. Use clear, descriptive commit messages

## License

This project is for educational and demonstration purposes.
