const itemContent = `<a href="./product.html">
<img
  class="card-img-top"
  alt="PATRÓN SILVER Tequila"
  src="./images/bacardi-white.webp"
/>
</a>
<div class="card-body">
<a href="./product.html">PATRÓN SILVER Tequila</a>
<select class="avc-o-input avc-o-input--select">
  <option value="375 mL">375 mL</option>
  <option value="750 mL">750 mL</option>
  <option value="1.75 L">1.75 L</option>
</select>
<p class="">Starting at $16.99</p>
<a href="./product.html" class=""><span>Buy Now</span></a>
</div>`;

const item = `<!-- card -->
<div class="card mb-5" style="width: 18rem">
  ${itemContent}
</div>
<!-- card end -->`;

const initContent = `
<div id="products" class="products d-flex justify-content-around flex-wrap p-5 m-5 bg-light">
  ${item}
  ${item}
  ${item}
  ${item}
  ${item}
  ${item}
</div>
`;

const container = document.querySelector("main#content");

const createItem = () => {
  const el = document.createElement("div");
  el.className = "card mb-5";
  el.style.width = "18rem";
  el.innerHTML = itemContent;
  return el;
};

// document.querySelector("button#add").addEventListener("click", () => {
//   document.querySelector("div#products").appendChild(createItem());
// });

// document.querySelector("button#remove").addEventListener("click", () => {
//   document.querySelector("div.card").remove();
// });

setTimeout(() => {
  container.innerHTML = initContent;
}, 2000);
