# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Quick Reference

**IMPORTANT**: For all project information including development commands, scripts, coding guidelines, project structure, and setup instructions, read [README.md](./README.md) first.

## Browser Automation with Puppeteer MCP

This project has Puppeteer MCP server configured for browser automation tasks. Use the following MCP tools when you need to:

### Web Interaction Tools Available

- `puppeteer_navigate` - Navigate to web pages and URLs
- `puppeteer_screenshot` - Take screenshots of web pages
- `puppeteer_click` - Click on page elements
- `puppeteer_type` - Type text into form fields
- `puppeteer_get_page_content` - Extract HTML content from pages
- `puppeteer_evaluate` - Execute JavaScript in the browser context
- `puppeteer_wait_for_selector` - Wait for elements to appear
- `puppeteer_get_page_title` - Get page title

### When to Use Puppeteer MCP

- **Testing the live application** - Navigate to `http://localhost:3001` to test the running app
- **Taking screenshots** - Capture visual state for debugging or documentation
- **Interactive testing** - Click buttons, fill forms, test user workflows
- **Content extraction** - Get rendered HTML or text content from pages
- **JavaScript execution** - Run custom JavaScript in the browser environment
- **Cross-browser testing** - Test functionality in a real browser environment

### Puppeteer MCP vs Local E2E Tests

- **Use Puppeteer MCP for**: Interactive debugging, ad-hoc testing, visual verification
- **Use local E2E tests** (`npm run test:e2e`) for: Automated regression testing, CI/CD pipelines

## Claude-Specific Instructions

- Always read [README.md](./README.md) for project context, development commands, and coding guidelines
- When testing the live application, use Puppeteer MCP tools to interact with `http://localhost:3001`
- Follow the quirky fun theme (household objects, fruits) specified in README.md
- Use the path aliases and project structure documented in README.md
- Always commit your changes, keeping commits frequent and concise
