# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this
repository.

## Quick Reference

For general project information, setup instructions, and development guidelines, see
[README.md](./README.md).

For a list of tasks explaining how to implement this project, see [TASKS.md](./TASKS.md).

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run test` - Run unit tests
- `npm run storybook` - Start Storybook for component development
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run test:e2e` - Run end-to-end tests with Puppeteer

## Path Aliases

Use these aliases for clean imports:

- `@/*` - src directory
- `@/components/*` - components directory
- `@/types/*` - types directory
- `@/data/*` - data directory

## Coding Best Practices

- **Flat and Predictable File Structure**: Keep the directory structure shallow and intuitive
- **Readability and Maintainability**: Prioritize clear, self-documenting code over clever solutions
- **No Generic Helpers Folder**: Avoid catch-all utility directories; place helpers close to where they're used
- **Components Close to Usage**: Keep components near their consuming code rather than in distant shared folders
- **Explicit Over Implicit**: Use clear, descriptive names and avoid magic strings or numbers
- **Small, Focused Files**: Break large files into smaller, single-purpose modules
- **Consistent Naming**: Use consistent patterns for files, components, and variables
