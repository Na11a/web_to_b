import {getProducts} from "../../features/catchData";
import { addPizzasAction } from "../pizzaReducer";

export const fetchPizzas = () => {
  return function (dispatch) {
    getProducts().then((data) => dispatch(addPizzasAction(data)));
  };
};
