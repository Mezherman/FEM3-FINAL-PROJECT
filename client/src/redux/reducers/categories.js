const initialState = {};

function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_CATEGORIES':
      return action.payload;

    default: {
      return state
    }
  }
}

function mainCategoriesReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_MAIN_CATEGORIES':
      return action.payload;

    default: {
      return state
    }
  }
}

export {
  categoriesReducer,
  mainCategoriesReducer
};