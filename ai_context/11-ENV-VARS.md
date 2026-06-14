# wacrm v1 — Environment Variables

## Required
- NEXT_PUBLIC_SUPABASE_URL: Supabase project URL
- NEXT_PUBLIC_SUPABASE_ANON_KEY: Supabase anon key
- SUPABASE_SERVICE_ROLE_KEY: Server-only service role key
- ENCRYPTION_KEY: 64 hex chars (AES-256-GCM) for WhatsApp tokens
- META_APP_SECRET: Meta App Secret for webhook verification

## Recommended
- NEXT_PUBLIC_SITE_URL: Canonical public URL

## Optional
- ALLOWED_INVITE_HOSTS: Hostname allow-list for invite URLs
- AUTOMATION_CRON_SECRET: Shared secret for automation cron
- META_APP_ID: Meta App ID for resumable upload
- WHATSAPP_TEMPLATES_DRY_RUN: Skip Meta API for templates (CI/dev)

## Key Generation
Encryption key: node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
Cron secret: openssl rand -hex 32
