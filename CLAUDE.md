# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**@stagetimerio/shared** is a standalone npm package that provides shared constants and utility functions used across the Stagetimer ecosystem (client, server, electron app, and Firebase functions).

## Purpose

This package centralizes:
- **Constants**: Timer modes, behaviors, appearances, client states, customization options, team roles, access rights, etc.
- **Utilities**: Helper functions like `canAccessTeam()` for role-based access control and `stepValue()` for value stepping

## Essential Commands

```bash
# Install dependencies
npm install

# Build the package (outputs to dist/ as both CJS and ESM)
npm run build

# Run tests
npm test
```

## Package Structure

```
src/
  ├── consts/          # Exported constants used across Stagetimer
  │   ├── timerModes.js
  │   ├── timerBehaviors.js
  │   ├── accessRights.js
  │   └── ...
  └── utils/           # Utility functions
      ├── canAccessTeam.js
      ├── stepValue.js
      └── __tests__/
```

## Code Style

This package follows the Stagetimer project conventions:

```javascript
// CORRECT style
function myFunction (param) {    // Space before parenthesis
  const value = 'single quotes'  // Single quotes
  return value                   // No semicolons
}

// AVOID
const myFunction = (param) => {  // Arrow functions for utilities only
  const value = "double";        // No double quotes or semicolons
}
```

### Key Conventions
- Space before function parentheses: `function name (param)`
- Single quotes for strings
- No semicolons
- Arrow functions only for simple utilities/callbacks
- Remove trailing spaces
- Use `\n\n` for EOF

## Exports

All exports are namespaced when imported:

```javascript
// Constants are exported as namespaces
import { timerModes, accessRights } from '@stagetimerio/shared'

// Utilities are exported as named exports
import { canAccessTeam, stepValue } from '@stagetimerio/shared'
```

## Build System

- Uses **Vite** to bundle for both CommonJS and ESM
- Configured in `vite.config.js` with SSR mode for Node.js compatibility
- Target: Node 16+
- No minification (library package)

## Testing

- Uses **Vitest** for unit tests
- Tests are located in `src/utils/__tests__/`
- Tests should cover edge cases and validate utility function behavior

## Important Notes

- This is a **standalone repository** (github.com/stagetimerio/package-shared)
- It's placed in the monorepo folder for development convenience only
- Changes here affect all Stagetimer components (client, server, electron, functions)
- Always run tests before publishing
- Follow semantic versioning when bumping versions
