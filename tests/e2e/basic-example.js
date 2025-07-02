import puppeteer from 'puppeteer';
import { checkServer } from './check-server.js';

/**
 * Basic Puppeteer example for the Trading Card Display project
 * This demonstrates how to use Puppeteer to automate browser interactions
 */

async function runBasicExample() {
  console.log('🚀 Starting Puppeteer basic example...');
  
  // Check if dev server is running
  console.log('🔍 Checking if development server is running...');
  const serverRunning = await checkServer();
  
  if (!serverRunning) {
    console.error('❌ Development server is not running on http://localhost:3001');
    console.error('💡 Please start it first with: npm run dev');
    console.error('💡 Then run this script again');
    return;
  }
  
  console.log('✅ Development server is running');
  
  // Launch browser with explicit configuration
  const browser = await puppeteer.launch({
    headless: false, // Set to true for headless mode
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage'
    ]
  });

  try {
    // Create a new page
    const page = await browser.newPage();
    
    // Set viewport size
    await page.setViewport({ width: 1080, height: 1024 });
    
    console.log('📱 Navigating to the Trading Card Display app...');
    
    // Navigate to the local development server
    await page.goto('http://localhost:3001', { 
      waitUntil: 'domcontentloaded',
      timeout: 15000 
    });
    
    // Wait for the page to load
    await page.waitForSelector('h1', { timeout: 5000 });
    
    // Get the page title
    const title = await page.$eval('h1', el => el.textContent);
    console.log(`📋 Page title: ${title}`);
    
    // Ensure screenshots directory exists
    await page.evaluate(() => {
      // This runs in browser context - just a placeholder
      return true;
    });
    
    // Take a screenshot
    await page.screenshot({ 
      path: 'tests/e2e/screenshots/main-page.png', 
      fullPage: true 
    });
    console.log('📸 Screenshot saved: tests/e2e/screenshots/main-page.png');
    
    // Find and click the first card
    const cards = await page.$$('[data-testid="card"]');
    console.log(`🃏 Found ${cards.length} cards on the page`);
    
    if (cards.length > 0) {
      console.log('🖱️  Clicking the first card...');
      await cards[0].click();
      
      // Wait for card detail modal to appear
      await page.waitForSelector('[data-testid="card-detail"]', { timeout: 5000 });
      console.log('✅ Card detail modal opened');
      
      // Take another screenshot
      await page.screenshot({ 
        path: 'tests/e2e/screenshots/card-detail.png', 
        fullPage: true 
      });
      console.log('📸 Screenshot saved: tests/e2e/screenshots/card-detail.png');
      
      // Get card information
      const cardName = await page.$eval('[data-testid="card-name"]', el => el.textContent);
      const cardCost = await page.$eval('[data-testid="card-cost"]', el => el.textContent);
      console.log(`🃏 Card details: ${cardName} (Cost: ${cardCost})`);
      
      // Close the modal - try multiple methods
      try {
        // First try clicking the close button with force
        await page.waitForSelector('[data-testid="close-button"]', { visible: true, timeout: 2000 });
        
        // Use evaluate to trigger click directly
        await page.evaluate(() => {
          const closeButton = document.querySelector('[data-testid="close-button"]');
          if (closeButton) {
            closeButton.click();
          }
        });
        console.log('✅ Clicked close button via evaluate');
      } catch (error) {
        console.log('⚠️  Close button method failed, trying Escape key...');
        // Fallback: use Escape key to close modal
        await page.keyboard.press('Escape');
      }
      
      // Wait for modal to close
      await page.waitForSelector('[data-testid="card-detail"]', { 
        hidden: true, 
        timeout: 5000 
      });
      console.log('✅ Card detail modal closed');
    }
    
    console.log('✅ Basic example completed successfully!');
    
  } catch (error) {
    console.error('❌ Error running basic example:', error);
    console.error('💡 Make sure the dev server is running on http://localhost:3001');
    console.error('💡 Run: npm run dev');
  } finally {
    await browser.close();
  }
}

// Run the example
runBasicExample();