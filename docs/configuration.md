# HKMO Date configuration reference

This repository's config defines HKMO Date's own public entry. The GUI itself comes from [Who's Nearby](https://github.com/mileschan852/WhosNearbyBot), which is the default base template and canonical source for shared app code. Keep HKMO Date's config at `docs/config.json`; it is fetched from the HKMO Date site origin by its loader.

## How entry selection works

The runtime checks a matching Telegram Mini App start parameter in `startParamEntries` first, then a matching URL query parameter/value in `queryEntries`, then falls back to `defaultEntryId`. `defaultStartParam` is used as a fallback when Telegram does not provide a start parameter; it must map through `startParamEntries` to select a non-default entry.

## Supported settings

The runtime schema is shared with Who's Nearby. Required fields and accepted values are:

| Setting | Required | Accepted value and effect |
| --- | --- | --- |
| `version` | Yes | Must be the number `1`. |
| `defaultEntryId` | Yes | An entry key that exists under `entries`. Used after route mappings fail. |
| `defaultStartParam` | No | A string used only when Telegram provides no start parameter. It should exist in `startParamEntries`. |
| `tonConnectManifestUrl` | Yes | Absolute HTTPS URL for this site's public wallet manifest. |
| `startParamEntries` | No | Object mapping Telegram start parameter strings to existing entry IDs. |
| `queryEntries` | No | Nested mapping of query parameter to query value to existing entry ID. |
| `entries` | Yes | Object of entry settings; each key must match that entry's `id`. |

Each entry requires:

| Setting | Required | Accepted value and effect |
| --- | --- | --- |
| `id` | Yes | Same string as the containing entry key. |
| `label` | Yes | Non-empty display label. |
| `botKey` | Yes | `botA` or `botB`, internal aliases understood by the existing Worker. HKMO Date currently uses `botA`. They are not bot usernames or tokens; don't change the alias unless the Worker is configured for it. |
| `chatUrl` | Yes | Absolute HTTPS public chat URL. It is currently validated but is not used by the GUI to create profile chat links. |
| `useConfiguredLabelForHeader` | No | Boolean, defaults to `false`. If true, the header uses this entry's label; otherwise it uses the translated generic Who's Nearby label. |
| `profileSetup` | Yes | Profile-completion defaults and display settings described below. |

The required `profileSetup` fields are:

| Setting | Accepted value and effect |
| --- | --- |
| `titleKey` | Existing translation key for the page title. The current key is `completeProfile`. Add any new key to the app's translation dictionaries before using it. |
| `warningKey` | Existing translation key for the warning text. The current key is `profileWarning`. |
| `defaultGender` | `man`, `woman`, or `non-binary`. Used only when the profile has no saved gender. |
| `defaultSeeking` | `men`, `women`, or `everyone`. Used only when the profile has no saved seeking value. |
| `lockIdentity` | Boolean. When true, disables the gender and seeking controls in the UI; this is not an authorization or server-side rule. |
| `sectionOrder` | Array ordered from `birthdate`, `identity`, `measurements`, `preferences`, `mode`. This changes order, not visibility: omitted sections are appended and duplicates are removed. |

Existing saved gender and seeking values take precedence over the defaults. The config must be valid JSON (no comments or trailing commas), and every route mapping must point to an entry that exists.

## Current HKMO Date config

This is the complete config currently served from `docs/config.json`:

```json
{
  "version": 1,
  "defaultEntryId": "hkmo-date",
  "defaultStartParam": "gaymode",
  "tonConnectManifestUrl": "https://mileschan852.github.io/HKMODate/tonconnect-manifest.json",
  "startParamEntries": {
    "gaymode": "hkmo-date"
  },
  "queryEntries": {
    "mode": {
      "gay": "hkmo-date"
    }
  },
  "entries": {
    "hkmo-date": {
      "id": "hkmo-date",
      "label": "HKMO Date",
      "botKey": "botA",
      "chatUrl": "https://t.me/hkmochat",
      "useConfiguredLabelForHeader": true,
      "profileSetup": {
        "titleKey": "completeProfile",
        "warningKey": "profileWarning",
        "defaultGender": "man",
        "defaultSeeking": "men",
        "lockIdentity": true,
        "sectionOrder": ["birthdate", "identity", "measurements", "preferences", "mode"]
      }
    }
  }
}
```

## Publish and safety

Push changes to `main`. GitHub Pages serves this repo from `main:/docs`, so edits to `docs/config.json` publish with this shell while preserving the existing URL https://mileschan852.github.io/HKMODate/.

For shared UI/module/style changes, push `mileschan852/WhosNearbyBot`; its Pages build publishes the stable JS/CSS assets used by this loader. Do not edit generated GUI bundles or copy React source here. Cached shared assets may take up to 10 minutes to refresh.

All config values are public. Never add bot tokens, Supabase keys/URLs, credentials, private API endpoints, or server-side rules. The private backend enforces authentication and is authoritative for production data, payments, raffle rules, eligibility, and permissions.
