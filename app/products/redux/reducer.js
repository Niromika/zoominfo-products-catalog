import * as actions from './actions';
// import {search} from '../../server/routes/products';

const initialState = {
  data: [],
  hasMore: null,
  totalCount: null,
  loading: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_PRODUCTS_START:
    case actions.FETCH_PRODUCT_START:
      return Object.assign({}, state, {
        loading: true,
      });
    case actions.FETCH_PRODUCTS_SUCCESS: {
      const {payload} = action;
      return Object.assign({}, state, {
        loading: false,
        hasMore: payload.hasMore,
        data: payload.data,
        totalCount: payload.totalCount,
      });
    }
    default:
      return state;
  }
}

// export default reducer;
