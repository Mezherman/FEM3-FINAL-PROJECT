const initialState = {
  token: '',
  loggedIn: false,
  firstName: '',
  lastName: ''
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

    default: {
      return state
    }
  }
}
