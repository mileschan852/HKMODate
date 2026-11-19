# HKMO Date launch shell

This public repository holds the HKMO Date launch page, its public config, and
wallet manifest. The shared interface is maintained in the
[Who's Nearby GUI template](https://github.com/mileschan852/WhosNearbyBot).

## Current production deployment

The live Pages URL remains
`https://mileschan852.github.io/HKMODate/`. The current source is still
`main:/docs`; editing `docs/config.json` and pushing to `main` continues to
publish the HKMO Date shell. GitHub’s Pages settings confirmed this branch-based
source on 20 November 2026.

## GitHub Actions validation

`.github/workflows/pages.yml` validates the shell and uploads a Pages artifact.
Its Actions deploy job is currently skipped because
`HKMODATE_PAGES_ACTIONS_ENABLED` is not configured. This does not disable the
existing automatic `main:/docs` deployment.

No Pages source change is part of this audit. See
[`docs/pages-actions-migration.md`](docs/pages-actions-migration.md) before
changing the production deployment method.

To update the entry, edit `docs/config.json` for HKMO Date's public
entry/profile settings. The shared interface is maintained in the
[Who's Nearby GUI template](https://github.com/mileschan852/WhosNearbyBot).

To change shared screens or optional sections, update the Who's Nearby GUI
template. This repository does not contain another copy of the React app.

The config is public and contains no credentials. The existing app uses the
shared server for account access, payments, and production data; changing
presentation settings does not create a separate backend.
