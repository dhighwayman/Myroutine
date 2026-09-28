// Guarda la página para que funcione sin conexión.
// Los vídeos de MuscleWiki no se interceptan: el navegador los pide directamente.
const CACHE = "rutina-v1";
const ARCHIVOS = [
  "./",
  "index.html",
  "estilo.css",
  "rutina.js",
  "app.js",
  "manifest.webmanifest",
  "icono.svg",
  "iconos/icono-180.png",
  "iconos/icono-192.png",
  "iconos/icono-512.png"
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ARCHIVOS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((claves) => Promise.all(claves.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Primero la red (para ver siempre la última versión) y, si no hay conexión, la caché.
self.addEventListener("fetch", (e) => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET" || url.origin !== self.location.origin) return;
  e.respondWith(
    fetch(e.request)
      .then((resp) => {
        const copia = resp.clone();
        caches.open(CACHE).then((c) => c.put(e.request, copia));
        return resp;
      })
      .catch(() => caches.match(e.request, { ignoreSearch: true }))
  );
});
