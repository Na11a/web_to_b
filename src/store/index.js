import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {pizzaReducer} from './pizzaReducer'
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  pizzas: pizzaReducer,
});
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
