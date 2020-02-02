const invalidPassword = () => ({
  type: 'INVALID_PASSWORD_TRUE',
  payload: {
    invalid: true,
  }
});

const validPassword = () => ({
  type: 'INVALID_PASSWORD_FALSE',
  payload: {
    invalid: false,
  }
});

export {
  invalidPassword,
  validPassword
};
