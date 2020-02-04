import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000';

function postNewComment(newComment) {
  // console.log(newComment);
  return axios
    .post('/comments', newComment)
    .then((response) => response)
    .catch((err) => {
      console.log(err.response.data);
    });
}

export default postNewComment;
