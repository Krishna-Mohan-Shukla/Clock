const cacheName = "clock-app-v1";
const assets = [
  "./",
  "./index.html",
  "./style.css",
  "./script.js"
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(assets);
    }).catch(err => {
      console.error("❌ Caching failed:", err);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => {
      return res || fetch(e.request);
    })
  );
});
