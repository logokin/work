function openSlideMenu() {
  document.getElementById("side-menu").style.width = "100%";
  document.querySelector("body").style.overflowY = "hidden";
}
function closeSlideMenu() {
  document.getElementById("side-menu").style.width = "0px";
  document.querySelector("body").style.overflowY = "scroll";
}

const nav = document.querySelector("#nav");

window.addEventListener("scroll", function () {
  if (window.pageXOffset > 80) {
    nav.classList.add("nav-fixed");
  } else {
    nav.classList.remove("nav-fixed"); 
  }
});
