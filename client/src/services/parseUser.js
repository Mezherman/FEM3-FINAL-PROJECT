// import jwtDecode from 'jwt-decode';
import { loginLoaded } from '../redux/actions/user';

// const token = localStorage.getItem('token');

export default function parseUser() {
  const token = localStorage.getItem('token');
  if (token) {
    return loginLoaded(token)
  }
  return null
}
