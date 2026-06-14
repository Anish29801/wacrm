# wacrm v1 — Architecture Overview

## Project Identity
- **Name**: wacrm v1 (originally "wacrm")
- **Description**: Self-hostable CRM template for WhatsApp built on Next.js and Supabase — shared inbox, contacts, sales pipelines, broadcasts, and no-code automations.
- **Original Author**: Arnas Donauskas
- **License**: MIT
- **Stack**:
  - **App**: Next.js 16 (App Router), React 19, TypeScript 6, Tailwind CSS v4
  - **Data**: Supabase (Postgres + Auth + Storage + RLS)
  - **WhatsApp**: Meta Cloud API (official WhatsApp Business API)

## Directory Structure

```
wacrm/
├── .env.local.example          # Environment variable template
├── .github/                    # CI workflows, templates, security policy
├── AGENTS.md                   # AI agent instructions
├── CLAUDE.md                   # Claude-specific instructions
├── CHANGELOG.md
├── CONTRIBUTING.md
├── components.json             # shadcn/ui configuration
├── eslint.config.mjs
├── next.config.ts              # Next.js config with security headers + caching
├── package.json
├── postcss.config.mjs          # Tailwind v4 PostCSS config
├── tsconfig.json               # TypeScript config with @/ alias
├── vitest.config.ts
├── public/                     # Static assets (SVGs)
├── ai_context/                 # AI context documentation
├── supabase/
│   └── migrations/             # 22 SQL migration files (001-022)
└── src/
    ├── app/                    # Next.js App Router
    │   ├── globals.css         # Global styles + theme CSS variables
    │   ├── layout.tsx          # Root layout (Inter font, ThemeProvider, Toaster)
    │   ├── page.tsx            # Root → redirect to /dashboard
    │   ├── icon.tsx            # Favicon
    │   ├── (auth)/             # Auth route group
    │   ├── (dashboard)/        # Dashboard route group
    │   ├── api/                # API route handlers
    │   └── join/               # Invite join pages
    ├── components/
    │   ├── auth/               # Role-gating components
    │   ├── automations/        # Automation builder
    │   ├── broadcasts/         # 4-step broadcast wizard
    │   ├── contacts/           # Contact management
    │   ├── dashboard/          # Dashboard widgets
    │   ├── flows/              # Flow builder (canvas, node config)
    │   ├── inbox/              # Full inbox system
    │   ├── layout/             # Sidebar + Header
    │   ├── pipelines/          # Kanban board + deal management
    │   ├── settings/           # All settings panels
    │   ├── tremor/             # Recharts wrapper components
    │   └── ui/                 # shadcn/ui base components (22 components)
    ├── hooks/                  # 6 custom hooks
    ├── lib/                    # Business logic, clients, utilities
    ├── types/                  # TypeScript interfaces
    └── middleware.ts           # Supabase auth middleware
```

## Key Architecture Decisions

1. **App Router with Route Groups**: Uses (auth) and (dashboard) route groups
2. **Client-Server Split**: Layouts = server, shells = client
3. **Supabase Auth**: Middleware-based session handling
4. **Theme System**: CSS custom properties with data-theme attribute
5. **Component Library**: shadcn/ui with @base-ui/react primitives
6. **Real-time**: Supabase Realtime for inbox, dashboard
