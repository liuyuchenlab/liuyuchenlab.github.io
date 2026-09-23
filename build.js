#!/usr/bin/env node
/**
 * build.js
 *
 * Scans news/, people/, publications/, research/ folders, parses front matter
 * from each Markdown file, and writes a single inlined data file at
 * js/data.js containing window.__SITE_DATA__.
 *
 * Pages read from window.__SITE_DATA__ directly (zero runtime network requests),
 * eliminating fetch latency. A GitHub Action runs this on every push to MD
 * folders and commits the regenerated data.js automatically.
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname);

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
    items.sort((a, b) => a.file.localeCompare(b.file));
  } else {
    items.sort((a, b) => {
      if (a.sort !== b.sort) return a.sort - b.sort;
      return a.file.localeCompare(b.file);
    });
  }
  return items;
}

const news = buildIndex("news", "filename");
const people = buildIndex("people", "sort");
const publications = buildIndex("publications", "filename");
const research = buildIndex("research", "sort");

const siteData = { news, people, publications, research };
const js = `window.__SITE_DATA__ = ${JSON.stringify(siteData, null, 2)};\n`;

const outDir = path.join(ROOT, "js");
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "data.js"), js, "utf8");

console.log(
  `Built js/data.js: news=${news.length} people=${people.length} ` +
    `publications=${publications.length} research=${research.length}`
);
