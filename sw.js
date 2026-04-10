self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (e) => {
  // Laisse passer les requêtes normalement, mais valide le test PWA de Chrome
  e.respondWith(fetch(e.request).catch(() => new Response("Hors-ligne")));
});
