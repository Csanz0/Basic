import { search, closeWindow } from "./search.js";
import { slider } from "./slider.js";
import { addInfo } from "./form.js";

document.addEventListener("DOMContentLoaded", (e) => {
  search("btn", "search", ".codigo", ".productName", ".window", ".price");
  closeWindow("btn-close", ".window");
  slider(".slider__div", ".subtitle");
  addInfo(
    "tab",
    "codigo",
    "productName",
    "price",
    "btn-add",
    ".codigo",
    ".productName"
  );
});
