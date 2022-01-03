const d = document;
export function addInfo(
  table,
  codigoId,
  productNameId,
  priceId,
  BtnId,
  codeClass,
  productClass
) {
  const $table = d.getElementById(table),
    $code = d.getElementById(codigoId),
    $product = d.getElementById(productNameId),
    $price = d.getElementById(priceId),
    $btn = d.getElementById(BtnId),
    $codeClass = d.querySelectorAll(codeClass),
    $productClass = d.querySelectorAll(productClass);
  let code = "",
    product = "",
    price = "",
    insideP,
    insideC;
  d.addEventListener("click", (e) => {
    if (e.target.matches(`#${BtnId}`)) {
      if (
        $code.value != "" &&
        $code.value.length > 2 &&
        $code.value.length < 8 &&
        $product.value != "" &&
        $product.value.length > 2 &&
        $product.value.length < 10 &&
        !Number.isNaN(Number.parseFloat($price.value))
      ) {
        console.log($product.value, $code.value);
        $codeClass.forEach((el) => {
          if (el.innerText.toUpperCase() != $code.value.toUpperCase()) {
            insideC = true;
          }
        });
        $productClass.forEach((el) => {
          if (el.innerText.toUpperCase() != $product.value.toUpperCase()) {
            insideP = true;
          }
        });
        if (insideC == true && insideP == true) {
          code = $code.value;
          product = $product.value;
          price = $price.value;
          $table.insertAdjacentHTML(
            "beforeend",
            `
          <td class="codigo">${code.toUpperCase()}</td>
          <td class="productName">${product}</td>
          <td class="price">${price}</td>
          `
          );
        }
      } else {
        return alert("Datos invalido");
      }
      $btn.setAttribute("disabled", "");
      if ($btn.hasAttribute("disabled")) {
        setTimeout(() => {
          $btn.removeAttribute("disabled");
        }, 1000);
      }
    }
  });
}
