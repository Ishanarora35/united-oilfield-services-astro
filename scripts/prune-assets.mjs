/**
 * Astro emits the original imported image files into dist/_astro/ alongside the
 * responsive variants it generates, even when nothing references them. This scans
 * every built HTML/CSS/JS file for referenced asset filenames and removes the rest.
 */
import { readdir, readFile, stat, unlink } from 'node:fs/promises';
import { join, extname, basename } from 'node:path';

const DIST = new URL('../dist/', import.meta.url).pathname;
const ASSET_DIR = join(DIST, '_astro');
const SCAN_EXT = new Set(['.html', '.css', '.js', '.xml', '.txt', '.json']);
// Never prune fonts: they are referenced from CSS via relative URLs already covered,
// but keep this guard so a scan miss can't break typography.
const KEEP_EXT = new Set(['.woff', '.woff2', '.ttf']);

const walk = async (dir) => {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(p)));
    else out.push(p);
  }
  return out;
};

const files = await walk(DIST);
const referenced = new Set();

for (const f of files) {
  if (!SCAN_EXT.has(extname(f))) continue;
  const text = await readFile(f, 'utf8');
  for (const m of text.matchAll(/_astro\/([A-Za-z0-9._-]+)/g)) referenced.add(m[1]);
}

let removed = 0;
let bytes = 0;
for (const f of files) {
  if (!f.startsWith(ASSET_DIR)) continue;
  const name = basename(f);
  if (referenced.has(name) || KEEP_EXT.has(extname(f))) continue;
  bytes += (await stat(f)).size;
  await unlink(f);
  removed += 1;
}

console.log(
  removed
    ? `prune-assets: removed ${removed} unreferenced file(s), ${(bytes / 1024 / 1024).toFixed(1)} MB`
    : 'prune-assets: nothing to remove',
);
