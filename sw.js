self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("professor-app-v3").then((cache) => {
      return cache.addAll([
        "./",
        "./index.html",
        "./Professor_neutro.png",
        "./Professor_estudando.png",
        "./Professor_feliz.png",
        "./Professor_bravo.png"
      ]);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
