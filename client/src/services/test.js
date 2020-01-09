import axios from 'axios';

axios.defaults.headers.common['Authorization'] = 'Bearer' +
  ' eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMTYwMTI2MTYyZDcyMjRkOGU1MjJjOCIsImZpcnN0TmFtZSI6IlZsYWQiLCJsYXN0TmFtZSI6Ik1lemhlcml0c2t5aSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTU3ODUwMDYzNCwiZXhwIjoxNTc4NTM2NjM0fQ.ty2fEcVBL1RIsGpHWCCDogifCp5bMkflugk0HxaJgPU';

axios
  .get('http://localhost:5000/catalog')
  .then((catalog) => {
    console.log('CATALOG = ', catalog.data);
  })
  .catch((err) => {
    console.log('ERROR = ', err);
  });