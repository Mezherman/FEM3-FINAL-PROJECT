const initialState = {
  logout: false,
};

export default function logout (state = initialState, action) {
  if (action.type === 'LOGOUT_TRUE') {
    return {
      logout: action.payload
    }
  }
  return state
}
