(function () {
  // serviceWorkerを登録する
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register('./serviceWorker.js', { scope: "./" }) 
    .then(function(registration) {
      console.info('Service worker is registered!');
    })
    .catch(function(error) {
      console.error('Service worker failed ', error);
    });
  }
})();
