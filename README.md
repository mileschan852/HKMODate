# HKMO Date GUI

Public React/TypeScript source for the HKMO Date Telegram Mini App. This repository is the independently deployed GUI shell; it does not contain the production backend.

## Architecture

HKMO Date and Who's Nearby share the application shell and production services. The Worker implementation, database operations, prize rules, and server-side credentials are maintained separately and are not included here.

## Customize the interface

- `src/config/entries.ts` selects the HKMO Date profile setup for this deployment.
- `src/modules/` contains the replaceable profile-completion, nearby-grid, map, and navigation modules.
- `src/index.css` contains the app styles.

GUI changes affect this deployment only. They do not change the production database, prize pools, or server permissions. A fork can change its own interface, but does not inherit production credentials or backend access.

See [GUI module contracts](docs/gui-modules.md). Do not add Supabase service credentials or Telegram bot tokens to this public repository.

## Publishing

GitHub Pages serves the prebuilt site from `main/docs`. Changes to the GUI source do not appear on the live site until the build output is refreshed. Run `npm run build`, copy the generated `dist` files into `docs/` without removing `docs/gui-modules.md`, then commit and push.

## Development

```bash
npm install
npm run dev
npm run build
npm run lint
```
