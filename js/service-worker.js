self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('my-pwa-cache-v1').then((cache) => {
        return cache.addAll([
          '/',
          '/inicial.html',
          '/cadastro.html',
          '/configuracoes.html',
          '/desenvolvedores.html',
          '/login.html',
          '/perguntas.html',
          '/pesquisar.html',
          '/recuperasenha.html',
          '/registros.html',
          '/styles/_fotter.css',
          '/styles/_global-style.css',
          '/styles/_header.css',
          '/styles/_main.css',
          '/styles/_page-configuracoes.css',
          '/styles/_page-inicial.css',
          '/styles/_page-login.css',
          '/styles/_page-perguntas.css',
          '/styles/_page-pesquisar.css',
          '/js/app.js',
          '/src/Liander.png',
          '/src/Logo_tema_claro08px.png',
          '/src/Logo_tema_escuro08px.png',
          '/src/Logo_tema_claro144px.png',
          '/src/Logo_tema_escuro144px.png',
          '/src/Logo_tema_claro192px.png',
          '/src/Logo_tema_escuro192px.png',
          '/src/Logo_tema_claro512px.png',
          '/src/Logo_tema_escuro512px.png',
          '/src/Pedro.png',
          '/src/programação.jpg',
          '/src/reunião.png'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  