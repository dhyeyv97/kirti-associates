/*========================
    print js
==========================*/
document.querySelectorAll('.print-button').forEach(function (element) {
    element.addEventListener('click', function () {
        window.print();
        return false;
    });
});