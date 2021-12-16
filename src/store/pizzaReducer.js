const defaultState = {
  pizzas: [],
  catalogPizzas: [],
};

const compareByAlhabetAndCount = (a, b) => {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
  return a.count - b.count;
};
const compareByPrice = (a, b) => {
  return a.price - b.price;
};
const compareByCount = (a, b) => {
  return a.count - b.count;
};
const findPizzas = (payload) => {
  let pizzas = payload.pizzas;
  let input = payload.input.toUpperCase();
  if (input === "") {
    return pizzas;
  }
  return pizzas.filter((pizza) => pizza.name.toUpperCase().includes(input));
};
const priceBiggerThan = (payload) => {
  let input = payload.input;
  return payload.pizzas.filter((pizza) => pizza.price > input);
};

const ADD_ALL_PIZZAS = "ADD_ALL_PIZZAS";
const SORT_BY_PRICE = "SORT_BY_PRICE";
const SORT_BY_COUNT = "SORT_BY_COUNT";
const SEARCH_PIZZAS = "SEARCH_PIZZAS";
const FILTER_BY_PRICE = "FILTER_BY_PRICE";

export const pizzaReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_ALL_PIZZAS:
      action.payload.sort(compareByAlhabetAndCount);
      return {
        ...state,
        pizzas: [...action.payload],
        catalogPizzas: [...action.payload],
      };
    case SORT_BY_PRICE:
      return {
        ...state,
        catalogPizzas: [...action.payload.sort(compareByPrice)],
      };
    case SORT_BY_COUNT:
      return {
        ...state,
        catalogPizzas: [...action.payload.sort(compareByCount)],
      };
    case SEARCH_PIZZAS:
      return { ...state, catalogPizzas: [...findPizzas(action.payload)] };
    case FILTER_BY_PRICE:
    console.log(action.payload);
      return { ...state, catalogPizzas: action.payload };

    default:
      return state;
  }
};
export const addPizzasAction = (payload) => ({ type: ADD_ALL_PIZZAS, payload });
export const sortPyPrice = (payload) => ({ type: SORT_BY_PRICE, payload });
export const sortByCount = (payload) => ({ type: SORT_BY_COUNT, payload });
export const searchPizzas = (payload) => ({ type: SEARCH_PIZZAS, payload });
export const filterByPrice = (payload) => ({ type: FILTER_BY_PRICE, payload });
