import { access, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repositoryRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const docsRoot = path.join(repositoryRoot, "docs");
const expectedSiteUrl = "https://mileschan852.github.io/HKMODate/";
const expectedSharedGuiUrl = "https://mileschan852.github.io/WhosNearbyBot";

async function readDocsFile(name) {
  return readFile(path.join(docsRoot, name), "utf8");
}

async function main() {
  const [manifestText, configText, indexHtml] = await Promise.all([
    readDocsFile("tonconnect-manifest.json"),
    readDocsFile("config.json"),
    readDocsFile("index.html"),
  ]);
  const manifest = JSON.parse(manifestText);
  const config = JSON.parse(configText);
  const errors = [];

  if (manifest.url !== expectedSiteUrl) {
    errors.push(`tonconnect-manifest.json must keep the public URL ${expectedSiteUrl}.`);
  }
  if (manifest.iconUrl !== `${expectedSiteUrl}favicon.png`) {
    errors.push("tonconnect-manifest.json must keep its icon relative to the HKMO Date Pages URL.");
  }
  if (config.tonConnectManifestUrl !== `${expectedSiteUrl}tonconnect-manifest.json`) {
    errors.push("config.json must keep the TonConnect manifest on the existing HKMO Date Pages URL.");
  }
  if (!indexHtml.includes("<title>HKMO Date</title>")) {
    errors.push("docs/index.html must retain the HKMO Date page title.");
  }
  if (!indexHtml.includes(expectedSharedGuiUrl)) {
    errors.push("docs/index.html must continue loading the shared Who's Nearby GUI.");
  }
  if (!/fallbackVersion\s*=\s*["'][0-9a-f]{40}["']/i.test(indexHtml)) {
    errors.push("docs/index.html must retain a 40-character shared-GUI fallback version.");
  }

  for (const name of ["index.html", "config.json", "tonconnect-manifest.json", "favicon.png", ".nojekyll"]) {
    try {
      await access(path.join(docsRoot, name));
    } catch {
      errors.push(`The Pages output is missing docs/${name}.`);
    }
  }

  if (errors.length > 0) {
    console.error(`HKMO Date Pages validation failed with ${errors.length} issue(s):`);
    for (const error of errors) console.error(`- ${error}`);
    process.exitCode = 1;
    return;
  }
  console.log(`HKMO Date Pages content is ready for ${expectedSiteUrl}.`);
}

await main();
