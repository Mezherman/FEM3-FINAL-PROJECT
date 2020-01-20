const initialState = {
  token: '',
  loggedIn: false
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_LOGIN_SUCCESS':
      return action.payload;

    default: {
      return state
    }
  }
}
