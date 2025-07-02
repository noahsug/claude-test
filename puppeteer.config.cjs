/**
 * Puppeteer configuration for end-to-end testing
 * @see https://pptr.dev/guides/configuration
 */

module.exports = {
  // Launch options for the browser
  launch: {
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-accelerated-2d-canvas',
      '--disable-gpu'
    ]
  },

  // Default page options
  defaultViewport: {
    width: 1080,
    height: 1024
  },

  // Test configuration
  testTimeout: 30000,
  baseUrl: 'http://localhost:3001'
};