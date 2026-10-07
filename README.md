# HKMO Date GUI

Public React/TypeScript source for the HKMO Date Telegram Mini App. This repository is the independently deployed GUI shell; it does not contain the production backend.

## Architecture

HKMO Date and Who's Nearby use the same application shell and shared Cloudflare Worker/Supabase data. The Worker implementation, database migrations, server-side prize rules, and credentials remain in the private `dating-app-backend` repository. This repository deploys the HKMO Date GUI to GitHub Pages.

## Customize the interface

- `src/config/entries.ts` controls the profile setup and default entry for this deployment (`hkmo-date`).
- `src/modules/` contains replaceable profile-completion, nearby-grid, map, and bottom-navigation modules.
- `src/index.css` contains the app styles.

GUI changes affect this deployment only. They do not change production database contents, raffle rules, prize pools, or server permissions. Public source cannot stop someone from editing a fork, but a fork does not inherit production credentials or backend access.

See [GUI module contracts](docs/gui-modules.md). Do not add Supabase service credentials, Telegram bot tokens, or server-only business rules to this repository.

## Development

```bash
npm install
npm run dev
npm run build
npm run lint
```
