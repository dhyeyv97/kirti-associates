/*====================
    loader js
=======================*/
setTimeout(function () {
    var loaders = document.getElementsByClassName('loader-wrapper');
    for (var i = 0; i < loaders.length; i++) {
        loaders[i].style.display = 'none';
    }
    // Restore body overflow after loader is hidden
    document.body.style.overflow = 'auto';
}, 3000); // 3000 milliseconds = 3 seconds

// Set body overflow to hidden when the loader is displayed
document.body.style.overflow = 'hidden';