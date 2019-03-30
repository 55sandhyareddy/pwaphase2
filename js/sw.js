this.addEventListener('install',function(event) {
  event.waitUntill(
    caches.open('my cache').then(function(e) {
      e.addAll([
        '/index.html',
        '/css/index.css',
        '/css/form.css',
        '/css/resume.css',
        '/form.html',
        '/resume.html',
        '/js/get.js',
        '/js/main.js',
        '/js/resume.js',
        '/js/sw.js'

      ])
    })
  )
})
//fetch event
this.addEventListener('fetch',function(event) {
event.respondWith(
  caches.open('my cache').then(function(cache) {
    return cache.match(event.request)
    .then(function(result) {
      return result||fetch(event.request)
      .then(function(result){
        cache.put(event.request,result.clone());
        return result;
      })
    })
  })
)

})
