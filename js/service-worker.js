const CACHE_NAME = 'my-pwa-cache-v1';
const urlsToCache = [
    '/',
    'index.html',
    'styles.css',
    'Logo_tema_claro80px.png',
    'Logo_tema_escuro80px.png',
    'Logo_tema_claro144px.png',
    'Logo_tema_escuro144px.png',
    'Logo_tema_claro192px.png',
    'Logo_tema_escuro192px.png',
    'Logo_tema_claro512px.png',
    'Logo_tema_escuro512px.png'
    // Adicione mais arquivos que você deseja armazenar em cache aqui
];

self.addEventListener('install', function(event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                // Cache hit - return response
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});