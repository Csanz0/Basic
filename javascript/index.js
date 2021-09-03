let btn = document.getElementById("btn");
let btn2 = document.getElementById("btn2");
let nav = document.querySelector("ul");
let menus = document.getElementsByClassName("menu");

function cambiarColor() {
  document.body.removeAttribute("style");
}

function hacerClick() {
  document.body.setAttribute(
    "style",
    "background:linear-gradient(#161616,#16aa)"
  );
}

window.addEventListener(
  "load",
  () => {
    btn.addEventListener("click", hacerClick, true),
      btn2.addEventListener("click", cambiarColor, false);
  },
  false
);
