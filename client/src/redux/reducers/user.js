const initialState = {
  token: '',
  loggedIn: false,
  firstName: '',
  lastName: ''
};

const initialCustomerData = {
  gender: '',
  firstName: '',
  lastName: '',
  telephone: '',
  email: '',
  login: ''
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_LOGIN_SUCCESS':
      return action.payload;

    case 'FETCH_LOGIN_ERROR':
      return state;

    case 'FETCH_USER_DATA_SUCCESS':
      return {
        ...state,
        customerData: {
          ...initialCustomerData,
          ...action.payload
        },
      };

    default: {
      return state
    }
  }
}
