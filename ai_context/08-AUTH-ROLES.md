# wacrm v1 — Authentication & Authorization

## Auth Flow
1. Supabase Auth (email/password)
2. Middleware reads session, protects routes
3. AuthProvider (use-auth.tsx) manages client state
4. DB trigger auto-creates profile on signup

## Role System
| Role | Rank | Permissions |
|------|------|------------|
| owner | 4 | Everything + delete/transfer |
| admin | 3 | Manage members + settings |
| agent | 2 | Send messages + manage content |
| viewer | 1 | Read-only |

## Capability Helpers (roles.ts)
- canManageMembers() - admin+
- canEditSettings() - admin+
- canSendMessages() - agent+
- canViewOnly() - viewer
- canDeleteAccount() / canTransferOwnership() - owner
- hasMinRole(role, min) - generic check

## UI Integration
- GatedButton component
- useCan('send-messages') hook
- Conditional settings panels

## Account System
- Multi-tenant after migration 017
- Invite via shareable links
- Ownership transfer
