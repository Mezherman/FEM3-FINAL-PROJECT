import axios from 'axios';

function postNewComment(newComment) {
  return axios
    .post('/comments', newComment)
    .then((response) => response)
    .catch((err) => err.response.data);
}

export default postNewComment;
