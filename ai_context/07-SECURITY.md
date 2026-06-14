# wacrm v1 — Security

## Security Headers
- HSTS: max-age=63072000; includeSubDomains; preload
- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- Permissions-Policy: camera/mic/geo/payment/usb denied
- CSP: Report-Only mode (self + supabase)

## Env Security
- SUPABASE_SERVICE_ROLE_KEY: server-only
- ENCRYPTION_KEY: AES-256-GCM for WhatsApp tokens
- META_APP_SECRET: HMAC webhook verification

## RLS
Every table has RLS. Multi-account tenancy since migration 017.

## Middleware
- Redirects unauthenticated to /login
- Protects dashboard routes /api/whatsapp/* (except webhook)

## Role-Based Access
4 tiers: owner, admin, agent, viewer. Capability helpers in roles.ts.

## Rate Limiting
src/lib/rate-limit.ts with tests.

## Dependencies
Security overrides for postcss, ip-address, fast-uri, hono.
