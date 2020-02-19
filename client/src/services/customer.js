import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:5000';

const getCustomer = () => axios
  .get('/customers/customer')
  .then((loggedInCustomer) => loggedInCustomer)
  .catch((err) => err);
export default getCustomer
