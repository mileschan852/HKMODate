# HKMO Date launch shell and configuration

This repository keeps the existing HKMO Date GitHub Pages URL and its public entry configuration. It does not contain a duplicate React app or the private production backend.

## Files to maintain

- docs/config.json contains this site's public entry and profile-setup defaults.
- docs/index.html loads the shared GUI from the Who's Nearby template host.
- docs/tonconnect-manifest.json is the wallet manifest configured by docs/config.json.

To change the interface or app modules, update the shared GUI in mileschan852/WhosNearbyBot. Its Pages build publishes stable shared JS/CSS assets; this HKMO Date loader then uses those assets without copying or rebuilding the GUI here.

Changes to docs/config.json are limited to public presentation and profile defaults. Do not put credentials, a backend URL, bot tokens, Supabase values, or server-side rules in this repository. The app continues to use the same authenticated Worker API and production data.

The Pages source is main/docs, so changes to these files are published from the main branch while the launch URL remains https://mileschan852.github.io/HKMODate/.
