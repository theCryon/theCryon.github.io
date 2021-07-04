var cacheName = 'piac-pwa';
var filesToCache = ['/','/index.html','/style.css','/js/main.js', '/js/router.js', 'images/buy.png', 'images/cloud-network.png', 
'images/house.png', 'images/socket.png', 'images/apple.png', 'images/maskable-icon-256.png'];

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