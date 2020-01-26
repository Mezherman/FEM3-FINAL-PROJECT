import jwtDecode from 'jwt-decode';
// import getUserData from '../../services/getUserData';

export const loginLoaded = () => {
  // console.log('Params from action', params);
  const token = localStorage.getItem('token');
  if (!token) {
    return {
      type: 'FETCH_LOGIN_ERROR',
    }
  }

  // let userData = {};

  // console.log('USER DATA FROM ACTION', userData);

  const decoded = jwtDecode(token);
  // const { firstName, lastName, exp } = decoded;

  const time = new Date().getTime() / 1000;

  if (time < decoded.exp) {
    return {
      type: 'FETCH_LOGIN_SUCCESS',
      payload: {
        loggedIn: true,
        token,
      }
    }
  }
  return {
    type: 'FETCH_LOGIN_ERROR',
  }
};

export const userLoadedData = (params) => ({
  type: 'FETCH_USER_DATA_SUCCESS',
  payload: {
    ...params
  }
});
