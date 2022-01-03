const d = document;
/*
function to search the element inside of the table 
*/
export function search(btnId, inputId, codigo, productName, window, price) {
  let $search = d.getElementById(inputId);
  let $codigo = d.querySelectorAll(codigo);
  let $productName = d.querySelectorAll(productName);
  let $price = d.querySelectorAll(price);
  let $window = d.querySelector(window);
  d.addEventListener("click", (e) => {
    if (e.target.matches(`#${btnId}`)) {
      if ($search.value.length > 0) {
        //code from product
        $codigo.forEach((el, i) => {
          if (el.innerText.toUpperCase() == $search.value.toUpperCase()) {
            d.querySelector(".product-text").innerText = el.innerText;
            d.querySelector(".product-codigo").innerText =
              $productName[i].innerText;
            d.querySelector(".product-price").innerText = $price[i].innerText;

            //add class
            $window.classList.toggle("visible");
          }
        });
        $productName.forEach((el, i) => {
          if (el.innerText.toUpperCase() == $search.value.toUpperCase()) {
            d.querySelector(".product-codigo").innerText = el.innerText;
            d.querySelector(".product-text").innerText = $codigo[i].innerText;
            d.querySelector(".product-price").innerText = $price[i].innerText;

            $window.classList.toggle("visible");
          }
        });
      }
    }
  });
}
/*
function to close div window
*/
export function closeWindow(btnClose = "", window = "") {
  let $window = d.querySelector(window);
  d.addEventListener("click", (e) => {
    if (e.target.matches(`#${btnClose}`)) {
      $window.classList.toggle("visible");
    }
  });
}
