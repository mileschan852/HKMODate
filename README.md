# HKMO Date launch shell and configuration

HKMO Date is a separate Telegram launch shell that uses the shared GUI from [Who's Nearby](https://github.com/mileschan852/WhosNearbyBot). Who's Nearby is the default base template and canonical source for the React GUI, UI modules, styles, and shared asset build. This repository keeps HKMO Date's launch URL and per-site settings; it is not a second GUI template.

## Repository responsibilities

- `docs/config.json` stores HKMO Date's public entry and profile setup settings.
- `docs/index.html` loads the stable shared GUI assets published by Who's Nearby.
- `docs/tonconnect-manifest.json` is the public wallet manifest named in the config.
- The shared GUI, modules, and styles are edited in [Who's Nearby](https://github.com/mileschan852/WhosNearbyBot).
- The private Worker, Supabase migrations, and server-side rules are maintained separately in `dating-app-backend`.

For the complete list of config fields and a working example, read [HKMO Date configuration](configuration.md). For the shared module boundaries, see [GUI modules](gui-modules.md).

## Editing and publishing

Edit this repository's `docs/config.json` only for HKMO Date-specific settings such as entry routing, profile defaults, and its wallet manifest URL. Push to `main`; GitHub Pages serves `main:/docs` and keeps the public launch URL at https://mileschan852.github.io/HKMODate/.

To change the GUI or replace a module, edit and push `mileschan852/WhosNearbyBot`. Its Pages build publishes the stable shared assets consumed by this loader; do not copy the React source or edit generated bundles here. Existing browser caches may take up to 10 minutes to refresh shared assets.

## Security boundary

The config is public. Do not put credentials, bot tokens, backend URLs, Supabase values, or server-side rules in this repository. The app continues to use the authenticated Worker API and existing production data. Public presentation settings do not grant access to production secrets or let a fork change production data.
