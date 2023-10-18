const addBtn = document.querySelectorAll(".add");

const cartItemRow = document.querySelector(".cart-item-row");

for (let i = 0; i < addBtn.length; i++) {
  var button = addBtn[i];
  button.addEventListener("click", (e) => {
    var buttonClicked = e.target;
    var parent = buttonClicked.parentNode;
    var itemTitle = parent.querySelector(".item-title").textContent;
    var itemPrice = parent.querySelector(".item-price").textContent;

    const cartItemTitles = cartItemRow.querySelectorAll(".cart-item-title");
    let itemExists = false;
    cartItemTitles.forEach((cartItemTtitle) => {
      if (cartItemTtitle.textContent == itemTitle) {
        itemExists = true;
      }
    });

    if (itemExists) {
      alert("Item already added to cart");
    } else {
      let item = document.createElement("div");
      item.classList.add("grid", "cart-items");
      item.innerHTML = `<div class="cart-item-title">${itemTitle}</div>
        <div>${itemPrice}</div>
        <button type="button" class="remove">Remove</button>`;

      cartItemRow.appendChild(item);
    }
  });
}

cartItemRow.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove")) {
    const buttonClicked = e.target;
    const parent = buttonClicked.parentNode;
    parent.remove();
  }
});
