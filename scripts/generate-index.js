#!/usr/bin/env node
/**
 * generate-index.js
 *
 * Standalone Node.js script that scans the news/, members/, and publications/
 * folders, parses the YAML-like front matter from each Markdown file, sorts,
 * and writes a JSON index (news/index.json, members/index.json,
 * publications/index.json).
 *
 * Sorting rules:
 *   - news/ and publications/ : sorted by filename (numeric prefix order).
 *   - members/                 : sorted by numeric `sort` field, falling back
 *                                to filename.
 *
 * No external dependencies — runs on a plain Node.js runtime in GitHub Actions.
 *
 * Front matter format (between `---` delimiters):
 *   key: value
 * Bilingual fields use `_zh` / `_en` suffixes, e.g. title_zh / title_en.
 * The index stores every front matter field as-is plus a `file` field holding
 * the filename so the frontend can fetch the corresponding .md file.
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..", "..");

/**
 * Parse the YAML-like front matter block at the top of a Markdown file.
 * Returns { data, body } where `data` is a flat object of key -> value.
 */
function parseFrontMatter(md) {
  const match = md.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return { data: {}, body: md };
  const fmText = match[1];
  const body = md.slice(match[0].length).replace(/^\r?\n/, "");
  const data = {};
  fmText.split(/\r?\n/).forEach((line) => {
    const m = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
    if (!m) return;
    let key = m[1];
    let val = m[2].trim();
    // Strip surrounding single or double quotes if present
    if (
      (val.startsWith('"') && val.endsWith('"')) ||
      (val.startsWith("'") && val.endsWith("'"))
    ) {
      val = val.slice(1, -1);
    }
    data[key] = val;
  });
  return { data, body };
}

/**
 * Scan a folder for .md files, parse front matter, sort, and return a JSON
 * array. Each entry includes a `file` field with the filename and a `body`
 * field holding the Markdown body (if any).
 *
 * `sortBy` controls ordering:
 *   - "sort"     : sort by numeric `sort` field, falling back to filename
 *                  (used for members/).
 *   - "filename" : sort by filename only — useful for folders whose filenames
 *                  carry a numeric prefix (e.g. 01-, 02-) and which do not
 *                  rely on a `sort` field (used for news/ and publications/).
 */
function buildIndex(folder, sortBy) {
  const absFolder = path.join(ROOT, folder);
  if (!fs.existsSync(absFolder)) {
    console.warn(`Folder "${folder}" not found, skipping.`);
    return [];
  }
  const files = fs
    .readdirSync(absFolder)
    .filter((f) => f.toLowerCase().endsWith(".md"))
    .sort();
  const items = files.map((file) => {
    const filePath = path.join(absFolder, file);
    const md = fs.readFileSync(filePath, "utf8");
    const { data, body } = parseFrontMatter(md);
    return {
      ...data,
      sort: data.sort !== undefined ? Number(data.sort) : 9999,
      file,
      body: body.trim(),
    };
  });
  if (sortBy === "filename") {
    // Sort by filename only (numeric prefixes like 01-, 02- sort naturally)
    items.sort((a, b) => a.file.localeCompare(b.file));
  } else {
    // Default: sort ascending by `sort`, falling back to filename
    items.sort((a, b) => {
      if (a.sort !== b.sort) return a.sort - b.sort;
      return a.file.localeCompare(b.file);
    });
  }
  return items;
}

function writeIndex(folder, items) {
  const absFolder = path.join(ROOT, folder);
  if (!fs.existsSync(absFolder)) {
    fs.mkdirSync(absFolder, { recursive: true });
  }
  const outPath = path.join(absFolder, "index.json");
  fs.writeFileSync(outPath, JSON.stringify(items, null, 2) + "\n", "utf8");
  console.log(`Wrote ${outPath} (${items.length} entries)`);
}

// Build news index — sorted by filename (numeric prefix 01-, 02-, 03-...)
const newsItems = buildIndex("news", "filename");
writeIndex("news", newsItems);

// Build people index — sorted by numeric `sort` field (falling back to filename)
const peopleItems = buildIndex("people");
writeIndex("people", peopleItems);

// Build publications index — sorted by filename (numeric prefix 01-, 02-...)
const publicationItems = buildIndex("publications", "filename");
writeIndex("publications", publicationItems);

console.log("Index generation complete.");
