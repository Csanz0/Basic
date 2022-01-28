import { search, closeWindow } from "./search.js";
import { slider } from "./slider.js";
// import { addInfo } from "./form.js";

document.addEventListener("DOMContentLoaded", (e) => {
  search("btn", "search", ".codigo", ".productName", ".window", ".price");
  closeWindow("btn-close", ".window");
  slider(".slider__div", ".subtitle");
});
// function to create the table
document.getElementById("form-product").addEventListener("submit", addInfo);

//prevent default and save information in the localStorage

function addInfo(e) {
  let code = document.getElementById("codigo").value,
    productName = document.getElementById("productName").value,
    price = document.getElementById("price").value;

  const productInfo = {
    code,
    productName,
    price,
  };
  if (localStorage.getItem("products") == null) {
    let products = [];
    products.push(productInfo);
    localStorage.setItem("products", JSON.stringify(products));
  } else {
    let products = JSON.parse(localStorage.getItem("products"));
    products.push(productInfo);
    localStorage.setItem("products", JSON.stringify(products));
  }

  saveProduct();
  document.getElementById("form-product").reset();
  e.preventDefault();
}
saveProduct();

function saveProduct() {
  let products = JSON.parse(localStorage.getItem("products"));
  let productTable = document.getElementById("tab");
  productTable.innerHTML = "";

  for (let i = 0; i < products.length; i++) {
    productTable.insertAdjacentHTML(
      "beforeend",
      `<tr><td class='codigo'>${products[i].code.toUpperCase()}</td>
                          <td class='productName'>${
                            products[i].productName
                          }</td>
                          <td class='price'>${products[i].price}</td>
      </tr>
      `
    );
  }
}
