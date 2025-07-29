/*========================
    active js
==========================*/

var el = document.querySelectorAll(".active-list .active-item");
for (let i = 0; i < el.length; i++) {
  el[i].onclick = function () {
    var c = 0;
    while (c < el.length) {
      el[c++].className = "active-item";
    }
    el[i].className = "active-item active";
  };
}
