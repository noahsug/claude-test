**IMPORTANT**: For all project information including development commands, scripts, coding guidelines, project structure, and setup instructions, read [README.md](./README.md) first.

# Scripts

- Use `run the build` for typescript checking.

# Coding Style

- Avoid using the TypeScript `any` type.

# Workflow

- Always read [README.md](./README.md) for project context, development commands, and coding guidelines
- When iterating on a component, prefer using storybook first to quickly iterate on the standalone
  component. Then view the entire application afterwards to make sure the changes are as expected.
- Before starting a new development server, check to see if one is already running
- When testing the live application, use Puppeteer MCP tools to interact with `http://localhost:3001`
- After making a UI change check your work by taking a screenshot and confirming the UI change is
  as expected. If there's an issue, keep iterating and taking screenshots until resolved.
- Follow the quirky fun theme (household objects, fruits) specified in README.md
- Use the path aliases and project structure documented in README.md
- Be sure to typecheck when you’re done making a series of code changes
- Prefer running single tests, and not the whole test suite, for performance
- Commit your code every time you finish a major change
