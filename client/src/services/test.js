import axios from 'axios';

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
