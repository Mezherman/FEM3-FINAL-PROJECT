import axios from 'axios';
// import slides from '../redux/actions/slides';

axios.defaults.baseURL = 'http://localhost:5000';

export default function getMainSlides() {
  return axios
    .get('/slides')
    .catch((err) => {
      console.log(err)
    });
}
