const initialState = {
  catalog: {
    allCategories: [],
    mainCategories: [],
  },
  error: null,
  catalogLoading: true
};

export default function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_CATALOG_REQUEST':
      return {
        catalog: {},
        error: null,
        catalogLoading: true
      };

    case 'FETCH_CATALOG_SUCCESS':
      return {
        catalog: action.payload.catalog,
        error: null,
        catalogLoading: false
      };

    case 'FETCH_CATALOG_FAILURE':
      return {
        catalog: {},
        error: action.payload.error,
        catalogLoading: false
      };

    default: {
      return state
    }
  }
}