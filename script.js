const productsEl = document.querySelector('.pro-container')
const cartItemsEl = document.querySelector('.cart-items')
const subtotalEl = document.querySelector('.subtotal')
//VER PARA QUE EL CARRO SE MUESTRE EN TODAS LAS PESTAÑAS Y QUE AGREGUE CON EL + -
const totalItemsInCartEl = document.querySelector('.total-items-in-cart')

const PRODUCT_FILTERS = ["Todo", "Perros", "Gatos", "Accesorios", "Otros"];
let activeProductFilter = "Todo";
let searchQuery = "";

//recorreremos el array de products js y lo insertaremos dentro de "pro-container"
//creando todas esas categorias de html segun cada objeto del array products js
//Al final cuando se haga click en el carrito se agregara al addtocart para hacer la lista 
function renderProducts() {
  productsEl.innerHTML = "";
  const filteredProducts = getProductsToRender();
  filteredProducts.forEach((product) => {
    productsEl.innerHTML += ` 
        <div class="pro">
                <img src="${product.imgSrc}" alt="${product.name}">
                <div class="des">
                    <span>${product.desciption} </span>
                    <h5 class= "pname"> ${product.name}</h5>
                    <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <h4>${product.price} </h4>
                </div class="add-to-cart" >
                <i class="fa fa-shopping-cart cart" onclick="addToCart(${product.id})"></i>
            </div>
            `;
  })
}
renderProducts()

function getProductsToRender() {
  const filteredProducts = getFilteredProducts();
  if (!searchQuery) return filteredProducts;
  return filteredProducts.filter(p => (
    p.name.toLowerCase().includes(searchQuery) ||
    p.desciption.toLowerCase().includes(searchQuery)
  ));
}

function getFilteredProducts() {
  if (activeProductFilter === "Todo") return products;
  return products.filter(p => p.Type === activeProductFilter);
}

// Search
const searchBar = document.getElementById("card-filter");
searchBar.addEventListener("keyup", (e) => {
  searchQuery = e.target.value.toLowerCase();
  if (e.key === "Escape") e.target.value = "";
  renderProducts();
});

// Filters
const filtersEl = document.querySelector('#product-filter-buttons');
function renderProductFilterButtons() {
  filtersEl.innerHTML = "";
  PRODUCT_FILTERS.forEach((filter) => {
    const cssClass = filter === activeProductFilter ? "active" : "";
    filtersEl.innerHTML += `
      <button class="${cssClass}" onclick="onProductFilterClick('${filter}', this)">${filter}</button>
    `;
  })
}
renderProductFilterButtons();

function onProductFilterClick(filterType, button) {
  activeProductFilter = filterType;
  renderProducts();
  renderProductFilterButtons();
}

// Cart
let cart = JSON.parse(localStorage.getItem("CART")) || [];
updateCart();

function addToCart(id) {
  // check if prodcut already exist in cart
  if (cart.some((item) => item.id === id)) {
    changeNumberOfUnits("plus", id);
  } else {
    const item = products.find((product) => product.id === id);

    cart.push({
      ...item,
      numberOfUnits: 1,
    });
  }

  updateCart();
}


function updateCart() {
  renderCartItems();
  renderSubtotal();
  localStorage.setItem("CART", JSON.stringify(cart));
}

function renderSubtotal() {
  let totalPrice = 0,
    totalItems = 0;

  cart.forEach((item) => {
    totalPrice += item.price * item.numberOfUnits;
    totalItems += item.numberOfUnits;
  });

  subtotalEl.innerHTML = ` <tr>
                <td>subtotal</td>
                <td>$${totalPrice.toFixed(2)}</td>
                </tr> 
                <tr>
                <td>Envio</td>
                <td>Gratis</td>
                </tr>
                <tr>
                 <td><strong>Total</strong></td>
                <td><strong>$${totalPrice.toFixed(2)}</strong></td>
                </tr>`
  totalItemsInCartEl.innerHTML = totalItems
  localStorage.setItem("totalItems", totalItems)
}

function renderCartItems() {
  cartItemsEl.innerHTML = ""; //Clear cart Element
  cart.forEach((item) => {
    cartItemsEl.innerHTML += `
        <tr>
            <td><a href="#"><i class="fa-solid fa-xmark" onclick="removeItemFromCart(${item.id})"></i></a></td>
            <td><img src="${item.imgSrc}" alt="${item.name}"></td>
            <td>${item.name}</td>
            <td>$${item.price}</td>
            <td class="units">
            <div class="btn-minus" onclick="changeNumberOfUnits('minus',${item.id})">-</div>
            </td>
            <td class="units">
            <div class="number">${item.numberOfUnits}</div>
            </td>
            <td class="units">
            <div class="btn-plus" onclick="changeNumberOfUnits('plus',${item.id})">+</div>
            </td>
        </tr>
    `;
  });
}

function removeItemFromCart(id) {
  cart = cart.filter((item) => item.id !== id);
  updateCart();
}

/*se activa con el onclick de arriba (el usuario al clickear activa la funcion)*/
function changeNumberOfUnits(action, id) {
  cart = cart.map((item) => {
    let numberOfUnits = item.numberOfUnits;

    if (item.id === id) {
      if (action === "minus" && numberOfUnits > 1) {
        numberOfUnits--;
      } else if (action === "plus") {
        numberOfUnits++;
      }
    }

    return {
      ...item,
      numberOfUnits,
    };
  });

  updateCart();
}

//Search Bar
//primero tomamos como referencia el input de search que tiene el "card-filter" y guardamos en la constante
// a esa constante le agregamos un event listener ante cualquier tecleo introducido y abre funcion
//en la primer const (searchstr) guardamos el valor de lo ingresado (las letras) (hacemos minuscula)
//en el segundo filtramos los elementos de products y comparamos si el nombre incluye los strings ingresados en searchString
//si apreta ESCAPE se vacia el el searchString y se eliminan los items ya que le sumamos la clase FILTER de css(los esconde)
//devolvemos los nombres que incluyan a searchString
/* 
const searchBar = document.getElementById("card-filter");
const searched = document.getElementById('searched');

searchBar.addEventListener("keyup", (e) => {
  const searchString = e.target.value.toLowerCase();
  const filterName = products.filter(name => {
    return name.name.toLowerCase().includes(searchString)
  })

  if (e.key === "Escape")
    e.target.value = "";

  if (e.target.value === "")
    searched.setAttribute("id", "filter");

  displayCharacters(filterName)
})

const displayCharacters = (item) => {
  const htmlString = item.map((items) => {
    return `
          <div>
              <h6>${items.name}</h6>
              <p>$ ${items.price}</p>
              <img src="${items.imgSrc}" id="img-search"></img>
          </div>
      `;
  })
    .join('');
  searched.innerHTML = htmlString;
};
*/