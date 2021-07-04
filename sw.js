var cacheName = 'piac-pwa';
var filesToCache = ['/','/index.html','/style.css','/js/main.js', 'images/pwa-icon-256.png', 'images/pwa-icon-512.png', 
'images/maskable-icon-256.png', 'images/maskable-icon-512.png'];

self.addEventListener('install', function(e) {
	e.waitUntil(caches.open(cacheName).then(function(cache) {
		return cache.addAll(filesToCache);
	}));
});

self.addEventListener('fetch', function(e) {
	e.respondWith(caches.match(e.request).then(function(response) {
		return response || fetch(e.request);
	}));
});