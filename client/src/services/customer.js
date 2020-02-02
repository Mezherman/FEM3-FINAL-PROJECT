import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000';

// export default async function login(userData = null) {
//   if (!userData) {
//     userData = {
//       loginOrEmail: 'shpakylia91@gmail.com',
//       password: '1111111'
//     };
//   }
//   return axios.post('/customers/login', userData)
//     .then((response) => response.data)
//     .then((data) => {
//       if (data.success) {
//         axios.defaults.headers.common.Authorization = data.token;
//         window.localStorage.setItem('auth-token', data.token)
//       }
//     })
// }

const getCustomer = () => axios
  .get('/customers/customer')
  .then((loggedInCustomer) => loggedInCustomer)
  .catch((err) => err);
export default getCustomer
