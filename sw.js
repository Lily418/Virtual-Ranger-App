// serviceworker.js
self.addEventListener('notificationclick', function(event) {
    // Close notification.
    event.notification.close();

    // Example: Open window after 3 seconds.
    // (doing so is a terrible user experience by the way, because
    //  the user is left wondering what happens for 3 seconds.)
    var promise = new Promise(function(resolve) {
        setTimeout(resolve, 3000);
    }).then(function() {
        // return the promise returned by openWindow, just in case.
        // Opening any origin only works in Chrome 43+.
        return clients.openWindow('/');
    });

    // Now wait for the promise to keep the permission alive.
    event.waitUntil(promise);
});
