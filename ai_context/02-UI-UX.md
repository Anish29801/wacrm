# wacrm v1 — UI/UX Design System

## Theme System

The app uses a **CSS custom properties-based dark theme system** with 5 accent color variants:

| Theme ID | Primary Color | Tagline |
|----------|--------------|---------|
| violet (default) | oklch(0.526 0.247 293) | The default — confident, slightly playful |
| emerald | oklch(0.62 0.16 162) | Growth-coded, nods at messaging |
| cobalt | oklch(0.585 0.2 254) | Clean B2B-SaaS blue |
| amber | oklch(0.745 0.16 65) | Warm and friendly |
| rose | oklch(0.645 0.22 16) | Bold and modern |

### Theme Switching
- Runtime via `document.documentElement.dataset.theme`
- Boot script in layout.tsx prevents flash of unstyled content
- Persisted to localStorage key `wacrm.theme`
- Used via `useTheme()` hook or ThemeProvider
- Settings UI has visual picker with swatch cards

## Color Tokens

Each theme defines ~30 CSS variables in globals.css:
- --background, --foreground, --card, --card-foreground
- --primary, --primary-foreground, --primary-hover, --primary-soft
- --secondary, --muted, --accent, --destructive
- --border, --input, --ring
- --chart-1 through --chart-5
- --sidebar, --sidebar-foreground, --sidebar-primary, etc.
- --radius

## Typography
- **Primary Font**: Inter (via next/font/google)
- **Monospace Font**: Geist Mono
- **Heading Font**: Same as sans

## Component Library
22 UI components built on @base-ui/react primitives with lucide-react icons.

## Layout
- Sidebar (w-60) + Header (h-14) + Main content (flex-1, overflow-y)
- Mobile: sidebar slides in as drawer, single-pane views
- Desktop: sidebar always visible, split-pane inbox

## Key UX Patterns
1. Optimistic updates (unread counts)
2. Independent skeleton loading per widget
3. Real-time updates via Supabase Realtime
4. Deep linking (?c=convId)
5. Role-gated UI (GatedButton)
6. No-flash theme boot script
7. Sonner dark toast notifications
