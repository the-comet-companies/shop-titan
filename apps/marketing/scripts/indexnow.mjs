#!/usr/bin/env node
// IndexNow submitter for shoptitan.app
// Pulls every <loc> from the live sitemap and pings IndexNow (Bing/Yandex/etc.).
// Usage:
//   node scripts/indexnow.mjs                       # submit all sitemap URLs
//   node scripts/indexnow.mjs https://shoptitan.app/pricing https://shoptitan.app/blog
//                                                   # submit only the URLs you pass
//
// IndexNow is keyless to set up beyond a public key file:
//   key file must be reachable at  https://shoptitan.app/<KEY>.txt  and contain <KEY>.

const HOST = 'shoptitan.app';
const KEY = '23afc5a568cf8b2a3064e1b601b67eb7';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const SITEMAP = `https://${HOST}/sitemap.xml`;
const ENDPOINT = 'https://api.indexnow.org/indexnow';

async function urlsFromSitemap() {
  const res = await fetch(SITEMAP, { headers: { 'User-Agent': 'indexnow-submitter' } });
  if (!res.ok) throw new Error(`Sitemap fetch failed: ${res.status}`);
  const xml = await res.text();
  const locs = [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map((m) => m[1]);
  return [...new Set(locs)];
}

async function submit(urlList) {
  if (!urlList.length) {
    console.log('No URLs to submit.');
    return;
  }
  // IndexNow allows up to 10,000 URLs per request.
  const body = { host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList };
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(body),
  });
  const text = await res.text();
  // 200 = accepted, 202 = accepted/pending. Anything else is a problem.
  console.log(`IndexNow -> ${res.status} ${res.statusText} (${urlList.length} URLs)`);
  if (text.trim()) console.log(text.trim());
  if (res.status !== 200 && res.status !== 202) process.exit(1);
}

const args = process.argv.slice(2);
const urls = args.length ? args : await urlsFromSitemap();
console.log(`Submitting ${urls.length} URL(s) to IndexNow for ${HOST}...`);
await submit(urls);
