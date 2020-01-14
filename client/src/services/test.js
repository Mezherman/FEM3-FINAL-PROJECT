import axios from 'axios';

axios.defaults.headers.common.Authorization = 'Bearer' +
  ' eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMTYwMTI2MTYyZDcyMjRkOGU1MjJjOCIsImZpcnN0TmFtZSI6IlZsYWQiLCJsYXN0TmFtZSI6Ik1lemhlcml0c2t5aSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTU3ODkyNjMwOCwiZXhwIjoxNTc4OTYyMzA4fQ.cCHacWmPQwyxhDTI6hgl5-x8UnGymCHPpfPFk8ijrZc';

const testRequest = () => {
  axios
    .get('/catalog')
    .then((catalog) => {
      console.log('CATALOG = ', catalog.data);
    })
    .catch((err) => {
      console.log('ERROR = ', err);
    });
};

export function testJson() {
  const a = '{ "num": "5" }';
  const b = '{ "num": 5 }';
  const parsedA = JSON.parse(a);
  const parsedB = JSON.parse(b);
  console.log(parsedA.num === parsedB.num);
}

export default testRequest;