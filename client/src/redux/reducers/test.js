const initialState = {
  loggedIn: false
};

export default function tempLogger(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_LOG_STATUS_SUCCESS':
      return {
        loggedIn: action.payload
      };

    default:
      return state
  }
}