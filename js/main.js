window.onload = function() {
    document.getElementById("tick-button").onclick = function fun() {
      window.location.href = "/you_are_the_best.html#" + window.location.hash.replace(/#/, "");
    }

    document.getElementById("cross-button").onclick = function fun() {
      window.location.href = "/you_are_the_best.html#" + window.location.hash.replace(/#/, "");
    }
}

navigator.serviceWorker.register('sw.js');
Notification.requestPermission(function(result) {
  if (result === 'granted') {
    navigator.serviceWorker.ready.then(function(registration) {
      registration.showNotification('We have a mission for you!', {
        requireInteraction: true,
        badge: '../img/icon.png',
        icon: '../img/icon.png',
      });
    });
  }
});

if(window.location.hash == "") {
  window.location.hash = "img1"
}


$(".question-container img").attr("src", "img/" + window.location.hash.replace(/#/, "") + ".jpg");
