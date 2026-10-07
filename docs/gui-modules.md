# HKMO Date configuration

This site keeps the HKMO Date launch URL and supplies its own public config.json. The small index page loads the shared GUI from the Who's Nearby template host. There is no duplicate React source or local GUI build to maintain here.

The config file selects the HKMO Date entry, maps the Telegram gaymode start parameter and mode=gay URL, and provides the profile defaults for this entrance. It contains no backend URL or secret. Server rules, authentication, raffle behavior, database access, and permissions remain in the private backend.

To change the GUI or its modules, edit mileschan852/WhosNearbyBot and publish that template. Keep this repository's loader pointed at the stable shared asset URLs so the existing Telegram launch links continue to work.
