const SEND_REGISTRATION_FORM = 'SEND_REGISTRATION_FORM';

const initialState = {
  form: {
    gender: 'Mr',
    firstName: '',
    lastName: '',
    // birthday: '',
    birthdayDay: '',
    birthdayMonth: '',
    birthdayYear: '',
    email: '',
    password: '',
    country: 'Austria',
    agreement: false,
    isAdmin: false,
  }
};

export default function formReducer(state = initialState, action) {
  switch (action.type) {
    case SEND_REGISTRATION_FORM:
      return action.payload.form;

    default: {
      return state
    }
  }
}
