const initialState = {
  token: '',
  loggedIn: false,
  firstName: '',
  lastName: ''
};

export default function userReducer(state = initialState, action) {
  console.log('user reduser ', action);
  switch (action.type) {
    case 'FETCH_LOGIN_SUCCESS':
      return { ...state, ...action.payload };

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
