# Overview

Narrativa Maestra is a comprehensive educational web application focused on teaching the art of storytelling across different literary formats. The application provides structured learning content covering microstories, short stories, and novels, with practical writing techniques, common mistakes to avoid, and best practices from literary masters. Built as a full-stack application with a React frontend and Express.js backend, it features a modern, responsive design using Tailwind CSS and shadcn/ui components.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens and warm color palette
- **State Management**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Component Structure**: Modular section-based components (MicrorrealtoSection, CuentosSection, NovelasSection, etc.)

## Backend Architecture
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js for REST API endpoints
- **Build System**: ESBuild for production bundling, TSX for development
- **Storage Interface**: Abstract storage layer with in-memory implementation (MemStorage)
- **Development Server**: Vite middleware integration for hot module replacement

## Database Design
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Database**: Configured for PostgreSQL via environment variables
- **Schema**: User entity with id, username, and password fields
- **Migrations**: Drizzle Kit for schema management and migrations

## Styling System
- **Design System**: Custom warm color palette with primary (red), secondary (yellow), and accent (orange) colors
- **Typography**: Multi-font stack including Poppins, Open Sans, and Google Fonts integration
- **Component Variants**: Class Variance Authority (CVA) for component styling variants
- **Responsive Design**: Mobile-first approach with custom breakpoints

## Development Workflow
- **Development**: Concurrent frontend (Vite) and backend (Express) servers
- **Type Safety**: Shared TypeScript types between frontend and backend
- **Hot Reload**: Vite HMR for frontend, TSX watch mode for backend
- **Error Handling**: Custom error overlay for development environment

# External Dependencies

## Core Framework Dependencies
- **@neondatabase/serverless**: PostgreSQL database connectivity
- **drizzle-orm & drizzle-kit**: Type-safe ORM and migration tooling
- **express**: Web application framework
- **react & react-dom**: Frontend framework and rendering
- **@vitejs/plugin-react**: React integration for Vite

## UI and Styling
- **@radix-ui/***: Comprehensive set of unstyled, accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **clsx & tailwind-merge**: Dynamic class name utilities

## State Management and Data Fetching
- **@tanstack/react-query**: Server state management and caching
- **wouter**: Lightweight client-side routing

## Development and Build Tools
- **vite**: Fast build tool and development server
- **typescript**: Static type checking
- **esbuild**: JavaScript bundler for production builds
- **tsx**: TypeScript execution engine for development

## Utility Libraries
- **zod**: Schema validation and type inference
- **date-fns**: Date manipulation utilities
- **nanoid**: Unique ID generation
- **lucide-react**: Icon library

## Replit Integration
- **@replit/vite-plugin-runtime-error-modal**: Development error handling
- **@replit/vite-plugin-cartographer**: Development tooling integration