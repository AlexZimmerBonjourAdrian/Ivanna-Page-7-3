# Overview

Mundo de Historias is an educational web application focused on teaching microstory (microrrelato) writing to users. The platform provides an interactive learning environment with multiple sections including microtales examples, story formats, and an interactive guide to help users develop their storytelling skills. The application is designed with a child-friendly, colorful interface using Spanish language content.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Template Engine**: Jinja2 templates with Flask for server-side rendering
- **UI Framework**: Bootstrap 5.3.0 for responsive design and component styling
- **Styling Approach**: Custom CSS with CSS variables for consistent theming, Google Fonts (Fredoka and Comic Neue) for child-friendly typography
- **Icons**: Font Awesome 6.4.0 for visual elements
- **JavaScript**: Vanilla JavaScript with modular architecture for page-specific functionality

## Backend Architecture
- **Web Framework**: Flask (Python) with minimal route structure
- **Application Structure**: Single-file Flask application (app.py) with template-based routing
- **Session Management**: Flask sessions with environment-based secret key configuration
- **Deployment**: Configured for host '0.0.0.0' on port 5000 with debug mode enabled

## Styling and Design System
- **Color Palette**: CSS custom properties defining primary colors (coral #ff6b6b), secondary (teal #4ecdc4), and accent colors with gradient backgrounds
- **Typography**: Dual font system using Fredoka for headings and Comic Neue for body text
- **Visual Effects**: CSS gradients, box shadows, and backdrop filters for modern UI appearance
- **Responsive Design**: Bootstrap grid system with mobile-first approach

## Application Flow
- **Multi-page Structure**: Four main sections (Home, Microtales, Story Formats, Interactive Guide)
- **Navigation**: Fixed navigation bar with active state management
- **Page-specific Functionality**: Modular JavaScript initialization based on current page detection

# External Dependencies

## Frontend Libraries
- **Bootstrap 5.3.0**: CSS framework via CDN for responsive design and UI components
- **Font Awesome 6.4.0**: Icon library via CDN for visual elements
- **Google Fonts**: Fredoka and Comic Neue font families for typography

## Backend Dependencies
- **Flask**: Python web framework for routing and template rendering
- **Jinja2**: Template engine (included with Flask) for dynamic HTML generation

## Development Environment
- **Python Runtime**: Flask development server with debug mode
- **Static File Serving**: Flask's built-in static file handling for CSS and JavaScript assets
- **Environment Variables**: SESSION_SECRET for Flask session configuration

Note: The application currently operates as a static educational website with no database integration or external API dependencies. All content appears to be served through templates and static assets.