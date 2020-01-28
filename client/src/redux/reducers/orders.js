// const initialState = {
//   token: '',
//   loggedIn: false,
//   firstName: '',
//   lastName: '',
//   customer: {}
// };

export default function orders(state, action) {
  switch (action.type) {
    case 'FETCH_ORDERS_SUCCESS':
      return { ...state, ...action.payload };

    default: {
      return state
    }
  }
}
