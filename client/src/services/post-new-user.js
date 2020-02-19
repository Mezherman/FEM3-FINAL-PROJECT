import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:5000';

function postNewUser(newUser, successModal, errorModal) {
  axios
    .post('/customers', newUser)
    .then((response) => {
      if (response.statusText === 'OK') {
        successModal();
      }
    })
    .catch((error) => {
      errorModal(error.response.data.message);
    });
}

export default postNewUser;
