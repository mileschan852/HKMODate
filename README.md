# HKMO Date launch shell

This public repository holds the HKMO Date launch page, its public config, and
wallet manifest. The shared interface is maintained in the
[Who's Nearby GUI template](https://github.com/mileschan852/WhosNearbyBot).

## Current production deployment

The live Pages URL remains
`https://mileschan852.github.io/HKMODate/`. The current source is still
`main:/docs`; editing `docs/config.json` and pushing to `main` continues to
publish the HKMO Date shell.

## Optional GitHub Actions workflow

`.github/workflows/pages.yml` validates the shell and can deploy the existing
`docs/` output through GitHub Actions. Deployment remains disabled unless the
repository variable `HKMODATE_PAGES_ACTIONS_ENABLED` is explicitly set to
`true`. Adding the workflow does not change the current Pages source.

Do not switch the Pages source until the workflow has been reviewed and the
owner approves the migration. See
[`docs/pages-actions-migration.md`](docs/pages-actions-migration.md) for the
settings sequence and rollback steps.

To update the entry, edit `docs/config.json` for HKMO Date's public
entry/profile settings. The shared interface is maintained in the
[Who's Nearby GUI template](https://github.com/mileschan852/WhosNearbyBot).

To change shared screens or optional sections, update the Who's Nearby GUI
template. This repository does not contain another copy of the React app.

The config is public and contains no credentials. The existing app uses the
shared server for account access, payments, and production data; changing
presentation settings does not create a separate backend.
