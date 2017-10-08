window.onload = function() {
    document.getElementById("tick-button").onclick = function fun() {
        alert("hello");
    }

    document.getElementById("cross-button").onclick = function fun() {
        alert("hello");
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
