# wacrm v1 — API Routes

## Account Management
| Route | Method | Purpose |
|-------|--------|---------|
| /api/account | GET/PUT | Get/update account |
| /api/account/invitations | POST | Create invitation |
| /api/account/invitations/[id] | DELETE | Revoke invitation |
| /api/account/members | GET | List members |
| /api/account/members/[userId] | PATCH/DELETE | Update/remove member |
| /api/account/transfer-ownership | POST | Transfer ownership |

## Invitations
| /api/invitations/[token]/peek | GET | Preview invitation |
| /api/invitations/[token]/redeem | POST | Accept invitation |

## Automations
| /api/automations | GET/POST | List/create |
| /api/automations/[id] | GET/PUT/DELETE | CRUD |
| /api/automations/[id]/duplicate | POST | Duplicate |
| /api/automations/engine | POST | Execute engine |
| /api/automations/cron | GET | Cron trigger |

## Flows
| /api/flows | GET/POST | List/create |
| /api/flows/[id] | GET/PUT/DELETE | CRUD |
| /api/flows/[id]/activate | POST | Activate/deactivate |
| /api/flows/[id]/runs | GET | List runs |
| /api/flows/cron | GET | Cron trigger |
| /api/flows/templates | GET | List templates |

## WhatsApp
| Route | Method | Purpose |
|-------|--------|---------|
| /api/whatsapp/config | GET/POST | Config CRUD |
| /api/whatsapp/config/verify-registration | POST | Verify registration |
| /api/whatsapp/send | POST | Send message |
| /api/whatsapp/webhook | GET/POST | Webhook verify + receive |
| /api/whatsapp/media/[mediaId] | GET | Get media |
| /api/whatsapp/templates/[id] | GET/PUT/DELETE | Template CRUD |
| /api/whatsapp/templates/submit | POST | Submit to Meta |
| /api/whatsapp/templates/sync | POST | Sync from Meta |
| /api/whatsapp/react | POST | Send reaction |
| /api/whatsapp/broadcast | POST | Trigger broadcast |

## Caching
- /api/* -> no-store
- Other routes -> public, s-maxage=300, stale-while-revalidate=86400
- Security headers on all routes
