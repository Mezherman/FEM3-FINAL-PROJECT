const initialState = {};

export default function Categories(state = initialState, action) {
  switch (action.type) {
    case 'GET_CATEGORIES':
      return action.payload;

    default: {
      return state
    }
  }
}