import axios from 'axios';
// import slides from '../redux/actions/slides';

export default function getMainSlides() {
  return axios
    .get('/slides')
    .catch((err) => {
      console.log(err)
    });
}
