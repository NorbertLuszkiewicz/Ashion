import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import {
  bestProductListReducer,
  womenProductListReducer,
  cardListReducer,
  cartListReducer,
  productDetailsReducer,
} from 'reducers';
import thunk from 'redux-thunk';

const initialState = {};
const reducer = combineReducers({
  bestProductList: bestProductListReducer,
  womenProductList: womenProductListReducer,
  cardList: cardListReducer,
  cartList: cartListReducer,
  productDetails: productDetailsReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancers(applyMiddleware(thunk)));

export default store;
