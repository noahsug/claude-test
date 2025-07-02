# Puppeteer Setup Guide

This project includes Puppeteer for browser automation and end-to-end testing of the Trading Card Display application.

## Installation

Puppeteer is already installed as a dev dependency:

```bash
npm install puppeteer --save-dev
```

## Configuration

The project includes a `puppeteer.config.cjs` file with default settings:

- **Headless mode**: Enabled by default for CI/CD
- **Viewport**: 1080x1024 pixels
- **Base URL**: http://localhost:3001
- **Browser args**: Optimized for stability and performance

## Running Tests

### End-to-End Tests

Run the full E2E test suite:

```bash
npm run test:e2e
```

### Basic Example

Run the interactive basic example:

```bash
node tests/e2e/basic-example.js
```

This will:
- Open the Trading Card Display app
- Take screenshots
- Interact with cards
- Demonstrate basic navigation

## Test Structure

### E2E Tests Location
```
tests/e2e/
├── card-navigation.test.js    # Main navigation tests
├── basic-example.js           # Interactive example
└── screenshots/               # Generated screenshots
```

### Test Data Attributes

Components include `data-testid` attributes for reliable testing:

- `data-testid="card"` - Individual cards in grid
- `data-testid="card-detail"` - Card detail modal
- `data-testid="close-button"` - Modal close button
- `data-testid="card-name"` - Card name in detail view
- `data-testid="card-cost"` - Card cost display
- `data-testid="card-description"` - Card description text

## Test Scenarios

The E2E tests cover:

1. **Page Loading**: Verify main page loads with cards
2. **Card Navigation**: Click cards to open detail view
3. **Modal Functionality**: Close modal with button or back navigation
4. **URL Routing**: Hash-based routing works correctly
5. **Content Display**: Card information displays properly

## Screenshots

Puppeteer automatically generates screenshots during tests:
- `main-page.png` - Full page view of card grid
- `card-detail.png` - Card detail modal view

## Usage Examples

### Basic Page Interaction

```javascript
import puppeteer from 'puppeteer';

const browser = await puppeteer.launch();
const page = await browser.newPage();

// Navigate to app
await page.goto('http://localhost:3001');

// Click first card
await page.click('[data-testid="card"]');

// Wait for modal
await page.waitForSelector('[data-testid="card-detail"]');

await browser.close();
```

### Taking Screenshots

```javascript
// Full page screenshot
await page.screenshot({ 
  path: 'screenshot.png', 
  fullPage: true 
});

// Element screenshot
const modal = await page.$('[data-testid="card-detail"]');
await modal.screenshot({ path: 'modal.png' });
```

### Testing Form Interactions

```javascript
// Wait for element and click
await page.waitForSelector('[data-testid="close-button"]');
await page.click('[data-testid="close-button"]');

// Check element visibility
const isVisible = await page.$('[data-testid="card-detail"]') !== null;
```

## Development Workflow

1. **Start dev server**: `npm run dev` (required for all tests)
2. **Check server status**: `node tests/e2e/check-server.js`
3. **Run basic example**: `node tests/e2e/basic-example.js`
4. **Run full E2E tests**: `npm run test:e2e`
5. **Review screenshots**: Check `tests/e2e/screenshots/`

**Important**: The development server must be running on port 3001 before running any E2E tests.

## Troubleshooting

### Common Issues

- **Port conflicts**: Ensure dev server runs on port 3001
- **Browser launch errors**: Install Chrome/Chromium dependencies
- **Timeout errors**: Increase wait times for slow loading

### Debug Mode

Run Puppeteer in non-headless mode for debugging:

```javascript
const browser = await puppeteer.launch({ 
  headless: false,
  devtools: true 
});
```

## CI/CD Integration

For automated testing in CI/CD:

```bash
# Start server in background
npm run dev &

# Wait for server to start
sleep 5

# Run E2E tests
npm run test:e2e

# Stop background processes
pkill -f "vite"
```