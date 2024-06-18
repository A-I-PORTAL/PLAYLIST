const cacheName = 'audio-cache-v1';
const filesToCache = [
    '/INFINITE/',
    '/INFINITE/index.html',
    '/INFINITE/style.css',
    '/INFINITE/game.js',
    // Add all audio files
    '/INFINITE/assets/music1.mp3',
    '/INFINITE/assets/music2.mp3',
    '/INFINITE/assets/music3.mp3',
    // Add more tracks as needed
];

// Install the service worker
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheName).then(cache => {
            return cache.addAll(filesToCache);
        })
    );
});

// Fetch the assets from the cache or network
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
