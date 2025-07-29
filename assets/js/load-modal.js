/*========================
    load modal js
==========================*/
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        var loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
        loginModal.show();
    }, 3500);// 3500 milliseconds = 3.5 seconds
});