# Arsam's résumé in the terminal 🤷🏻‍♂️

## What is this?

This is a modern, type-safe command line tool that displays my résumé in an interactive terminal interface. Built with TypeScript and following clean architecture principles.

## Features

- 🎨 Beautiful terminal UI with animations
- 📦 Modern ESM architecture
- 🔒 Strict type safety with TypeScript
- 🏗️ Clean, layered architecture
- ⚡ Fast builds with esbuild
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
yarn global add arsam
```

## Development

### Prerequisites

- Node.js >= 18.0.0
- npm >= 8.0.0 or yarn

### Setup

```shell
# Install dependencies
yarn install

# Run in development mode
yarn dev

# Build the project
yarn build

# Run the built version
yarn start
```

### Scripts

- `yarn dev` - Run the application in development mode
- `yarn build` - Build for production
- `yarn start` - Run the production build
- `yarn typecheck` - Run TypeScript type checking
- `yarn lint` - Lint the codebase
- `yarn prettier` - Format code with Prettier
- `yarn tidy` - Run both linting and formatting

## Architecture

This project follows modern software architecture principles with clear separation of concerns:

- **Config Layer**: Centralized configuration and constants
- **Core Layer**: Business logic and domain services
- **UI Layer**: Presentation and user interaction
- **Data Layer**: Data models and content

For detailed architecture documentation, see [ARCHITECTURE.md](./ARCHITECTURE.md).

## Technical Stack

- **TypeScript 5.3+**: Modern, strict type safety
- **esbuild**: Fast, modern bundling
- **ESM**: Native ES modules
- **inquirer**: Interactive CLI prompts
- **chalk**: Terminal styling
- **boxen**: Terminal boxes
- **figlet**: ASCII art text

## License

MIT
