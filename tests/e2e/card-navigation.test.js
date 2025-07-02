import puppeteer from 'puppeteer';

describe('Card Navigation', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
  });

  afterAll(async () => {
    await browser.close();
  });

  beforeEach(async () => {
    page = await browser.newPage();
    await page.setViewport({ width: 1080, height: 1024 });
  });

  afterEach(async () => {
    await page.close();
  });

  test('should load the main page with cards', async () => {
    await page.goto('http://localhost:3001');
    
    // Wait for the page to load
    await page.waitForSelector('h1');
    
    // Check that the title is correct
    const title = await page.$eval('h1', el => el.textContent);
    expect(title).toBe('Trading Card Display');
    
    // Check that cards are displayed
    const cards = await page.$$('[data-testid="card"]');
    expect(cards.length).toBeGreaterThan(0);
  });

  test('should navigate to card detail when clicked', async () => {
    await page.goto('http://localhost:3001');
    
    // Wait for cards to load
    await page.waitForSelector('[data-testid="card"]');
    
    // Click the first card
    await page.click('[data-testid="card"]');
    
    // Wait for card detail modal to appear
    await page.waitForSelector('[data-testid="card-detail"]');
    
    // Check that URL hash changed
    const url = page.url();
    expect(url).toContain('#card-');
    
    // Check that modal is visible
    const modal = await page.$('[data-testid="card-detail"]');
    expect(modal).toBeTruthy();
  });

  test('should close card detail with close button', async () => {
    await page.goto('http://localhost:3001#card-1');
    
    // Wait for card detail modal to appear
    await page.waitForSelector('[data-testid="card-detail"]');
    
    // Click close button using evaluate for reliability
    await page.evaluate(() => {
      const closeButton = document.querySelector('[data-testid="close-button"]');
      if (closeButton) {
        closeButton.click();
      }
    });
    
    // Wait for modal to disappear
    await page.waitForSelector('[data-testid="card-detail"]', { hidden: true });
    
    // Check that URL hash is cleared
    const url = page.url();
    expect(url).not.toContain('#card-');
  });

  test('should close card detail with Escape key', async () => {
    await page.goto('http://localhost:3001#card-1');
    
    // Wait for card detail modal to appear
    await page.waitForSelector('[data-testid="card-detail"]');
    
    // Press Escape key
    await page.keyboard.press('Escape');
    
    // Wait for modal to disappear
    await page.waitForSelector('[data-testid="card-detail"]', { hidden: true });
    
    // Check that URL hash is cleared
    const url = page.url();
    expect(url).not.toContain('#card-');
  });

  test('should navigate back from card detail with browser back button', async () => {
    await page.goto('http://localhost:3001');
    
    // Wait for cards to load and click first card
    await page.waitForSelector('[data-testid="card"]');
    await page.click('[data-testid="card"]');
    
    // Wait for card detail to appear
    await page.waitForSelector('[data-testid="card-detail"]');
    
    // Go back using browser navigation
    await page.goBack();
    
    // Wait for modal to disappear
    await page.waitForSelector('[data-testid="card-detail"]', { hidden: true });
    
    // Check that URL hash is cleared
    const url = page.url();
    expect(url).not.toContain('#card-');
  });

  test('should display correct card information in detail view', async () => {
    await page.goto('http://localhost:3001#card-1');
    
    // Wait for card detail modal to appear
    await page.waitForSelector('[data-testid="card-detail"]');
    
    // Check card name
    const cardName = await page.$eval('[data-testid="card-name"]', el => el.textContent);
    expect(cardName).toBe('Electric Toaster');
    
    // Check card description
    const cardDescription = await page.$eval('[data-testid="card-description"]', el => el.textContent);
    expect(cardDescription).toContain('Deal 3 damage to any target');
    
    // Check card cost
    const cardCost = await page.$eval('[data-testid="card-cost"]', el => el.textContent);
    expect(cardCost).toBe('1');
  });
});