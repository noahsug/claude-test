# Trading Card Display

A modern web application that displays a collection of trading card game-style cards with an
engaging, interactive interface featuring quirky, fun themes like household objects, fruits, and everyday items.

[View the webpage](https://noahsug.github.io/household-heroes/)

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
cd household-heroes
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
- `npm run test:e2e` - Run end-to-end tests with Puppeteer
- `npm run deploy` - Deploy to GitHub Pages

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

tests/
└── e2e/           # End-to-end tests with Puppeteer
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
  attack?: number; // Optional: only for creatures
  defense?: number; // Optional: only for creatures
  rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
  type: 'creature' | 'spell' | 'artifact';
}
```

Sample cards are available in `src/data/sample-cards.ts`

## Navigation & Routing

The app uses simple hash-based routing for card details:

- Main view: `/` (shows all cards in grid)
- Card detail: `/#card-x` (shows expanded view of card with ID "x")
- Back button support included for seamless navigation

## Design Guidelines

- **Quirky Fun Theme** - Cards feature amusing, everyday objects rather than traditional fantasy themes
- **Household & Food Items** - Think toasters, bananas, rubber ducks, kitchen utensils, etc.
- **Pixel Art Aesthetic** - Embrace retro 8-bit/16-bit style with crisp, blocky visuals and bright, vibrant colors
- **Playful Approach** - Cards should be whimsical and bring a smile to users' faces
- **Mobile First** - Design for mobile devices, then enhance for larger screens
- **Bright Colors** - Use engaging, vibrant colors that pop in pixel art style
- **Consistent Styling** - All cards follow a unified design language with pixel-perfect precision
- **Clear Hierarchy** - Easy-to-scan layout with proper visual hierarchy

## Contributing

1. Write tests for new components
2. Update Storybook stories for visual components
3. Run linting and formatting before committing
4. Use clear, descriptive commit messages
5. Commit often, keeping commits small with a single responsibility

## Development Planning

- **[TASKS.md](./TASKS.md)** - Complete project roadmap and task breakdown

## End-to-End Testing

This project uses Puppeteer for browser automation and E2E testing. See [PUPPETEER.md](./PUPPETEER.md) for detailed setup and usage instructions.

**Quick start:**

```bash
# Run interactive example
node tests/e2e/basic-example.js

# Run full E2E test suite
npm run test:e2e
```

## License

This project is for educational and demonstration purposes.
