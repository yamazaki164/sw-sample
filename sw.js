self.addEventListener('install', (event) => {
  document.querySelector('#state').innerHTML('[Service Worker] Install');
  console.log('[Service Worker] Install');

  event.waitUntil(
    caches.open('static-v1').then((cache) => cache.add('/sw-sample/cat.png'))
  );
});

self.addEventListener('fetch', (event) => {
  document
    .querySelector('#state')
    .innerHTML('[Service Worker] Fetched resource ' + event.request.url);
  console.log('[Service Worker] Fetched resource ' + event.request.url);

  if (url.origin == location.origin && url.pathname == '/sw-sample/dog.png') {
    event.respondWith(caches.match('/sw-sample/cat.png'));
  }
});

self.addEventListener('activate', (event) => {
  document.querySelector('#state').innerHTML('[Service Worker] Activate');
  console.log('[Service Worker] Activate');
});
