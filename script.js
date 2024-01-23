let menus = [
  {
    name: "Pizza Speciale",
    description:
      "mit Tomaten, Mozzarella, Vorderschinken, Champignons, Paprika und Salami",
    price: 10.50,
  },
  {
    name: "Rigatoni al Forno",
    description: "mit Vorderschinken, Champignons, Hackfleisch und Sahnesauce",
    price: 10.80,
  },
  {
    name: "Spaghetti Carbonara",
    description: "mit Ei, Speck, Parmesan und Sahne",
    price: 10.00,
  },
  {
    name: "Schäuferle mit Kloß und Soße",
    description: "mit Schweinefleisch",
    price: 14.50,
  },
  {
    name: "3 fränkische Bratwürste mit Sauerkraut und Brot",
    description: "mit Schweinefleisch",
    price: 11.50,
  },
  {
    name: "Leberkäse mit Spiegelei und Spinat",
    description: "der mit dem Blubb",
    price: 10.50,
  },
];

let menusBasket = [];
let priceBasket = [];
let amountBasket = [];

function showMenus() {
  let menuContainer = document.getElementById("menus");
  menuContainer.innerHTML = ``;
  for (let i = 0; i < menus.length; i++) {
    const item = menus[i];
    menuContainer.innerHTML += /* html */ `
    <div id="menus" class="food_container">
        <h2 id="name">${item["name"]}</h2>
        <span id="description">${item["description"]}</span>
        <div class="price">
            <div > 
                <h2 id="price" >${item["price"]} €</h2>
            </div> 
            <div>
                <button class="addButton">+</button>
            </div>
        </div>
    </div>
    `;
  }
}

// function addToBasket(name, price){
// names.push(name);
// prices.push(price);

// }

// function updateShoppingBasket(){
// let sum = 0;

// for (let i = 0; i < prices.length; i++) {
//     sum +=prices[i];

// }
// let finalSum = sum + 1;//Versandkosten erfassen
// document.getElementById(...).innerHTML = finalSum;
// }
