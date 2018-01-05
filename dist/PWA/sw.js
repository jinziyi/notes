
var CACHES = [
	'./',
	'./images/snow-48.png',
	'./images/snow-96.png',
	'./images/snow-192.png',
	'./images/snow-512.png',
	'../',
	'../index.html',
]

self.addEventListener('install', event => {
	console.log('V1 installing…');
	// cache a cat SVG
	event.waitUntil(
		caches.open('notes').then(cache => cache.addAll(CACHES))
	);
});

self.addEventListener('activate', event => {
	console.log('V1 now ready to handle fetches!');
});


self.addEventListener('fetch', function(event) {
	event.respondWith(caches.match(event.request));
});