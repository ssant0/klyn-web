// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

function loadBlogDates() {
  const dir = 'src/content/blog';
  const map = /** @type {Record<string, string>} */ ({});
  for (const file of readdirSync(dir)) {
    if (!/\.mdx?$/.test(file)) continue;
    const raw = readFileSync(join(dir, file), 'utf8');
    const dateModified = raw.match(/^dateModified:\s*(\d{4}-\d{2}-\d{2})/m)?.[1];
    const datePublished = raw.match(/^datePublished:\s*(\d{4}-\d{2}-\d{2})/m)?.[1];
    const slug = file.replace(/\.mdx?$/, '');
    const date = dateModified || datePublished;
    if (date) map[`/blog/posts/${slug}/`] = date;
  }
  return map;
}

const blogDates = loadBlogDates();

// https://astro.build/config
export default defineConfig({
  site: 'https://www.klyn.com.mx',
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !page.includes('/links/'),
      serialize(item) {
        const pathname = new URL(item.url).pathname;
        const lastmod = blogDates[pathname];
        return lastmod ? { ...item, lastmod } : item;
      },
    }),
  ],
  output: 'static',
});
