# Architecture Documentation

## Overview

This CLI application has been modernized with a clean, layered architecture that promotes separation of concerns, testability, and extensibility.

## Architecture Layers

### 1. Configuration Layer (`src/config/`)

Centralized configuration management:
- **`constants.ts`**: Application-wide constants and configuration objects
- All magic strings and numbers are extracted here
- Immutable configuration using `as const`

**Benefits:**
- Easy to modify behavior without touching business logic
- Single source of truth for configuration
- Type-safe configuration values

### 2. Core Layer (`src/core/`)

Business logic and domain services:

- **`ResumeService`**: Manages resume data operations
  - Retrieve sections
  - Validate section existence
  - Transform data for presentation

- **`NavigationService`**: Handles navigation logic
  - Determine navigation actions
  - Validate user choices
  - Provide navigation options

- **`AppOrchestrator`**: Application coordinator
  - Orchestrates all services
  - Manages application flow
  - Handles error boundaries
  - Dependency injection point

**Benefits:**
- Business logic isolated from UI
- Easy to test independently
- Clear responsibilities per service
- Extensible through dependency injection

### 3. UI Layer (`src/ui/`)

Presentation and user interaction:

- **`TerminalRenderer`**: Handles all terminal output
  - Screen clearing
  - Colored output
  - Formatted displays
  - Animations

- **`PromptManager`**: Manages user input
  - Creates prompts
  - Handles user responses
  - Type-safe prompt handling

**Benefits:**
- UI completely decoupled from business logic
- Easy to swap terminal libraries
- Consistent rendering across the app
- Testable in isolation

### 4. Data Layer (`src/data/`)

Data models and storage:
- **`resume.ts`**: Resume content
- Separated from business logic
- Easy to modify or replace

### 5. Types (`src/types.ts`)

Centralized type definitions:
- Interfaces for all contracts
- Type aliases for clarity
- Shared types across layers

## Design Patterns

### Dependency Injection
Services are injected through constructors, making the application testable and flexible:

```typescript
constructor(resume: ResumeType) {
  this.resumeService = new ResumeService(resume)
  this.navigationService = new NavigationService()
  this.renderer = new TerminalRenderer()
  this.promptManager = new PromptManager()
}
```

### Service Layer Pattern
Each service has a single, well-defined responsibility:
- `ResumeService`: Resume data operations
- `NavigationService`: Navigation logic
- `TerminalRenderer`: Display operations
- `PromptManager`: User input operations

### Orchestrator Pattern
The `AppOrchestrator` coordinates all services without implementing business logic itself.

## Modern TypeScript Features

### Strict Type Safety
- All strict mode flags enabled
- No implicit `any`
- Strict null checks
- No unchecked indexed access

### ESM (ES Modules)
- Native ES module support
- Proper `.js` extensions in imports
- Modern import/export syntax

### Readonly Types
Immutable data structures throughout:
```typescript
type ResumeType = Record<SectionTitles, ReadonlyArray<string>>
```

### Const Assertions
Type-safe constants:
```typescript
export const APP_CONFIG = {
  name: 'Arsam',
  // ...
} as const
```

## Error Handling

Comprehensive error handling at multiple levels:
1. Try-catch blocks in orchestrator methods
2. Centralized error handling method
3. User-friendly error messages
4. Graceful fallbacks

## Extensibility

The architecture makes it easy to:

### Add New Resume Sections
1. Update `SectionTitles` type in `types.ts`
2. Add content to `resume.ts`
3. No other changes needed!

### Add New Services
1. Create service in `src/core/`
2. Inject in `AppOrchestrator`
3. Use in orchestration methods

### Change UI Implementation
1. Update classes in `src/ui/`
2. Maintain same interfaces
3. No changes to core logic needed

### Add New Features
The layered architecture allows adding features without modifying existing code:
- Add analytics: Create `AnalyticsService` in core
- Add data persistence: Create `StorageService` in core
- Add custom themes: Extend `TerminalRenderer` in UI

## Testing Strategy

The architecture enables comprehensive testing:

### Unit Tests
Each service can be tested in isolation:
- Mock dependencies
- Test single responsibility
- Fast execution

### Integration Tests
Test service interactions:
- Orchestrator with mocked services
- Service chains
- Error propagation

### End-to-End Tests
Test the full application flow:
- User interactions
- Full rendering pipeline
- Real data

## Build System

Modern build configuration:
- **esbuild**: Fast, modern bundler
- **ESM output**: Native modules
- **Source maps**: Debugging support
- **Tree shaking**: Smaller bundle size
- **Type checking**: Separate from build

## Performance Considerations

- Lazy loading where possible
- Efficient data structures
- Minimal dependencies
- Tree-shaken bundle
- Async operations for I/O

## Migration Path

For future migrations:
1. Services can be gradually replaced
2. Interfaces provide stable contracts
3. Type system catches breaking changes
4. Clear layer boundaries prevent leakage

## Comparison: Before vs After

### Before
- ❌ Mixed concerns (UI + logic)
- ❌ Circular dependencies
- ❌ Hardcoded strings
- ❌ Difficult to test
- ❌ No error handling
- ❌ CommonJS modules
- ❌ Loose TypeScript config

### After
- ✅ Separated concerns (layers)
- ✅ Clear dependency flow
- ✅ Centralized configuration
- ✅ Highly testable
- ✅ Comprehensive error handling
- ✅ Modern ESM modules
- ✅ Strict TypeScript

## File Structure

```
src/
├── config/           # Configuration layer
│   ├── constants.ts  # App constants
│   └── index.ts
├── core/             # Business logic layer
│   ├── app-orchestrator.ts
│   ├── navigation-service.ts
│   ├── resume-service.ts
│   └── index.ts
├── ui/               # Presentation layer
│   ├── prompt-manager.ts
│   ├── terminal-renderer.ts
│   └── index.ts
├── data/             # Data layer
│   ├── resume.ts
│   └── index.ts
├── types.ts          # Type definitions
└── index.ts          # Entry point
```

## Maintenance

The architecture promotes maintainability:
- **Clear boundaries**: Easy to locate code
- **Single responsibility**: Easy to understand
- **Dependency injection**: Easy to modify
- **Type safety**: Catch errors early
- **Documentation**: Self-documenting code

## Future Enhancements

The architecture supports:
- [ ] Multiple resume formats (JSON, YAML)
- [ ] Custom themes and colors
- [ ] Plugin system
- [ ] Remote data loading
- [ ] Multi-language support
- [ ] Analytics and tracking
- [ ] Export to different formats
