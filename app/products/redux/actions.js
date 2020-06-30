import { BASE_API } from '../../config';

export const SEARCH_PRODUCTS_START = 'SEARCH_PRODUCTS_START';
export const SEARCH_PRODUCTS_SUCCESS = 'SEARCH_PRODUCTS_SUCCESS';
export const search = title => async dispatch => {
  dispatch({
    type: SEARCH_PRODUCTS_START,
  });

  const res = await fetch(`${BASE_API}/api/products?title=${title}`);
  const body = await res.json();

  dispatch({
    type: SEARCH_PRODUCTS_SUCCESS,
    payload: body
  });
};

export const FETCH_PRODUCTS_START = 'FETCH_PRODUCTS_START';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const fetchProducts = (page, title = '') => async dispatch => {
  dispatch({
    type: FETCH_PRODUCTS_START,
  });

  const res = await fetch(`${BASE_API}/api/products/?page=${page}&title=${title}`);
  const body = await res.json();
 
  dispatch({
    type: FETCH_PRODUCTS_SUCCESS,
    payload: body
  });
};
