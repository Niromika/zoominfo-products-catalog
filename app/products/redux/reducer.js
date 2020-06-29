import * as actions from './actions';

const initialState = {
  data: [],
  hasMore: null,
  loading: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_PRODUCTS_START:
      return Object.assign({}, state, {
        loading: true,
      });
    case actions.SEARCH_PRODUCTS_START:
      return Object.assign({}, state, {
        loading: true,
        data: []
      });
    case actions.SEARCH_PRODUCTS_SUCCESS:
    case actions.FETCH_PRODUCTS_SUCCESS: 
      const {payload} = action;
      debugger;
      return Object.assign({}, state, {
        loading: false,
        hasMore: payload.hasMore,
        data: [...state.data, ...payload.data],
      });
    default:
      return state;
  }
}

export default reducer;
