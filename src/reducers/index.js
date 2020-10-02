export const BEST_PRODUCT_LIST_REQUEST = 'BEST_PRODUCT_LIST_REQUEST';
export const BEST_PRODUCT_LIST_SUCCESS = 'BEST_PRODUCT_LIST_SUCCESS';
export const BEST_PRODUCT_LIST_FAILURE = 'BEST_PRODUCT_LIST_FAILURE';

export const WOMEN_PRODUCT_LIST_REQUEST = 'WOMEN_PRODUCT_LIST_REQUEST';
export const WOMEN_PRODUCT_LIST_SUCCESS = 'WOMEN_PRODUCT_LIST_SUCCESS';
export const WOMEN_PRODUCT_LIST_FAILURE = 'WOMEN_PRODUCT_LIST_FAILURE';

export const CARD_LIST_REQUEST = 'CARD_LIST_REQUEST';
export const CARD_LIST_SUCCESS = 'CARD_LIST_SUCCESS';
export const CARD_LIST_FAILURE = 'CARD_LIST_FAILURE';

export const CART_LIST_REQUEST = 'CART_LIST_REQUEST';
export const CART_LIST_SUCCESS = 'CART_LIST_SUCCESS';
export const CART_LIST_FAILURE = 'CART_LIST_FAILURE';

export const DETAILS_PRODUCT_REQUEST = 'DETAILS_PRODUCT_REQUEST';
export const DETAILS_PRODUCT_SUCCESS = 'DETAILS_PRODUCT_SUCCESS';
export const DETAILS_PRODUCT_FAILURE = 'DETAILS_PRODUCT_FAILURE';

export const CART_REMOVE_ITEM = 'CART_REMOVE_ITEM';

export const ADD_PRODUCT = 'DETAILS_PRODUCT';

export function bestProductListReducer(state = { bestProducts: [] }, action) {
  switch (action.type) {
    case BEST_PRODUCT_LIST_REQUEST:
      return { productsLoading: true };
    case BEST_PRODUCT_LIST_SUCCESS:
      return { productsLoading: false, bestProducts: action.payload };
    case BEST_PRODUCT_LIST_FAILURE:
      return { productsLoading: false, productsError: action.payload };
    default:
      return state;
  }
}

export function cardListReducer(state = { cards: [] }, action) {
  switch (action.type) {
    case CARD_LIST_REQUEST:
      return { cardsLoading: true };
    case CARD_LIST_SUCCESS:
      return { cardsLoading: false, cards: action.payload };
    case CARD_LIST_FAILURE:
      return { cardsLoading: false, cardsError: action.payload };
    default:
      return state;
  }
}

export function womenProductListReducer(state = { products: [] }, action) {
  switch (action.type) {
    case WOMEN_PRODUCT_LIST_REQUEST:
      return { loading: true };
    case WOMEN_PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };
    case WOMEN_PRODUCT_LIST_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

export function cartListReducer(state = { products: [] }, action) {
  switch (action.type) {
    case CART_LIST_REQUEST:
      return { loading: true };
    case CART_LIST_SUCCESS:
      return { loading: false, products: action.payload };
    case CART_LIST_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

export function productDetailsReducer(state = { product: {} }, action) {
  switch (action.type) {
    case DETAILS_PRODUCT_REQUEST:
      return { loading: true };
    case DETAILS_PRODUCT_SUCCESS:
      return { loading: false, product: action.payload };
    case DETAILS_PRODUCT_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

export function AaddToCartReducer(state = { cartItems: [] }, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      const item = action.payload;
      const product = state.cartItems.find((x) => x.id === item.id);
      if (product) {
        return { cartItems: state.cartItems.map((x) => (x.id === product.id ? product : x)) };
      } else return { cartItems: [...state.cartItems, item] };

    case CART_REMOVE_ITEM:
      return { cartItems: state.cartItems.filter((x) => x.id !== action.payload) };
    default:
      return state;
  }
}
