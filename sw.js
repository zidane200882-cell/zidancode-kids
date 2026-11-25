const CACHE = "zidancode-kids-v1";
const ASSETS = ["./", "./index.html","./zk_lock.js","./logo.svg", "./icon-192.png", "./icon-512.png", "./grade1.html", "./manifest-g1.json", "./grade2.html", "./manifest-g2.json", "./grade3.html", "./manifest-g3.json", "./grade4.html", "./manifest-g4.json", "./grade5.html", "./manifest-g5.json", "./grade6.html", "./manifest-g6.json"];
self.addEventListener("install", e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS))));
self.addEventListener("fetch", e => e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))));
