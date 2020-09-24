import axios from 'axios';
import {
  WOMEN_PRODUCT_LIST_REQUEST,
  WOMEN_PRODUCT_LIST_SUCCESS,
  WOMEN_PRODUCT_LIST_FAILURE,
  CARD_LIST_REQUEST,
  CARD_LIST_SUCCESS,
  CARD_LIST_FAILURE,
  BEST_PRODUCT_LIST_REQUEST,
  BEST_PRODUCT_LIST_SUCCESS,
  BEST_PRODUCT_LIST_FAILURE,
} from 'reducers';

export const cardsList = () => async (dispatch) => {
  try {
    dispatch({ type: CARD_LIST_REQUEST });
    const { data } = await axios.get('/api/cards');
    dispatch({ type: CARD_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: CARD_LIST_FAILURE, payload: error.message });
  }
};

export const bestProductsList = () => async (dispatch) => {
  try {
    dispatch({ type: BEST_PRODUCT_LIST_REQUEST });
    const { data } = await axios.get('/api/best-products');
    dispatch({ type: BEST_PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: BEST_PRODUCT_LIST_FAILURE, payload: error.message });
  }
};

export const womenProductsList = () => async (dispatch) => {
  try {
    dispatch({ type: WOMEN_PRODUCT_LIST_REQUEST });
    const { data } = await axios.get('/api/women-products');
    dispatch({ type: WOMEN_PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: WOMEN_PRODUCT_LIST_FAILURE, payload: error.message });
  }
};
