import http from 'http';

/**
 * Check if the development server is running
 */
export async function checkServer(url = 'http://localhost:3001', timeout = 5000) {
  return new Promise((resolve) => {
    const request = http.get(url, (res) => {
      resolve(res.statusCode === 200);
    });

    request.on('error', () => {
      resolve(false);
    });

    request.setTimeout(timeout, () => {
      request.destroy();
      resolve(false);
    });
  });
}

// If run directly, check server and report status
if (import.meta.url === `file://${process.argv[1]}`) {
  const isRunning = await checkServer();
  
  if (isRunning) {
    console.log('✅ Development server is running at http://localhost:3001');
    process.exit(0);
  } else {
    console.log('❌ Development server is not running');
    console.log('💡 Start it with: npm run dev');
    process.exit(1);
  }
}