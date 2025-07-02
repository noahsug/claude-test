import puppeteer from 'puppeteer';

/**
 * Basic Puppeteer example for the Trading Card Display project
 * This demonstrates how to use Puppeteer to automate browser interactions
 */

async function runBasicExample() {
  console.log('🚀 Starting Puppeteer basic example...');
  
  // Launch browser
  const browser = await puppeteer.launch({
    headless: false, // Set to true for headless mode
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    // Create a new page
    const page = await browser.newPage();
    
    // Set viewport size
    await page.setViewport({ width: 1080, height: 1024 });
    
    console.log('📱 Navigating to the Trading Card Display app...');
    
    // Navigate to the local development server
    await page.goto('http://localhost:3001');
    
    // Wait for the page to load
    await page.waitForSelector('h1');
    
    // Get the page title
    const title = await page.$eval('h1', el => el.textContent);
    console.log(`📋 Page title: ${title}`);
    
    // Take a screenshot
    await page.screenshot({ path: 'tests/e2e/screenshots/main-page.png', fullPage: true });
    console.log('📸 Screenshot saved: tests/e2e/screenshots/main-page.png');
    
    // Find and click the first card
    const cards = await page.$$('[data-testid="card"]');
    console.log(`🃏 Found ${cards.length} cards on the page`);
    
    if (cards.length > 0) {
      console.log('🖱️  Clicking the first card...');
      await cards[0].click();
      
      // Wait for card detail modal to appear
      await page.waitForSelector('[data-testid="card-detail"]');
      console.log('✅ Card detail modal opened');
      
      // Take another screenshot
      await page.screenshot({ path: 'tests/e2e/screenshots/card-detail.png', fullPage: true });
      console.log('📸 Screenshot saved: tests/e2e/screenshots/card-detail.png');
      
      // Get card information
      const cardName = await page.$eval('[data-testid="card-name"]', el => el.textContent);
      const cardCost = await page.$eval('[data-testid="card-cost"]', el => el.textContent);
      console.log(`🃏 Card details: ${cardName} (Cost: ${cardCost})`);
      
      // Close the modal
      await page.click('[data-testid="close-button"]');
      console.log('❌ Card detail modal closed');
    }
    
    console.log('✅ Basic example completed successfully!');
    
  } catch (error) {
    console.error('❌ Error running basic example:', error);
  } finally {
    await browser.close();
  }
}

// Run the example if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  runBasicExample();
}

export { runBasicExample };