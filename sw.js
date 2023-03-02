
const staticCacheName = 'site-static';
const assets = [
    '/',
    '/index.html',
    '/js/app.js',
    '/css/styles.css',
    '/img/img1.jpg',
    '/img/img2.jpg',
    '/img/img3.jpg',
    '/img/img4.jpg',
    'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;800&display=swap',
    ];

// install event
self.addEventListener('install', evt => {
  //console.log('service worker installed');
  evt.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log('caching shell assets');
      cache.addAll(assets);
    })
  );
});

// activate event
self.addEventListener('activate', evt => {
  //console.log('service worker activated');
});

// fetch event
self.addEventListener('fetch', evt => {
  //console.log('fetch event', evt);
  evt.respondWith(
    caches.match(evt.request).then(cacheRes => {
      return cacheRes || fetch(evt.request);
    })
  );
});
self.addEventListener("push", function (event) {
    if (event && event.data) {
      const data = event.data.json();
      if (data.method === "pushMessage") {
        console.log("Push notification sent");

        
      }
    }
  });


// Handle background sync
self.addEventListener("sync", (event) => {
    if (event && event.tag === "event1") {
      console.log("Sync successful!");
      
    }
});

