# Arsam's résumé in the terminal 🤷🏻‍♂️

## What is this?

This is a modern, type-safe command line tool that displays my résumé in an interactive terminal interface. Built with TypeScript and following clean architecture principles.

## Features

- 🎨 Beautiful terminal UI with animations
- 📦 Modern ESM architecture
- 🔒 Strict type safety with TypeScript
- 🏗️ Clean, layered architecture
- ⚡ Fast builds with Bun
- 🧪 Highly testable and maintainable
- 🎯 Single responsibility principle throughout

## Usage

### Run with npx (recommended)

```shell
npx arsam
```

### Install globally

```shell
npm install -g arsam
# or
bun install -g arsam
```

## Development

### Prerequisites

- [Bun](https://bun.sh) >= 1.0.0

### Setup

```shell
# Install dependencies
bun install

# Run in development mode
bun dev

# Build the project
bun run build

# Run the built version
bun start
```

### Scripts

- `bun dev` - Run the application in development mode
- `bun run build` - Build for production
- `bun start` - Run the production build
- `bun run typecheck` - Run TypeScript type checking
- `bun run lint` - Lint the codebase
- `bun run prettier` - Format code with Prettier
- `bun run tidy` - Run both linting and formatting

## Architecture

This project follows modern software architecture principles with clear separation of concerns:

- **Config Layer**: Centralized configuration and constants
- **Core Layer**: Business logic and domain services
- **UI Layer**: Presentation and user interaction
- **Data Layer**: Data models and content

## Technical Stack

- **TypeScript 5.3+**: Modern, strict type safety
- **Bun**: Fast runtime, package manager, and bundler
- **ESM**: Native ES modules
- **@oakoliver/lipgloss**: Error styling (Charm Lip Gloss port)
- **boxen**: Bordered content boxes (emoji-safe width)
- **inquirer**: Interactive CLI prompts
- **figlet**: ASCII art text

## License

MIT
