import { LOGOUT_TRUE } from './actionTypes'

const logoutAction = () => ({
  type: LOGOUT_TRUE,
  payload: true
});

export default logoutAction;