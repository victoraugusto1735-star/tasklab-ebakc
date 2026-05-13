const CACHE_NAME = 'tasklab-cache-v2';
const URLS_TO_CACHE = [
  "/",
  "/manifest.json",
  "/icon-192x192.webp",
  "/icon-512x512.webp"
];

//1. intall - primeira vez que SW e instalado. (ideal para cachear inicial)
self.addEventListener('install', event => { 
  console.log('Service Worker foi instalado');
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => cache.addAll(URLS_TO_CACHE))
    );
});

//2. activate - quando o SW é ativado (ideal para limpar caches antigos)
self.addEventListener('activate', event => { 
  console.log('Service Worker foi ativado');
    event.waitUntil(
      caches.keys().then(keys => {
        return Promise.all(
          keys.filter((k) => k !== CACHE_NAME)
          .map((k) => caches.delete(k))
        );
      })
    );
  }
);

//3. fetch - intercepta todas as requisicoes da pagina e decide como responde-las
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then((res) => res || fetch(event.request))
  );
});
 