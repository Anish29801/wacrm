# wacrm v1 — Hooks & Library Modules

## Custom Hooks
- useAuth: Auth context (user, profile, account, role, signOut)
- useTheme: Theme context (current theme, setTheme, cross-tab sync)
- useCan: Permission check (useCan('send-messages'))
- useRealtime: Supabase Realtime for messages + conversations
- useTotalUnread: Aggregate unread count
- useBroadcastSending: Broadcast send state management

## Library Modules
- lib/utils.ts: cn() - clsx + tailwind-merge
- lib/themes.ts: Theme catalog (5 themes), storage key, type guard
- lib/currency.ts: formatCurrency(), DEFAULT_CURRENCY='USD'
- lib/rate-limit.ts: Rate limiting utility

## Auth Library (lib/auth/)
- roles.ts: Role types, rank, capability predicates
- account.ts: Account CRUD
- invitations.ts: Invite link creation + redemption

## Supabase Clients (lib/supabase/)
- client.ts: Singleton browser client
- server.ts: Server component client with cookies

## WhatsApp Library (lib/whatsapp/)
- encryption.ts: AES-256-GCM token encryption
- meta-api.ts: Meta Cloud API client
- webhook-signature.ts: HMAC-SHA256 verification
- phone-utils.ts: Phone formatting
- template-*.ts: Template lifecycle, validation, send builder

## Automation Library (lib/automations/)
- engine.ts: Execution engine
- validate.ts: Config validation
- meta-send.ts: Meta API send wrapper
- templates.ts, steps-tree.ts, trigger-meta.ts, admin-client.ts

## Flow Library (lib/flows/)
- engine.ts: Flow execution engine
- validate.ts: Flow validation, edges.ts: Edge validation
- layout.ts: Auto-layout algorithm
- meta-send.ts: Meta API send
- templates.ts, fallback.ts, admin-client.ts, types.ts

## Dashboard Library (lib/dashboard/)
- queries.ts: Dashboard data queries
- types.ts: Dashboard types
- date-utils.ts: Date range utilities
