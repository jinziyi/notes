const CACHE_NAME = 'notes-v1';

const urlsToCache = [
	'./',
	'./images/snow-48.png',
	'./images/snow-96.png',
	'./images/snow-192.png',
	'./images/snow-512.png',
	'../',
	'../index.html',
	'../app.9f7fe7402d5f6ba9b699b376eb71a5ce.css',
	'../app.accb1f44fdd4ce791df9.js',
]

self.addEventListener('install', event => {
	console.log('V1 installing…');
	self.skipWaiting();
	// cache a cat SVG
	event.waitUntil(
		caches.open(CACHE_NAME)
			.then(cache => cache.addAll(urlsToCache))
	);
});

self.addEventListener('fetch', function (event) {
	event.respondWith(
		caches.match(event.request)
			.then(function (response) {
				// Cache hit - return response
				if (response) {
					return response;
				}

				const fetchRequest = event.request.clone();

				return fetch(fetchRequest).then(
					function (response) {
						// Check if we received a valid response
						if (!response || response.status !== 200 || response.type !== 'basic') {
							return response;
						}

						const responseToCache = response.clone();

						caches.open(CACHE_NAME)
							.then(function (cache) {
								cache.put(event.request, responseToCache);
							});

						return response;
					}
				);
			})
	);
});

self.addEventListener('activate', function (event) {

	const cacheWhitelist = [];

	event.waitUntil(
		caches.keys().then(function (cacheNames) {
			return Promise.all(
				cacheNames.filter(cacheName => !cacheWhitelist.includes(cacheName)).map(cacheName => caches.delete(cacheName))
			);
		})
	);
});
