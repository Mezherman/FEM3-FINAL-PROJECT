import axios from 'axios';


function postNewUser(newUser, successModal, errorModal) {
  console.log(1);
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