/*========================
    mouse move js
==========================*/
document.addEventListener("DOMContentLoaded", function () {
  var homeMove = document.querySelectorAll(".dark-job-img li");
  var layer = document.querySelector(".dark-job-home");

  if (layer) {
    layer.addEventListener("mousemove", function (e) {
      var ivalueX = (e.pageX * -1) / 60;
      var ivalueY = (e.pageY * -1) / 60;
      var cvalueX = (e.pageX * -1) / 80;
      var cvalueY = (e.pageY * -1) / 90;

      homeMove.forEach(function (item) {
        item.style.transform = `translate3d(${ivalueX}px, ${ivalueY}px, 0)`;
        item.style.transform = `translate3d(${cvalueX}px, ${cvalueY}px, 0)`;
      });
    });
  }
});
