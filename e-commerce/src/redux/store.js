import { combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { createStore } from "redux";
import { drawerReducer } from "/src/redux/reducers/drawer.js";
import { productsReducers } from "./reducers/products";
import { productReducers } from "./reducers/products/detail";
let initialState = {};

const reducers = combineReducers({
  drawer: drawerReducer,
  products : productsReducers,
  product : productReducers

});
const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
