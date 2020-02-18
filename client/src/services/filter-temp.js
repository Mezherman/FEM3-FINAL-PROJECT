import axios from 'axios';

const tempFilterData = () => axios('/products')
  .then((response) => response.data);

export default tempFilterData