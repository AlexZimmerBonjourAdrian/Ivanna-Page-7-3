# EscribeArte - Creative Writing Learning Platform

## Overview

EscribeArte is a full-stack web application designed to teach creative writing through structured lessons and interactive exercises. The platform focuses on three main writing formats: microrrelatos (micro-stories), short stories, and novels. It provides a progressive learning experience with themed content, writing exercises, and progress tracking.

The application is built as a modern web platform with a React frontend and Express backend, featuring a clean, educational interface that guides users through writing lessons with immediate feedback and practice opportunities.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Routing**: Wouter for client-side routing with pages for different writing formats
- **UI Components**: Radix UI primitives with shadcn/ui design system and Tailwind CSS for styling
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Form Handling**: React Hook Form with Zod validation schemas

### Backend Architecture
- **Runtime**: Node.js with Express framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful endpoints following `/api/*` pattern
- **Error Handling**: Centralized error middleware with structured error responses
- **Development Setup**: Development server with hot module replacement via Vite integration

### Data Layer
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Schema**: Structured tables for users, lessons, exercises, user progress, and user exercises
- **Connection**: Neon serverless PostgreSQL integration
- **Storage Interface**: Abstracted storage layer with both in-memory and database implementations

### Authentication & User Management
- **User System**: Basic user authentication with username/password
- **Session Management**: Express sessions with PostgreSQL session store
- **Progress Tracking**: Individual user progress tracking across lessons and exercises

### Content Structure
- **Learning Paths**: Three main formats (microrrelatos, cuentos, novelas) with themed lessons
- **Progressive Learning**: Lessons unlock based on completion of previous content
- **Exercise System**: Writing prompts with word count constraints and submission tracking
- **Themes**: Categorized content (terror, amor, ciencia-ficción, etc.) for microrrelatos

### Development Tools
- **Type Safety**: Full TypeScript implementation across frontend and backend
- **Code Quality**: ESLint configuration with strict TypeScript checking
- **Build System**: Vite for frontend bundling and esbuild for backend compilation
- **Development Experience**: Hot reload, error overlays, and Replit integration features

## External Dependencies

### Core Backend Dependencies
- **Express**: Web application framework for Node.js
- **Drizzle ORM**: Type-safe database toolkit with PostgreSQL dialect
- **@neondatabase/serverless**: Serverless PostgreSQL database connection
- **connect-pg-simple**: PostgreSQL session store for Express sessions
- **Zod**: Runtime type validation and schema definition

### Frontend Dependencies
- **React & React DOM**: UI framework with TypeScript support
- **TanStack Query**: Data fetching and caching library
- **Wouter**: Lightweight client-side routing
- **Radix UI**: Headless UI components for accessibility
- **Tailwind CSS**: Utility-first CSS framework
- **class-variance-authority**: Utility for managing component variants

### Development Dependencies
- **Vite**: Build tool and development server
- **TypeScript**: Static type checking
- **PostCSS**: CSS processing with Tailwind
- **@replit/vite-plugin-runtime-error-modal**: Development error handling
- **@replit/vite-plugin-cartographer**: Replit development integration

### Database & Infrastructure
- **PostgreSQL**: Primary database with Drizzle migrations
- **Neon**: Serverless PostgreSQL hosting
- **Environment Variables**: Database URL and configuration management