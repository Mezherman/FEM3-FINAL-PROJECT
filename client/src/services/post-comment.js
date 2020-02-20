import axios from 'axios';

function postNewComment(newComment) {
  return axios
    .post('/api/comments', newComment)
    .then((response) => {
      console.log(response);
      return response
    })
    .catch((err) => alert(err.response.data));
}

export default postNewComment;
