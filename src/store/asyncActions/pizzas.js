import { getProducts, getProductByFilter } from "../../features/catchData";
import { addPizzasAction, filterByPrice } from "../pizzaReducer";

export const fetchPizzas = () => {
  return function (dispatch) {
    getProducts().then((data) => dispatch(addPizzasAction(data)));
  };
};
export const fetchPizzasByFilter = (min_price) => {
  return function (dispatch) {
    getProductByFilter(min_price).then((data) => dispatch(filterByPrice(data)));
  };
};
