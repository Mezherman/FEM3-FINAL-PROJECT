const initialState = {
  loggedIn: true,
  token: window.localStorage.getItem('auth-token')
};

export default function userReduser(state = initialState, action) {
  return state;
}