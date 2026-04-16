const CACHE_NAME = 'tmsa-pro-v10';

// No guarda nada en caché para evitar problemas de actualización de tu código
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

// Responde a las peticiones de red normalmente
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
