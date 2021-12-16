import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { pizzaReducer } from "./pizzaReducer";
import cardReducer from "./cardReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  pizzas: pizzaReducer,
  card: cardReducer,
});
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
