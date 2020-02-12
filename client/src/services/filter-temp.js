import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000';

const tempFilterData = () => axios('/products')
  .then((response) => response.data);

export default tempFilterData