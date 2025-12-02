# maigeXR Promotional Website - Claude Documentation

## Project Overview

This is a Next.js promotional website for maigeXR, an AI-powered XR development platform. The site showcases the three implementations (Android, iOS, Web) and highlights the platform's features and capabilities.

## Technology Stack

- **Framework**: Next.js 15+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4+
- **Package Manager**: pnpm
- **Node Version**: 20+
- **Deployment**: GitHub Pages (static export)

## Project Structure

```
maigeXR_promotional_site/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with fonts
│   ├── page.tsx           # Main landing page
│   └── globals.css        # Global styles and Tailwind imports
├── components/            # React components
│   ├── Hero.tsx          # Hero section
│   ├── Overview.tsx      # What is maigeXR
│   ├── PlatformShowcase.tsx  # Android, iOS, Web platforms
│   ├── FeaturesGrid.tsx  # Feature cards
│   ├── TechnologyStack.tsx   # Tech logos/carousel
│   ├── UseCases.tsx      # Use case cards
│   ├── GettingStarted.tsx    # Getting started steps
│   └── Footer.tsx        # CTA and footer
├── public/               # Static assets
│   ├── images/          # Screenshots, icons
│   └── icons/           # SVG icons
├── styles/              # Additional styles (if needed)
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
├── tailwind.config.ts   # Tailwind configuration
├── next.config.mjs      # Next.js configuration
└── CLAUDE.md           # This file

## Design System

### Color Palette

The site uses a futuristic "XR Portal" theme with the following colors:

- **Primary**: Deep space navy (`#0a0e27`)
- **Accent 1**: Cyan/teal (`#00ffff`, `#00d9ff`)
- **Accent 2**: Magenta/purple (`#ff00ff`, `#b000ff`)
- **Accent 3**: Electric lime (`#7fff00`)
- **Neutral**: Cool grays (`#1a1f3a`, `#2d3250`)

### Typography

- **Display Font**: Orbitron (futuristic, geometric)
- **Heading Font**: Outfit (modern, clean)
- **Body Font**: Inter (readable, professional)

All fonts are loaded via next/font/google for optimal performance.

### Visual Effects

- Gradient meshes and backgrounds
- Glassmorphism effects
- Floating 3D-effect cards
- Scroll-triggered animations
- Hover effects with scale/glow
- Particle animations (optional)

## Development

### Local Development

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Open http://localhost:3000
```

### Building

```bash
# Build for production
pnpm build

# This creates a static export in the /out directory
```

### Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build static export for GitHub Pages
- `pnpm start` - Start production server (not used for GitHub Pages)
- `pnpm lint` - Run ESLint

## Deployment to GitHub Pages

The site is configured for static export to GitHub Pages using the following settings:

1. **next.config.mjs** includes:
   - `output: 'export'` for static HTML export
   - `images: { unoptimized: true }` for GitHub Pages compatibility
   - `basePath` configured for the repository path

2. **Build and Deploy**:
   ```bash
   pnpm build
   # The /out directory contains the static site
   ```

3. **GitHub Pages Setup**:
   - Go to repository Settings > Pages
   - Set source to deploy from the /out directory or use GitHub Actions
   - Or copy /out contents to /docs and deploy from /docs folder

## Content Sections

### 1. Hero Section
- Main tagline: "From Conversation to Creation"
- Subtitle and brief description
- Primary CTA: "Get Started" (GitHub link)
- Animated gradient background

### 2. Overview Section
- "What is maigeXR?" explanation
- Key statistics (3 platforms, 5+ AI providers, 5 frameworks)
- Visual diagram showing conversation → AI → 3D scene flow

### 3. Platform Showcase
- Android, iOS, and Web platforms
- Each with icon, description, tech stack, and status badge
- Responsive grid layout

### 4. Features Grid
- 8 feature cards covering:
  - Conversational 3D Development
  - Multi-Provider AI Integration
  - 5+ 3D Framework Support
  - Real-Time Code Execution
  - Advanced Build System
  - Privacy-First Design
  - Cross-Platform Architecture
  - Framework-Aware Generation

### 5. Technology Stack
- Logo grid or carousel showing:
  - AI Providers: Together.ai, OpenAI, Anthropic, Google AI
  - 3D Frameworks: Babylon.js, Three.js, React Three Fiber, A-Frame, Reactylon
  - Platform Tech: Kotlin, Swift, Next.js, React

### 6. Use Cases
- 5 use case cards:
  - Education & Learning
  - Rapid Prototyping
  - Creative Exploration
  - Professional Development
  - XR Development

### 7. Getting Started
- 3-step process with visual indicators
- Links to installation guides
- Platform selector

### 8. Footer/CTA
- Final CTA: "Start Building with maigeXR"
- GitHub links with star count
- Documentation links
- Social links
- Open source badge

## Performance Optimization

- Static HTML export for fast loading
- Next.js automatic code splitting
- Optimized fonts via next/font
- Lazy loading for images (use Next.js Image component where possible, but with unoptimized flag for GitHub Pages)
- Tailwind CSS purging for minimal CSS bundle
- GPU-accelerated animations using CSS transforms

## Accessibility

- Semantic HTML5 elements
- ARIA labels where needed
- Keyboard navigation support
- Sufficient color contrast ratios
- `prefers-reduced-motion` media query support
- Alt text for all images

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive (320px - 4K)
- Progressive enhancement for older browsers

## SEO

Essential meta tags are included in the root layout:

- Title and description
- Open Graph tags for social sharing
- Twitter Card tags
- Keywords and author information

## Future Enhancements

- Blog/news section
- Live embedded demo
- Video showcase
- Community gallery
- Dark/light theme toggle
- Internationalization (i18n)
- Analytics integration

## Contributing

To add new sections or components:

1. Create component in `/components` directory
2. Add to main page in `/app/page.tsx`
3. Update Tailwind classes as needed
4. Test responsiveness (mobile, tablet, desktop)
5. Ensure accessibility compliance
6. Build and test static export

## Maintenance

Regular updates needed for:
- AI provider information
- Framework versions
- Platform features
- Screenshots and demos
- Broken link monitoring

## Known Issues / Notes

- Using WSL2 may result in slower pnpm install times due to filesystem performance
- GitHub Pages requires `images: { unoptimized: true }` in next.config.mjs
- basePath must be set correctly for repository deployment vs. custom domain

## Contact

For issues or questions about this website:
- GitHub Issues: [maigeXR repository]
- Documentation: [Link to docs]

---

*Generated with Claude Code*
