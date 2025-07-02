#!/bin/bash

echo "🚀 Testing Puppeteer Setup"
echo "=========================="

# Check if dev server is running
echo "🔍 Checking development server..."
node tests/e2e/check-server.js

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Server is running - running Puppeteer example..."
    node tests/e2e/basic-example.js
else
    echo ""
    echo "📋 To test Puppeteer properly:"
    echo "1. Start the dev server: npm run dev"
    echo "2. In another terminal, run: node tests/e2e/basic-example.js"
    echo "3. Or run the full suite: npm run test:e2e"
fi

echo ""
echo "📚 For more info, see: PUPPETEER.md"