const cacheName = 'notes-v1';

const filesToCache = [
	'./',
	'./images/snow-48.png',
	'./images/snow-96.png',
	'./images/snow-192.png',
	'./images/snow-512.png',
	'../',
	'../dll/vendor.4092ca4ff034abb69c25.js',
	'../app.bundle.js',
	'../index.html',
]

self.addEventListener('install', function(e) {
	console.log('[ServiceWorker] Install');
	e.waitUntil(
		caches.open(cacheName).then(function(cache) {
			console.log('[ServiceWorker] Caching app shell');
			return cache.addAll(filesToCache);
		})
	);
});

self.addEventListener('activate', function(e) {
	console.log('[ServiceWorker] Activate!');
	e.waitUntil(
		caches.keys().then(function(keyList) {
			return Promise.all(keyList.map(function(key) {
				if (key !== cacheName) {
					console.log('[ServiceWorker] Removing old cache', key);
					return caches.delete(key);
				}
			}));
		})
	);
	return self.clients.claim();
});

self.addEventListener('fetch', function(e) {
	console.log('[ServiceWorker] Fetch', e.request.url);
	e.respondWith(
		caches.match(e.request).then(function(response) {
			return response || fetch(e.request);
		})
	);
});