# SDIC — Sudan Digital Infrastructure Company

**Technology for Reconstruction and National Development**

A professional, minister-level website for a Sudanese technology company focused on building digital infrastructure, enterprise software, and national-scale platforms.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion, GSAP, CSS animations
- **3D/Canvas:** Canvas API (network visualization)
- **Data Viz:** D3.js, custom SVG
- **Icons:** Lucide React
- **Forms:** React Hook Form + Zod

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/                    # Next.js pages (App Router)
│   ├── page.tsx           # Homepage (8 sections)
│   ├── about/             # About + interactive terminal + roadmap
│   ├── leadership/        # Team profiles
│   ├── services/          # 9 services + architecture diagrams
│   ├── opportunity/       # Data dashboard + market analysis
│   ├── capabilities/      # 14 showcases (enterprise + concepts)
│   ├── partnerships/      # Partner types + models
│   ├── contact/           # Inquiry form
│   ├── insights/          # Articles listing
│   └── not-found.tsx      # Custom 404 (terminal-styled)
├── components/
│   ├── effects/           # WOW components
│   │   ├── NetworkVisualization.tsx    # Canvas node network
│   │   ├── ArchitectureDiagram.tsx     # Self-building SVG diagrams
│   │   ├── InteractiveTerminal.tsx     # Working terminal emulator
│   │   ├── ImmersiveTimeline.tsx       # Phase roadmap
│   │   ├── CommandPalette.tsx          # Cmd+K navigation
│   │   ├── CustomCursor.tsx            # Teal dot + ring cursor
│   │   └── ConsoleEasterEgg.tsx        # DevTools message
│   ├── home/              # Homepage section components
│   ├── layout/            # Navbar, Footer
│   ├── shared/            # Reusable (ScrollAnimation, CountUp, etc.)
│   └── ui/                # Design system (Button, Badge, etc.)
├── data/                  # All content (editable)
│   ├── services.ts        # 9 service definitions
│   ├── leadership.ts      # 2 leader profiles
│   ├── capabilities.ts    # 14 showcase cards
│   ├── opportunity.ts     # Market stats + sectors
│   ├── partnerships.ts    # Partner types + models
│   ├── timeline.ts        # 4 roadmap phases
│   ├── insights.ts        # Article placeholders
│   └── navigation.ts      # Nav structure
├── types/                 # TypeScript interfaces
└── lib/                   # Utilities (cn helper)
```

## Editing Content

All website copy lives in `src/data/`. Edit these files to update content without touching components:

| File | Content |
|------|---------|
| `services.ts` | Service titles, descriptions, use cases |
| `leadership.ts` | Team bios, career history, expertise |
| `capabilities.ts` | Project showcases and platform concepts |
| `opportunity.ts` | Market statistics and sector analysis |
| `partnerships.ts` | Partner types and partnership models |
| `timeline.ts` | Roadmap phases and milestones |
| `insights.ts` | Blog/insight articles |

## WOW Features

- **Interactive Network Visualization** — Canvas-based node network in hero (mouse-reactive)
- **Self-Building Architecture Diagrams** — SVG diagrams animate on scroll with data particles
- **Interactive Terminal** — Type commands: `help`, `about`, `team`, `services`, `vision`
- **Command Palette** — Press `Cmd+K` / `Ctrl+K` to navigate the site
- **Custom Cursor** — Teal dot + trailing ring with hover expansion
- **Card Spotlight** — Radial gradient follows cursor + 3D tilt
- **Magnetic Buttons** — Buttons pull toward cursor
- **Animated Counters** — Numbers count up with easeOutExpo
- **Gradient Mesh Backgrounds** — Slowly morphing radial gradients
- **Aurora Effect** — Northern lights CSS animation on CTA sections
- **Text Shimmer** — Light sweep across hero headline
- **Immersive Timeline** — Phase roadmap with gradient backgrounds
- **Console Easter Egg** — Open DevTools to see SDIC recruitment message
- **Terminal-styled 404** — Custom error page

## Build

```bash
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint
```

## Deployment

Optimized for Vercel. All pages are statically generated.

```bash
vercel deploy
```
