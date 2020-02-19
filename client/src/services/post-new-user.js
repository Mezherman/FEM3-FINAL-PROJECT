import axios from 'axios';

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
