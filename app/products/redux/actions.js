const BASE_API = 'http://localhost:3000/api';

export const SEARCH_PRODUCTS_START = 'SEARCH_PRODUCTS_START';
export const SEARCH_PRODUCTS_SUCCESS = 'SEARCH_PRODUCTS_SUCCESS';
export const search = title => async dispatch => {
  dispatch({
    type: SEARCH_PRODUCTS_START,
  });

  const res = await fetch(`${BASE_API}/products?title=${title}`);
  const body = await res.json(); // {hasMore, data, totalCount}

  dispatch({
    type: SEARCH_PRODUCTS_SUCCESS,
    payload: body.data,
  });
};

export const FETCH_PRODUCTS_START = 'FETCH_PRODUCTS_START';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const fetchProduts = () => async dispatch => {
  dispatch({
    type: FETCH_PRODUCTS_START,
  });

  const res = await fetch(`${BASE_API}/products/`);
  const body = await res.json();

  dispatch({
    type: FETCH_PRODUCTS_SUCCESS,
    payload: body.data,
  });
};

export const FETCH_PRODUCT_START = 'FETCH_PRODUCT_START';
export const FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCT_SUCCESS';
export const fetchProduct = id => async dispatch => {
  dispatch({
    type: FETCH_PRODUCT_START,
  });

  const res = await fetch(`${BASE_API}/products/${id}`);
  const body = await res.json();

  dispatch({
    type: FETCH_PRODUCT_SUCCESS,
    payload: body.data,
  });
};
