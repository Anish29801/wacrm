# wacrm v1 — Detailed Component Architecture

## UI Components (22 total)
All in src/components/ui/ - built on @base-ui/react primitives:
accordion, alert, avatar, badge, button, card (with Header/Title/Description/Content/Footer/Action), dialog (with Trigger/Content/Header/Footer/Overlay/Portal/Close), dropdown-menu (with Trigger/Content/Item/Separator), gated-button, input, label, popover, radio-group, scroll-area, select, separator, sheet, switch, table, tabs, textarea, tooltip

## Layout Components
- Sidebar: Nav items, beta badges, unread dots, user dropdown, role chip
- Header: Page title, hamburger (mobile), user dropdown
- DashboardShell: Auth-gated wrapper, loading state

## Dashboard Page
- Metric cards (active convos, new contacts, deal value, messages sent)
- Conversations chart (7/30/90 day range tabs)
- Pipeline donut chart, Response time chart, Activity feed
- Independent skeleton loading per widget

## Inbox Page
- Real-time conversation list with unread counts
- Message thread with status tracking
- Contact sidebar (desktop only)
- Deep linking via ?c=<convId>
- WhatsApp connection banner
- Mobile: single-pane view (list OR thread)
- Optimistic unread reset, reconnect + visibility refetch logic

## Contacts Page
- Searchable table with pagination (25/page)
- Tags display, custom fields, CSV import
- CRUD operations with modals
- Deduplication on phone number

## Pipelines Page
- Kanban board with drag-and-drop (dnd-kit)
- Deal forms, pipeline settings, analytics

## Broadcasts Page
- 4-step wizard: Choose template -> Select audience -> Personalize -> Schedule & Send
- Delivery tracking per recipient

## Automations Page
- Visual automation builder with triggers and step types
- Execution logs with per-step status

## Flows Page
- Flow builder with XYFlow canvas
- Node configuration forms, validation panel
- Flow activation/deactivation

## Settings Page
- Profile form, password change, avatar upload
- WhatsApp config with registration flow
- Message templates with Meta sync
- Pipeline management, Tags, Custom fields
- Members tab with role management, Invite link generation
- Appearance/theme picker, Sessions management
