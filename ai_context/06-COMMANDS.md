# wacrm v1 — Commands & Scripts

## Development
npm run dev          # next dev
npm run build        # next build
npm run start        # next start

## Code Quality
npm run lint         # ESLint
npm run typecheck    # tsc --noEmit
npm run format       # Prettier
npm run format:check # Prettier check

## Testing
npm run test         # Vitest
npm run test:watch   # Watch mode

## Setup
git clone <repo>
npm install
cp .env.local.example .env.local
npm run dev

## Required Env Vars
NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY, SUPABASE_SERVICE_ROLE_KEY, ENCRYPTION_KEY, META_APP_SECRET

## Deployment
Hostinger (recommended), Vercel, Railway, or any Node.js host.
