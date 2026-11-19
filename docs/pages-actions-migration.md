# GitHub Pages Actions workflow

## Current live state

The public HKMO Date URL remains
`https://mileschan852.github.io/HKMODate/`. The live Pages source is still
`main:/docs` (branch publishing). The workflow does not change that setting.
Its deployment job remains skipped unless the repository variable
`HKMODATE_PAGES_ACTIONS_ENABLED` is explicitly set to `true`.

Verified on 20 November 2026 through GitHub’s Pages and Actions APIs: Pages is
set to `main:/docs`; the repository variable is absent; the latest workflow's
build job succeeded and its Actions deploy job was skipped. The existing
branch-based Pages publication remains the production path and continues on
pushes to `main`.

The workflow validates the shell and manifest and uploads the current `docs/`
output. Its optional Actions deployment requires both the repository variable
and a manual workflow-dispatch approval. It retains the existing page title,
TonConnect manifest, fallback GUI version, and icon URL.

The workflow pins its GitHub Actions to commit SHAs. No Pages setting is
changed by this repository update.

## Required settings before switching

Do not change these live settings until the replacement workflow has been
reviewed and the repository owner approves the migration.

1. In **Settings → Pages → Build and deployment**, change **Source** from
   **Deploy from a branch** to **GitHub Actions**.
2. In **Settings → Secrets and variables → Actions → Variables**, set the
   repository variable `HKMODATE_PAGES_ACTIONS_ENABLED` to `true`.
3. Run **Build and deploy HKMO Date Pages** from **Actions → Run workflow** on
   `main` with `deploy` checked. This gives the first Actions deployment an
   explicit manual approval step.
4. Verify the published URL, TonConnect manifest, and Telegram launch. Later
   changes to `main` affecting `docs/` or the workflow deploy automatically.

Keep any required reviewers or deployment restrictions on the `github-pages`
environment. The repository variable is a release gate, not a credential.

## Rollback

1. Remove `HKMODATE_PAGES_ACTIONS_ENABLED` or set it to `false`.
2. In **Settings → Pages → Build and deployment**, select **Deploy from a
   branch**, branch `main`, folder `/docs`, then save.
3. Confirm the existing URL and manifest remain available.
4. Keep the workflow in place for review; with the variable unset or false,
   its deploy job remains skipped.
