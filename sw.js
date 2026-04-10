self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  // Nécessaire pour valider les critères PWA
});
