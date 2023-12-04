import { combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { createStore } from "redux";
import { drawerReducer } from "/src/redux/reducers/drawer.js";

let initialState = {};

const reducers = combineReducers({
  drawer: drawerReducer,
});
const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
