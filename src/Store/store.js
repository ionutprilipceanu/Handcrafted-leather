import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { productsReducer } from '../reducers/productReducers';

var store = createStore(productsReducer)
if (typeof window !== 'undefined') {

  const initialState = {};
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  store = createStore(combineReducers({
    products: productsReducer,
  }),
    initialState,
    composeEnhancer(applyMiddleware(thunk))
  );

} else {
  // if window does not exist

}

export default store;

