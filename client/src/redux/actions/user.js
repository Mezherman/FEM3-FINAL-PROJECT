const loginLoaded = (token) => {
  return {
    type: 'FETCH_LOGIN_SUCCESS',
    payload: {
      token,
      loggedIn: true
    }
  }
};

export default loginLoaded;
