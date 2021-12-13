const defaultState = {
  pizzas: [],
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

const ADD_ALL_PIZZAS = "ADD_ALL_PIZZAS";
const SORT_BY_PRICE = "SORT_BY_PRICE";
const SORT_BY_COUNT = "SORT_BY_COUNT";

export const pizzaReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_ALL_PIZZAS:
      action.payload.sort(compareByAlhabetAndCount);
      return { ...state, pizzas: [...action.payload] };
    case SORT_BY_PRICE:
      return { ...state, pizzas: [...action.payload.sort(compareByPrice)] };
    case SORT_BY_COUNT:
      return { ...state, pizzas: [...action.payload.sort(compareByCount)] };
    default:
      return state;
  }
};
export const addPizzasAction = (payload) => ({ type: ADD_ALL_PIZZAS, payload });
export const sortPyPrice = (payload) => ({ type: SORT_BY_PRICE, payload });
export const sortByCount = (payload) => ({ type: SORT_BY_COUNT, payload });
