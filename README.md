# HKMO Date launch shell

This public repository holds the HKMO Date launch page, its public config, and
wallet manifest. The shared interface is maintained in the
[Who's Nearby GUI template](https://github.com/mileschan852/WhosNearbyBot).

## Deploy or update this entry

1. Edit `docs/config.json` only for HKMO Date's visible entry/profile settings.
2. Push the change to `main`. GitHub Pages serves the shell from `main:/docs`.
3. Check the Pages deployment and open the published entry.

To change shared screens or optional sections, update the Who's Nearby GUI
template. This repository does not contain another copy of the React app.

The config is public and contains no credentials. The existing app uses the
shared server for account access, payments, and production data; changing
presentation settings does not create a separate backend.
