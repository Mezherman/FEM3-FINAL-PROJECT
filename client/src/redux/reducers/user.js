const initialState = {
  token: '',
  loggedIn: false,
  firstName: '',
  lastName: '',
  customer: {}
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_LOGIN_SUCCESS':
      return action.payload;

    case 'FETCH_LOGIN_ERROR':
      return {
        token: '',
        loggedIn: false,
        firstName: '',
        lastName: ''
      };

    case 'FETCH_CUSTOMER_DATA_SUCCESS':
      return {
        ...state,
        customer: action.payload
      };

    case 'FETCH_CUSTOMER_DATA_FAILURE':
      return state;

    default: {
      return state
    }
  }
}
