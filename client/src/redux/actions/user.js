import jwtDecode from 'jwt-decode';

const loginLoaded = () => {
  const token = localStorage.getItem('token');
  if (!token) {
    return {
      type: 'FETCH_LOGIN_ERROR',
    }
  }

  const decoded = jwtDecode(token);
  const { firstName, lastName, exp } = decoded;

  const time = new Date().getTime() / 1000;

  if (time < exp) {
    return {
      type: 'FETCH_LOGIN_SUCCESS',
      payload: {
        loggedIn: true,
        token,
        firstName,
        lastName
      }
    }
  }

  return {
    type: 'FETCH_LOGIN_ERROR',
  }
};

export default loginLoaded;
