// import axios from 'axios';
//
// axios.defaults.baseURL = 'http://localhost:5000';
//
// function login(loginOrEmail, password) {
//   const userData = {
//     loginOrEmail: 'vlad.mezhik@gmail.com',
//     password: 'ITmfem3'
//   };
//
//   axios
//     .post('/customers/login', userData)
//     .then((response) => {
//       axios.defaults.headers.common.Authorization = response.data.token;
//       console.log(response.data.token);
//       console.log('Logged in successfully');
//     })
//     .catch((error) => {
//       console.log('ERROR = ', error);
//     })
// }
//
// export default login;