import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000';

axios.defaults.headers.common.Authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMTYwMTI2MTYyZDcyMjRkOGU1MjJjOCIsImZpcnN0TmFtZSI6IlZsYWQiLCJsYXN0TmFtZSI6Ik1lemhlcml0c2t5aSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTU3ODk5Mjc5OSwiZXhwIjoxNTc5MDI4Nzk5fQ.DJHhj4JXSbmBO-zDmx6ia0USBGQpQ7ol7cEbm4GkFsk';

export default function getCategories() {
  return axios.get('/catalog')
    .then((response) => response.data)
}
