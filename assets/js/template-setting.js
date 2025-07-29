/*====================
  template setting js
=======================*/

/* dark js */
document.body.style = "transition: 1s;";
const sun = "ri-sun-line";
const moon = "ri-moon-line";

var mode = "dark";
const root = document.querySelector(":root");
const container = document.getElementsByClassName("mode-change-button")[0];
const modeIcon = document.getElementById("modeIcon");
const textChange = document.getElementById("text-value");
container.addEventListener("click", setMode);

function setMode() {
  switch (mode) {
    case "dark":
      setLight();
      mode = "light";
      textChange.innerHTML = "Light";
      break;
    case "light":
      setDark();
      mode = "dark";
      textChange.innerHTML = "Dark";
      break;
  }
}

function setLight() {
  container.classList.remove("shadow-dark");
  document.body.classList.add("dark");
  document.body.classList.remove("light");
  modeIcon.classList.remove(moon);
  modeIcon.classList.add(sun);
}

function setDark() {
  document.body.classList.add("light");
  document.body.classList.remove("dark");
  modeIcon.classList.add(moon);
  modeIcon.classList.remove(sun);
}

/* rtl js */
const rtlBtn = document.querySelector("#rtl-btn");
const html = document.querySelector("html");
const rtlLink = document.querySelector("#rtl-link");
const modeBtnParent = document.querySelector(".rtlBtnEl");

modeBtnParent?.addEventListener("click", function (e) {
  e.preventDefault();
  const clicked = e.target.closest(".mode-button")?.id;
  if (!clicked) return;
  if (clicked === "rtl-btn") {
    rtlBtn.id = "ltr-btn";
    rtlBtn.querySelector(".text-value").textContent = "LTR";
    html.setAttribute("dir", "rtl");
    rtlLink.href = "assets/css/vendors/bootstrap/bootstrap.rtl.css";
    rtlBtn.classList.add("rtlBtnEl");
    localStorage.setItem("rtlcss", "assets/css/vendors/bootstrap/bootstrap.rtl.css");
    localStorage.setItem("dir", "rtl");
    localStorage.setItem("rtlBtnId", "ltr-btn");
    localStorage.setItem("textContentRtl", "LTR");
  } else if (clicked === "ltr-btn") {
    rtlBtn.id = "rtl-btn";
    rtlBtn.querySelector(".text-value").textContent = "RTL";
    html.setAttribute("dir", "");
    rtlLink.href = "assets/css/vendors/bootstrap.css";
    localStorage.setItem("rtlcss", "assets/css/vendors/bootstrap.css");
    localStorage.setItem("dir", "");
    localStorage.setItem("rtlBtnId", "rtl-btn");
    localStorage.setItem("textContentRtl", "RTL");
  }
});

rtlBtn.id = localStorage.getItem("rtlBtnId") ? localStorage.getItem("rtlBtnId") : "rtl-btn";
rtlBtn.querySelector(".text-value").textContent = localStorage.getItem("textContentRtl") ? localStorage.getItem("textContentRtl") : "RTL";
html.setAttribute("dir", localStorage.getItem("dir") ? localStorage.getItem("dir") : "");
rtlLink.href = localStorage.getItem("rtlcss") ? localStorage.getItem("rtlcss") : "assets/css/vendors/bootstrap.css";

