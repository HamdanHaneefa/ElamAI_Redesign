# Elam AI - AI Consulting Website

## Overview
This is the official website for Elam AI, an AI consulting and business transformation company based in Kerala, India. The website showcases their services, AI agents, platform capabilities, solutions, and resources for businesses seeking AI transformation.

## Project Architecture

### Tech Stack
- **Frontend Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.2
- **Routing**: React Router DOM 7.8.2
- **Styling**: Tailwind CSS 4.1.12
- **Animations**: Framer Motion 12.23.12, GSAP 3.13.0
- **Icons**: Lucide React, React Icons
- **Analytics**: React GA4 (Google Analytics 4)
- **Backend Services**: Supabase
- **3D Graphics**: OGL (Open Graphics Library)

### Project Structure
```
├── public/               # Static assets (robots.txt, sitemap.xml, manifest)
├── src/
│   ├── assets/          # Images and logos
│   ├── components/      # Reusable React components
│   │   ├── lib/         # Utility functions
│   │   └── [Various UI components]
│   ├── pages/           # Route-based page components
│   │   ├── about/       # Company, Team, Careers, Contact
│   │   ├── agents/      # AI Agent showcases
│   │   ├── platform/    # Platform features
│   │   ├── resources/   # Documentation, API, Tutorials
│   │   └── solutions/   # Business solutions
│   ├── utils/           # Analytics and utilities
│   ├── App.jsx          # Main app component with routing
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html           # HTML template with SEO meta tags
├── vite.config.js       # Vite configuration
└── package.json         # Dependencies and scripts
```

## Development Setup

### Running the Application
The development server runs on port 5000 with hot module replacement (HMR) enabled.

**Command**: `npm run dev`

The Vite config is set to:
- Host: 0.0.0.0 (required for Replit environment)
- Port: 5000 (Replit's exposed port)
- Strict port mode enabled

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Key Features

### Pages & Routes
1. **Homepage** - Main landing page
2. **Platform** - Agentic Workflows, AI Agent Platform, Integrations, Database/Memory/RAG, Security & Deployment
3. **AI Agents** - Customer Support, Sales, Marketing, Data Analysis agents
4. **Solutions** - Enterprise, Small Business, Developer Tools, Custom Solutions
5. **Resources** - Documentation, API Reference, Tutorials, Community
6. **About** - Company, Careers, Contact

### Components
- **Navbar** - Main navigation
- **Footer** - Site footer with links
- **SiteLoader** - Initial loading animation
- **FloatingWhatsApp** - WhatsApp contact widget
- **ElamAIChatbot** - AI chatbot interface
- **TitleUpdater** - Dynamic page title management
- **ScrollToTop** - Auto-scroll on route change
- **Analytics Tracker** - Google Analytics integration

### SEO & Marketing
The site includes comprehensive SEO optimization:
- Structured data (JSON-LD) for Organization, Local Business, Services, and FAQ
- Open Graph and Twitter Card meta tags
- Sitemap and robots.txt
- Multi-language support (English, Hindi, Malayalam, Arabic)
- Geographic targeting for India (Kerala)

## Configuration Notes

### Replit Environment
- The Vite server is configured to allow all hosts, which is required for Replit's proxy/iframe setup
- Port 5000 is the only non-firewalled port in Replit
- HMR (Hot Module Replacement) is configured to work with the Replit proxy

### Analytics
Google Analytics is initialized with tracking ID: `G-ENX73YFGMP`

### External Integrations
- **WhatsApp Business**: Floating widget with phone number +919747419297
- **Supabase**: Backend service integration (configured via environment)

## Recent Changes
- **2025-10-05**: Complete website transformation to white theme and content updates
  - **Theme Transformation**: Converted entire site from dark theme to clean white/light theme
    - Updated all backgrounds: bg-black/gray-900 → bg-white/gray-50/100
    - Updated all text: text-white → text-gray-900/700 for proper contrast
    - Updated 25+ components including all page components in about/, agents/, platform/, resources/, solutions/
    - Preserved all font families and sizes (no font style changes)
  - **Content Updates**:
    - HeroSection: New headline "Transform Your Business with Intelligent AI Solutions"
    - HeroSection: Updated location to "Based in Perumanna, Kerala, India - Serving Global Clients"
    - ServicesSection: Updated section title to "Comprehensive AI Solutions for Modern Business"
    - ServicesSection: Added 7 comprehensive services:
      1. AI Business Strategy Development
      2. Workflow Automation
      3. AI Agent Development
      4. Custom SaaS Development
      5. Predictive Analytics
      6. AI Content Creation
      7. Chatbot & Voice Agent Development
  - All changes validated by architect review
- **2025-10-05**: Initial import to Replit environment
  - Configured Vite to bind to 0.0.0.0:5000 for Replit compatibility
  - Set up development workflow
  - Created project documentation

## User Preferences
None specified yet.

## Notes
- The site uses React 19's StrictMode for development
- All routes are client-side (SPA) using React Router
- The site includes a 1.5s loading simulation on initial load (can be removed in production)
