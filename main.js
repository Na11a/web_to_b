import { postPizza, deletePizza, pizzaApi } from "./dbconnect.js";

class Pizza {
  constructor(name) {
    if (typeof name === "object") {
      Object.assign(this, name);
    } else {
      this.name = name;
      this.count = count;
      this.price = price;
      this.id = id;
      this.width = width;
      this.height = height;
    }
  }
}

var pizzas = [];

fetch(`${pizzaApi}`)
  .then((response) => response.json())
  .then((pizzas) => pizzas.products.forEach(appendPizza));

let pizzasElement = document.getElementById("pizzas");
let buttonSummaryElement = document.getElementById("summaryButton");
let buttonSortElement = document.getElementById("sortBySquare");
let summaryPriceElement = document.getElementById("summary");
let formPizza = document.forms["pizza"];
let searchInput = document.getElementById("searchInput");
let current_pizzas = [];

searchInput.addEventListener("input", (event) => {
  event.preventDefault();
  let name = event.target.value;
  updateDOM(pizzas.filter((pizza) => new RegExp(name).test(pizza.name)));
});
function compareSquare(a, b) {
  return a.size.width * a.height - b.widht * b.height;
}

buttonSortElement.addEventListener("click", () => {
  updateDOM(
    current_pizzas.sort(
      (a, b) => a.size.height * a.size.width - b.size.height * b.size.width
    )
  );
});

buttonSummaryElement.addEventListener("click", (event) => {
  let mount_price = current_pizzas.reduce((p, c) => p + c.price, 0);
  summaryPriceElement.innerText = mount_price;
});

export function appendPizza(pizza) {
  pizzas.push(pizza);
  updateDOM(pizzas);
  current_pizzas = pizzas;
}
formPizza.addEventListener("submit", (event) => {
  event.preventDefault();
  pizza = new Pizza(Object.fromEntries(new FormData(formPizza).entries()));
  postPizza(pizza);
});
pizzasElement.addEventListener("click", (event) => {
  let target = event.target;
  if (target.className === "delete") {
    let pizza_id = parseInt(target.closest(".pizza-card").id.split("-")[1]);
    let pizza = pizzas.find((pizza) => pizza.id === pizza_id);
    deletePizza(pizza);
    pizzas = pizzas.filter((pizza) => pizza.id !== pizza_id);
    updateDOM(pizzas);
  }
});

function updateDOM(pizzas) {
  current_pizzas = pizzas;
  pizzasElement.innerHTML = "";
  pizzas.forEach((pizza) => {
    pizzasElement.innerHTML += `<div class="pizza-card" id=pizza-${pizza.id}>
                      <button class="edit" onclick="location.href='./edit.html?get=${pizza.id}'">Edit</button>
                      <h3>${pizza.name}</h3>
                      <p class="price">Price = ${pizza.price}</p>
                      <p>Count = ${pizza.count}</p>
                      <ul>
                        <p>width ${pizza.size.width}</p>
                        <p>height ${pizza.size.height}</p>
                      </ul>
                      <button class="delete">Delete</button>
    </div>`;
  });
}
pizzas.forEach((item) => {
  console.log(item);
});
console.log(pizzas);
