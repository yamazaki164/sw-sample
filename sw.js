self.addEventListener('install', (event) => {
  console.log('[Service Worker] Install');

  event.waitUntil(
    caches.open('static-v1').then((cache) => cache.add('/sw-sample/cat.png'))
  );
});

self.addEventListener('fetch', (event) => {
  const url = event.request.url;

  console.log('[Service Worker] Fetched resource ' + event.request.url);
  console.log(url.origin);
  console.log(location.origin);
  console.log(url.pathname);

  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
  // if (url.origin == location.origin && url.pathname == '/sw-sample/dog.png') {
  //   event.respondWith(caches.match('/sw-sample/cat.png'));
  // }
});

self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Activate');
});
