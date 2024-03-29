// Preis umwandeln in zwei Nachkommastellen und Komma statt Punkt
const options = {
  style: "decimal",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
};

// Definition der Menüs
let menus = [
  {
    name: "Pizza Speciale",
    description:
      "mit Tomaten, Mozzarella, Vorderschinken, Champignons, Paprika und Salami",
    price: 10.5,
    priceformatted: (10.5).toLocaleString("de-DE", options),
    amount: 1,
  },
  {
    name: "Rigatoni al Forno",
    description: "mit Vorderschinken, Champignons, Hackfleisch und Sahnesauce",
    price: 10.8,
    priceformatted: (10.8).toLocaleString("de-DE", options),
    amount: 1,
  },
  {
    name: "Spaghetti Carbonara",
    description: "mit Ei, Speck, Parmesan und Sahne",
    price: 10.0,
    priceformatted: (10.0).toLocaleString("de-DE", options),
    amount: 1,
  },
  {
    name: "Schäuferle mit Kloß und Soße",
    description: "mit Schweinefleisch",
    price: 14.5,
    priceformatted: (14.5).toLocaleString("de-DE", options),
    amount: 1,
  },
  {
    name: "3 fränkische Bratwürste mit Sauerkraut und Brot",
    description: "mit Schweinefleisch",
    price: 11.5,
    priceformatted: (11.5).toLocaleString("de-DE", options),
    amount: 1,
  },
  {
    name: "Leberkäse mit Spiegelei und Spinat",
    description: "der mit dem Blubb",
    price: 10.5,
    priceformatted: (10.5).toLocaleString("de-DE", options),
    amount: 1,
  },
];

// Definition Warenkorb
let menuBasket = [];
let priceBasket = [];
let amountBasket = [];

// Aufruf der Menüs
function showMenus() {
  let menuContainer = document.getElementById("menus"); //Variable menuContainer
  menuContainer.innerHTML = ``;
  for (let i = 0; i < menus.length; i++) {
    const menu = menus[i]; //Variable menu
    menuContainer.innerHTML += generateShowMenuHTML(menu, i);
  }
}

function generateShowMenuHTML(menu, i) {
  return `
    <div id="menus" class="food_container">
        <h2 id="name">${menu["name"]}</h2>
        <span id="description">${menu["description"]}</span>
        <div class="price">
            <div >
                <h2 id="price" >${menu["priceformatted"]} € </h2>
            </div>
            <div>
                <button onclick="addToBasket(${i})" class="addButton">+</button>
            </div>
        </div>
    </div>
    `;
}

function addToBasket(i) {
  let name = menus[i]["name"];
  let price = menus[i]["price"];
  let index = menuBasket.indexOf(name);
  if (index == -1) {
    menuBasket.push(name);
    priceBasket.push(price);
    amountBasket.push(1);
  } else {
    amountBasket[index]++;
  }
  renderBasket();
}

function add_amount(i) {
  amountBasket[i]++;
  renderBasket(i);
}

function remove_amount(i) {
  if (amountBasket[i] > 1) {
    amountBasket[i]--;
  } else {
    menuBasket.splice(i, 1);
    priceBasket.splice(i, 1);
    amountBasket.splice(i, 1);
  }
  renderBasket();
}

function renderBasket() {
  let basket = document.getElementById("shopping-basket");
  basket.innerHTML = ``;
  for (let i = 0; i < menuBasket.length; i++) {
    const menuBasketi = menuBasket[i];
    const priceBasketi = priceBasket[i];
    const amountBasketi = amountBasket[i];
    const SemitotalSum = (priceBasketi * amountBasketi).toLocaleString(
      "de-DE",
      options
    );
    basket.innerHTML += generateBasketHTML(
      amountBasketi,
      menuBasketi,
      SemitotalSum,
      i
    );
    total();
  }
}

function generateBasketHTML(amount, menu, SemitotalSum, i) {
  return `
      <div id="summeContainer" class="stylefood">
         ${amount}x ${menu} ${SemitotalSum} €
        <div class="symbole">
        <button class= "add" onclick='add_amount(${i})'>+</button>
        </div>
      <button class="remove" onclick='remove_amount(${i})'>-</button>
      </div>
      `;
}

function total() {
  let totalElement = document.getElementById("total");
  let total = 0;
  for (let i = 0; i < menuBasket.length; i++) {
    const price = priceBasket[i];
    const amount = amountBasket[i];
    total += price * amount;
  }
  totalElement.innerHTML = /* html */ `
      <div class="total">
        <div class="subtotal">
          <div>Zwischensumme</div>
          <div>${total.toLocaleString("de-DE", options)} €</div>
        </div>
        <div class="delivery">
          <div>Lieferkosten</div>
          <div>5,00 €</div>
        </div>
        <div class="total" id="total">
          <div>Gesamtsumme</div>
          <div>${(total + 5).toLocaleString("de-DE", options)} €</div>
        </div>
        <div>
          <button onclick="notdefined()" class="shopping-cart-order">Bestellen</button>
          <button onclick="window.location.reload()" class="shopping-cart-back">zurück zum Menü</button>
        </div>
      </div>
     `;
}

function notdefined() {
  let basket = document.getElementById("shopping-basket");
  basket.innerHTML = ``;
  alert("Ein erwarteter Fehler ist aufgetreten, bitte Seite neu laden :-)");
}

window.onscroll = function () {
  let shoppingbasket = document.getElementById("right");
  if (window.scrollY > 0) {
    shoppingbasket.style = "top: 0";
  } else {
    shoppingbasket.style = "top: 100px";
  }
};

function openOrCloseSomeBox() {
  document.getElementById("left").classList.add("displayNone");
  document.getElementById("right").classList.add("displayFlex");
}
