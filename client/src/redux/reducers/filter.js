const initialState = {
  filterResults: {
    color: [],
    brand: [],
    manufacturer: [],
    price: [0, 700],
  },
  filterParams: {
    colors: [],
    brands: [],
    manufacturers: []
  }
};

export default function filterReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_FILTER_PRODUCTS': {
      return {
        ...state,
        filterResults: action.payload
      };
    }

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
