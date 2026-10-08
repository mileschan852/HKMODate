# HKMO Date launch shell and shared GUI

## Base template

[Who's Nearby](https://github.com/mileschan852/WhosNearbyBot) is the default base template and canonical source for the shared React GUI, replaceable modules, styles, and stable asset build. HKMO Date keeps its own public launch URL and per-site configuration, then loads the shared GUI from that host. Do not copy or maintain a duplicate GUI in this repository.

## Files and responsibilities

| File | Responsibility |
| --- | --- |
| `docs/index.html` | HKMO Date loader that imports the stable JS/CSS published by Who's Nearby. |
| `docs/config.json` | Same-origin entry routing, profile-completion defaults, and manifest URL. |
| `docs/tonconnect-manifest.json` | Public TON Connect manifest. |

For every setting, routing precedence, accepted value, and a complete JSON example, see [HKMO Date configuration](configuration.md). This uses the same config contract documented in [Who's Nearby's configuration reference](https://github.com/mileschan852/WhosNearbyBot/blob/main/docs/configuration.md).

## Change guide

- Change HKMO Date's display name, profile defaults, identity-selector presentation, wallet manifest URL, or route mapping in `docs/config.json`.
- Change the GUI, shared modules, or styles in `mileschan852/WhosNearbyBot`, then push that repo's `main` branch. The shared Pages build generates the stable assets automatically.
- Keep this shell's shared asset URLs pointed at the Who's Nearby Pages host. Keep the HKMO config on the HKMO Date origin so its existing Telegram entrance resolves to the HKMO entry.
- Do not use `lockIdentity`, a UI module, or a public config value as an authorization or eligibility check. The Worker remains responsible for authentication, data access, payments, raffle rules, roles, and prizes.

HKMO Date's GitHub Pages source is `main:/docs`. Push changes to this repository's `main` branch to publish this shell/config. Shared GUI changes are published by the Who's Nearby repo; there is no HKMO GUI rebuild.
