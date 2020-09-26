import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import { bestProductListReducer, womenProductListReducer, cardListReducer } from 'reducers';
import thunk from 'redux-thunk';

const initialState = {};
const reducer = combineReducers({
  bestProductList: bestProductListReducer,
  womenProductList: womenProductListReducer,
  cardList: cardListReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancers(applyMiddleware(thunk)));

export default store;