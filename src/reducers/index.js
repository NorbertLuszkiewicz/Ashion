export const BEST_PRODUCT_LIST_REQUEST = 'BEST_PRODUCT_LIST_REQUEST';
export const BEST_PRODUCT_LIST_SUCCESS = 'BEST_PRODUCT_LIST_SUCCESS';
export const BEST_PRODUCT_LIST_FAILURE = 'BEST_PRODUCT_LIST_FAILURE';

export const WOMEN_PRODUCT_LIST_REQUEST = 'WOMEN_PRODUCT_LIST_REQUEST';
export const WOMEN_PRODUCT_LIST_SUCCESS = 'WOMEN_PRODUCT_LIST_SUCCESS';
export const WOMEN_PRODUCT_LIST_FAILURE = 'WOMEN_PRODUCT_LIST_FAILURE';

export const CARD_LIST_REQUEST = 'CARD_LIST_REQUEST';
export const CARD_LIST_SUCCESS = 'CARD_LIST_SUCCESS';
export const CARD_LIST_FAILURE = 'CARD_LIST_FAILURE';

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
