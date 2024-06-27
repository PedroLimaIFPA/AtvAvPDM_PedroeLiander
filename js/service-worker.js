const CACHE_NAME = 'my-pwa-cache-v1';
const urlsToCache = [
    '/',
    'index.html',
    'styles.css',
    '/src/Logo_tema_claro80px.png',
    '/src/Logo_tema_escuro80px.png',
    '/src/Logo_tema_claro144px.png',
    '/src/Logo_tema_escuro144px.png',
    '/src/Logo_tema_claro192px.png',
    '/src/Logo_tema_escuro192px.png',
    '/src/Logo_tema_claro512px.png',
    '/src/Logo_tema_escuro512px.png',
    '/src/programacao.jpg',
    'reuniao.png'
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