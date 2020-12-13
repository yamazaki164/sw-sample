self.addEventListener('install', (event) => {
  console.log('[Service Worker] Install');

  event.waitUntil(
    caches.open('static-v1').then((cache) => cache.add('/sw-sample/cat.svg'))
  );
});

self.addEventListener('fetch', (event) => {
  console.log('[Service Worker] Fetched resource ' + event.request.url);

  if (url.origin == location.origin && url.pathname == '/sw-sample/dog.svg') {
    event.respondWith(caches.match('/sw-sample/cat.svg'));
  }
});

self.addEventListener('activate', (e) => {
  console.log('[Service Worker] Activate');
});
