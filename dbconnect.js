import {appendPizza} from './main.js'
export const pizzaApi = 'http://127.0.0.1:8000/products/'
export const pizzaDelete = 'http://127.0.0.1:8000/product/'


export function deletePizza(pizza){
  fetch(pizzaDelete + `${pizza.id}/`, {
      method: 'Delete',
      headers: {
          'Content-Type': 'application/json'
      },
      body:JSON.stringify(pizza)
  })
}

export function postPizza(pizza){
  fetch(pizzaApi, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body:JSON.stringify(pizza)
  })
  .then(response=>response.json())
  .then(pizza=>appendPizza(pizza))
}
