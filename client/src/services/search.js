import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000';

axios.defaults.headers.common.Authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMTYwMTI2MTYyZDcyMjRkOGU1MjJjOCIsImZpcnN0TmFtZSI6IlZsYWQiLCJsYXN0TmFtZSI6Ik1lemhlcml0c2t5aSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTU3OTcwOTMwNywiZXhwIjoxNTc5NzQ1MzA3fQ.smQ7Sydk8NyDP5NEvMHDX93WnH2fqbdnXR9eelchPs8';

export default function search(value) {
  return axios
    .post('/products/search', value)
    .then((response) => response.data)
    .catch((error) => error)
}
