# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This project displays a list of cards styled after trading card games like Magic the Gathering and Hearthstone. The application focuses on presenting cards in an engaging, game-like interface.

## Design Guidelines

- **Clean and Simple UI**: Keep the interface uncluttered and easy to navigate
- **Fun, Approachable Theme**: Use engaging colors, fonts, and visual elements that feel inviting
- **Trading Card Game Style**: Cards should evoke the look and feel of popular TCGs (Magic, Hearthstone, Pokemon, etc.)
- **Mobile Responsive**: Ensure the interface works well on all device sizes
- **Consistent Card Design**: All cards should follow a unified style with:
  - Card image (artwork/illustration)
  - Text content (name, description, stats, etc.)
  - Consistent layout and proportions
  - Visual hierarchy that's easy to scan

## Technology Stack

- **Vite**: Build tool and development server
- **Preact**: UI framework
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Prettier**: Code formatting
- **Storybook**: Component documentation and development
- **React Testing Library**: Component testing framework

## Development Setup

No specific build tools, package managers, or development commands have been identified yet. As the repository evolves, common commands should be documented here.

## Coding Best Practices

- **Flat and Predictable File Structure**: Keep the directory structure shallow and intuitive
- **Readability and Maintainability**: Prioritize clear, self-documenting code over clever solutions
- **No Generic Helpers Folder**: Avoid catch-all utility directories; place helpers close to where they're used
- **Components Close to Usage**: Keep components near their consuming code rather than in distant shared folders
- **Explicit Over Implicit**: Use clear, descriptive names and avoid magic strings or numbers
- **Small, Focused Files**: Break large files into smaller, single-purpose modules
- **Consistent Naming**: Use consistent patterns for files, components, and variables

## Architecture

No code architecture has been established yet. This section should be updated when the codebase
develops structure and patterns.
