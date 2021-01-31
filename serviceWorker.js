// キャッシュ名とキャッシュファイルの指定
var cacheName = 'cache-v4';
//キャッシュファイルの指定
var files = [
  './',
  './index.html?utm=homescreen', //SW treats query string as new request
  'https://fonts.googleapis.com/css?family=Roboto:200,300,400,500,700', //caching 3rd party content
  './css/styles.css',
  './images/icons/android-chrome-192x192.png',
  './images/push-on.png',
  './images/push-off.png',
  './images/icons/favicon-16x16.png',
  './images/icons/favicon-32x32.png',
  './js/main.js',
  './manifest.json'
];
// インストール処理
self.addEventListener('install', function(event) {
  event.waitUntil(
      caches
          .open(cacheName)
          .then(function(cache) {
              return cache.addAll(files);
          })
  );
});
// リソースフェッチ時のキャッシュロード処理
self.addEventListener('fetch', function(event) {
  event.respondWith(
      caches
          .match(event.request)
          .then(function(response) {
              return response ? response : fetch(event.request);
          })
  );
});



