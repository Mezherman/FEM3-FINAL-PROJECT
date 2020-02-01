import axios from 'axios'

const initialState = {
  token: '',
  loggedIn: false,
  firstName: '',
  lastName: '',
  customer: {}
};

export default function user (state = initialState, action) {
  switch (action.type) {
    case 'FETCH_LOGIN_SUCCESS': {
      const { token } = action.payload;
      if (!axios.defaults.headers.common.Authorization) {
        axios.defaults.headers.common.Authorization = token ?? '';
      }
      return { ...state, ...action.payload };
    }

    case 'FETCH_LOGIN_ERROR':
      return state;

    case 'FETCH_ORDERS_SUCCESS':
      return {
        ...state,
        // customer: {
        //   ...state,
        ...action.payload
        // },
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
