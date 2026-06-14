# wacrm v1 — Database Schema

## Core Tables (Migration 001)
profiles, contacts, tags, contact_tags, custom_fields, contact_custom_values, contact_notes, conversations, messages, message_templates, whatsapp_config, pipelines, pipeline_stages, deals, broadcasts, broadcast_recipients

## Later Tables
- message_reactions (009)
- automations, automation_steps, automation_logs (006)
- flows, flow_steps, flow_runs (010)
- accounts, account_invitations (017)

## Migration History (22 files)
1. 001 - Initial schema
2. 002 - Pipeline enhancements
3. 003 - Broadcast WAMID tracking
4. 004 - Contact delete SET NULL
5. 005 - Incremental broadcast counts
6. 006 - Automations engine
7. 007 - Automation counter
8. 008 - Avatar storage
9. 009 - Message reactions
10. 010 - Flows engine
11. 011 - Beta features
12. 012 - Flows counter
13. 013 - WhatsApp unique phone
14. 014 - Meta template integration
15. 015 - Registration fields
16. 016 - Flow media
17. 017 - Account sharing (multi-tenant)
18. 018 - Member RPCs
19. 019 - Invitation RPCs
20. 020 - Account sharing followups
21. 021 - Default currency
22. 022 - Phone dedup

## RLS
All tables use Row Level Security. Pre-017: auth.uid() = user_id. Post-017: account-based tenancy.

## Triggers
- update_updated_at_column() - auto updates updated_at
- handle_new_user() - auto-creates profile on signup
