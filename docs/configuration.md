# HKMO Date entry settings

The HKMO Date launch page reads its public settings from `docs/config.json`.
The full configuration contract is maintained privately with the backend; this
page covers the common template-user changes.

You can edit visible settings such as the entry label, Chat destination,
external star-menu actions, profile setup defaults, and optional GUI sections.
The raffle ticket stays first in the star menu. Keep the existing entry ID and
bot identity setting unchanged.

The `modules` settings can independently toggle `gridFilter`, `map`,
`starRaffle`, and `flyingMessage`; omitted settings default to enabled.

Keep the file valid JSON and do not add tokens, keys, database settings, or
other credentials. These settings do not change the shared backend, production
data, payment rules, prizes, or server access.

Push `docs/config.json` to `main` to publish the HKMO Date shell/config from
`main:/docs`. For changes to shared screens, modules, or styles, update
Who's Nearby instead; its Pages build publishes the assets loaded by this
shell.
