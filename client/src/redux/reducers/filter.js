const initialState = {
  filterResults: {
    color: []
  },
  currentPrice: [],
  filterParams: {
    colors: []
  }
};

export default function filterReducer(state = initialState, action) {
  // console.log(action.payload);
  switch (action.type) {
    case 'GET_FILTER_PRODUCTS': {
      // console.log('in reducer =', state.filters);
      return {
        ...state,
        filterResults: action.payload
      };
    }

    case 'GET_PRICE_PRODUCTS':
      return {
        ...state,
        currentPrice: action.payload
      };

    case 'FETCH_FILTER_PARAMS_SUCCESS':
      return {
        ...state,
        filterParams: {
          ...state.filterParams,
          [action.payload.filterTitle]: action.payload.params
        }
      };

    default:
      return state
  }
}
