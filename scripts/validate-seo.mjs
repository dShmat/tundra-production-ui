import {access, readFile} from 'node:fs/promises';
import path from 'node:path';

const output = path.join(process.cwd(), 'dist/tundra-production-ui/browser');
const routes = [
  ['/', 'en', 'ltr'], ['/equipment', 'en', 'ltr'], ['/rules', 'en', 'ltr'], ['/privacy', 'en', 'ltr'],
  ['/ru', 'ru', 'ltr'], ['/ru/equipment', 'ru', 'ltr'], ['/ru/rules', 'ru', 'ltr'], ['/ru/privacy', 'ru', 'ltr'],
  ['/ar', 'ar', 'rtl'], ['/ar/equipment', 'ar', 'rtl'], ['/ar/rules', 'ar', 'rtl'], ['/ar/privacy', 'ar', 'rtl'],
];

const fail = message => { throw new Error(message); };
const count = (text, pattern) => (text.match(pattern) ?? []).length;

const titles = new Set();
for (const [route, locale, direction] of routes) {
  const filename = path.join(output, route === '/' ? 'index.html' : route.slice(1), route === '/' ? '' : 'index.html');
  const html = await readFile(filename, 'utf8');
  const label = `${route} (${locale})`;
  if (!html.includes(`<html lang="${locale}" dir="${direction}"`)) fail(`${label}: incorrect lang/dir`);
  if (!/<meta name="description" content="[^"]{40,}">/.test(html)) fail(`${label}: missing meta description`);
  if (!html.includes(`<link rel="canonical" href="https://www.tundrastd.com${route}"`)) fail(`${label}: incorrect canonical`);
  if (count(html, /rel="alternate"/g) !== 4) fail(`${label}: expected four hreflang alternates`);
  if (count(html, /<h1(?:\s|>)/g) !== 1) fail(`${label}: expected exactly one h1`);
  if (!html.includes('type="application/ld+json"')) fail(`${label}: missing JSON-LD`);
  if (!html.includes('"@type":"LocalBusiness"')) fail(`${label}: missing LocalBusiness data`);
  if (html.includes('yourdomain.com')) fail(`${label}: placeholder domain remains`);
  const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
  if (!title || titles.has(title)) fail(`${label}: missing or duplicate title`);
  titles.add(title);
}

const robots = await readFile(path.join(output, 'robots.txt'), 'utf8');
if (!robots.includes('Allow: /') || !robots.includes('https://www.tundrastd.com/sitemap.xml')) fail('robots.txt is invalid');

const sitemap = await readFile(path.join(output, 'sitemap.xml'), 'utf8');
if (count(sitemap, /<url>/g) !== routes.length) fail('sitemap.xml must contain 12 URLs');
for (const [route] of routes) {
  if (!sitemap.includes(`<loc>https://www.tundrastd.com${route}</loc>`)) fail(`sitemap.xml is missing ${route}`);
}

const notFound = await readFile(path.join(output, '404.html'), 'utf8');
if (!notFound.includes('noindex, follow')) fail('404.html must be noindex');

for (const asset of [
  'images/optimized/studio-hero-768.avif',
  'images/optimized/studio-hero-768.webp',
  'images/optimized/equipment-768.avif',
  'images/optimized/equipment-768.webp',
  'images/og-tundra-studio.jpg',
]) {
  await access(path.join(output, asset));
}

console.log('SEO validation passed for 12 prerendered routes.');
