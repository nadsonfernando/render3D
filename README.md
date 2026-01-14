# Render3D

A React Native Expo application for viewing and interacting with 3D models of real estate properties.

## Overview

This app showcases real estate products with interactive 3D models (GLB format) using `react-native-filament`. Users can browse a catalog of properties and interact with 3D models through intuitive gestures.

## Getting Started

### Installation

```bash
yarn install
```

### Running the App

```bash
# Start development server
yarn start

# Run on iOS
yarn ios

# Run on Android
yarn android
```

## Architecture & Design Patterns

This project follows industry-standard software design principles and patterns:

### Clean Architecture

The codebase is organized in layers with clear separation of concerns:

- **Domain Layer** - Core business logic, entities, and repository interfaces (framework-independent)
- **Infrastructure Layer** - External implementations (data sources, APIs, file systems)
- **Use Cases Layer** - Application-specific business rules that orchestrate domain logic
- **Presentation Layer** - UI components, screens, and navigation

This separation ensures the business logic is isolated from frameworks and external dependencies, making the code more testable and maintainable.

### Domain-Driven Design (DDD)

Each feature is organized as a self-contained module under `src/app/modules/`:

- **Entities** - Core domain objects that represent business concepts (e.g., `ProductEntity`)
- **Repositories** - Abstraction for data access, defined as interfaces in the domain layer
- **Use Cases** - Application-specific operations that implement business workflows

This modular approach aligns the code structure with business domains, making it easier to understand and scale.

### SOLID Principles

The codebase adheres to SOLID principles:

- **Single Responsibility** - Each class/module has one reason to change (e.g., repositories only handle data access)
- **Interface Segregation** - Repository interfaces are focused and specific to their domain
- **Dependency Inversion** - Use cases depend on repository interfaces (abstractions), not concrete implementations

### Clean Code Practices

- **Meaningful Names** - Variables, functions, and components have descriptive names
- **Small Functions** - Functions do one thing and do it well
- **Path Aliases** - Clean imports using `@app`, `@shared`, `@theme`, etc.
- **Type Safety** - TypeScript with strict mode for better code quality

## Project Structure

```
src/
├── app/
│   ├── modules/          # Feature modules (DDD modules)
│   │   └── product/
│   │       ├── domain/           # Business entities & interfaces
│   │       ├── infrastructure/   # Data implementations
│   │       ├── useCases/         # Application business rules
│   │       ├── presentation/     # UI layer
│   │       └── hooks/            # React hooks & state
│   ├── route.tsx         # App navigation
│   └── index.tsx         # App entry point
├── core/                 # Core infrastructure (routing, etc.)
├── shared/               # Shared components & utilities
└── theme/                # Design system (colors, spacing, typography)
```

## Tech Stack

- **React Native** - Mobile framework
- **Expo** - Development platform
- **TypeScript** - Type safety
- **React Navigation** - Navigation library
- **react-native-filament** - 3D rendering engine
- **styled-components** - CSS-in-JS styling
- **React Native Reanimated** - Smooth animations
- **React Native Gesture Handler** - Touch gestures

## Code Quality

- **Prettier** - Code formatting (configured in `.prettierrc`)
- **TypeScript Strict Mode** - Enhanced type checking
- **Path Aliases** - Clean imports without relative paths

## License

Private
