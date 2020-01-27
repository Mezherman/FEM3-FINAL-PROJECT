import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000';

function postNewUser(newUser, successModal, errorModal) {
  axios
    .post('/customers', newUser)
    .then((response) => {
      console.log(response);
      if (response.statusText === 'OK') {
        successModal();
      }
    })
    .catch((error) => {
      errorModal();
      // console.log(error.response.data);
    });
}

export default postNewUser;