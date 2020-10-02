import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import Cookie from 'js-cookie';
import {
  bestProductListReducer,
  womenProductListReducer,
  cardListReducer,
  productDetailsReducer,
  AaddToCartReducer,
} from 'reducers';
import thunk from 'redux-thunk';

const cartItems = Cookie.getJSON('cartItems') || [];

const initialState = { cart: { cartItems } };
const reducer = combineReducers({
  bestProductList: bestProductListReducer,
  womenProductList: womenProductListReducer,
  cardList: cardListReducer,
  cart: AaddToCartReducer,
  productDetails: productDetailsReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancers(applyMiddleware(thunk)));

export default store;
