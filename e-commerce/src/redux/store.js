import { combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { createStore } from "redux";
import { drawerReducer } from "./reducers/drawer";
import { productsReducers } from "./reducers/products";
import { productReducers } from "./reducers/products/detail";
import { cardReducers } from "./reducers/card";

const cardItems = JSON.parse(localStorage.getItem('cardItems')) || []

let initialState = {
  card: {cardItems}
};

const reducers = combineReducers({
  drawer: drawerReducer,
  products : productsReducers,
  product : productReducers,
  card : cardReducers

});
const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
