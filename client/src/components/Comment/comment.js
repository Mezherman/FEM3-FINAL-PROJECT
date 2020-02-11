import React, { useEffect, useState, useCallback } from 'react';
import { connect } from 'react-redux';
import { Box, Button, Grid, Typography } from '@material-ui/core';
import { PropTypes } from 'prop-types';
import FormBlock from './Form-block/form-block';
import postNewComment from '../../services/postComment';
import getCommentsOfProducts from '../../services/getCommentsOfProduct';
import {
  commentsLoaded,
  commentsRequest,
  resetCommentsList,
  sendComment
} from '../../redux/actions/comments';
import CommentMap from './Comment-map';

import LoginModal from '../Login-modal-window/login-modal-window';
import useStyles from './_comment';

const Comment = (props) => {
  const {
    currentProduct: { _id: thisId, name },
    sendNewComment, fetchComments, commentsList, reset, userLoggedIn, loaded,
  } = props;
  const classes = useStyles();

  const defaultText = 'Enter here your comment...';
  const [addComment, setComment] = useState(false);
  const [commentText, setCommentText] = useState(defaultText);
  const [addForm, sendForm] = useState(false);
  const [id, setId] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [addCommentDisabled, setAddCommentDisabled] = useState(false);
  const [modalIsVisible, setModalVisibility] = useState(false);

  const closeModal = () => {
    setModalVisibility(false);
  };
  
  const getComments = useCallback(() => {
    fetchComments(thisId);
    getCommentsOfProducts(thisId)
      .then((comments) => loaded(comments))
      .catch((error) => console.log(error))
  }, [thisId]);

  useEffect(() => {
    if ((id === '') || (id !== thisId) || !id) {
      setId(thisId);
      reset();
    }

    getComments();
  }, [thisId, id, reset]);

  const commentHandler = () => {
    if (userLoggedIn) {
      setComment((prev) => setComment(!prev));
      setAddCommentDisabled(false);
    } else {
      setModalVisibility(true);
    }
  };

  const focusHandler = () => {
    if (commentText === defaultText) {
      setCommentText('');
    }
  };

  const commentTextHandler = (event) => {
    setCommentText(event.target.value);
    (event.target.value.length > 1) ? setButtonDisabled(false) : setButtonDisabled(true);
  };

  const blurHandler = () => {
    if (!commentText) {
      setCommentText(defaultText);
    }
  };

  // const deleteComment = (commentId) => {
  //   axios
  //     .delete(`/comments/${commentId}`)
  //     .then(result => {
  //       console.log(result);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };
  // deleteComment();
  const handleSubmit = (event) => {
    event.preventDefault();
    setComment(false);
    sendForm(true);
    const currentDate = getCurrentDate();
    const newComment = {
      product: thisId,
      content: commentText,
      date: currentDate
    };

    sendNewComment(newComment, thisId);
    postNewComment(newComment)
      .then((response) => {
        if (response.statusText === 'OK') {
          getComments();
          console.log(1);
        }
      })
      .catch((error) => console.log(error));
  };

  const getCurrentDate = () => {
    const today = new Date();
    const hours = getFormattedDate(today.getHours());
    const minutes = getFormattedDate(today.getMinutes());
    const day = getFormattedDate(today.getDate());
    const month = getFormattedDate(today.getMonth());
    const year = today.getFullYear();
    return `${hours}:${minutes} ${day}/${month}/${year}`;
  };

  const getFormattedDate = (number) => {
    let formattedNumber;
    (number.toString().length === 1) ? (formattedNumber = `0${number}`) : formattedNumber = number;
    return formattedNumber;
  };

  return (
    <Box component="div" mt={2} mb={3} align="center">
      <Typography variant="h6" component="h4" align="center" className={classes.title}>{name}</Typography>
      <Button
        variant="contained"
        color="primary"
        disabled={addCommentDisabled}
        className={classes.commentBtn}
        onClick={commentHandler}
      >
          Add comment
      </Button>
      { addComment && (
        <FormBlock
          handleSubmit={handleSubmit}
          commentText={commentText}
          focusHandler={focusHandler}
          blurHandler={blurHandler}
          commentTextHandler={commentTextHandler}
          buttonDisabled={buttonDisabled}
        />
      )}
      <Grid container direction="column-reverse" alignItems="center">
        { commentsList &&
          <CommentMap commentsList={commentsList} />}
      </Grid>
      { !userLoggedIn && <LoginModal onModalClose={closeModal} open={modalIsVisible} /> }
    </Box>
  )
};

const mapStateToProps = (state) => ({
  currentProduct: state.currentProduct.currentProduct,
  commentsList: state.commentsReducer.commentsList,
  productId: state.commentsReducer.productId,
  userLoggedIn: state.user.loggedIn
});

const mapDispatchToProps = (dispatch) => ({
  sendNewComment: (comment) => dispatch(sendComment(comment)),
  fetchComments: (productId) => dispatch(commentsRequest(productId)),
  loaded: (comments) => dispatch(commentsLoaded(comments)),
  reset: () => dispatch(resetCommentsList())
});

Comment.propTypes = {
  currentProduct: PropTypes.oneOfType(PropTypes.obj).isRequired,
  sendNewComment: PropTypes.func.isRequired,
  fetchComments: PropTypes.func.isRequired,
  commentsList: PropTypes.oneOfType(PropTypes.array).isRequired,
  reset: PropTypes.func.isRequired,
  userLoggedIn: PropTypes.bool.isRequired,
  loaded: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Comment);
// import React, { useEffect, useState } from 'react';
// import { connect } from 'react-redux';
//
// import { Box, Button, Grid, Typography } from '@material-ui/core';
//
// import { PropTypes } from 'prop-types';
// import FormBlock from './Form-block/form-block';
// import postNewComment from '../../services/postComment';
// import getCommentsOfProducts from '../../services/getCommentsOfProduct';
// import {
//   commentsLoaded,
//   commentsRequest,
//   resetCommentsList,
//   sendComment
// } from '../../redux/actions/comments';
// import CommentMap from './Comment-map';
//
// import LoginModal from '../Login-modal-window/login-modal-window';
// import useStyles from './_comment';
//
// const Comment = (props) => {
//   const {
//     currentProduct: { _id: thisId, name },
//     sendNewComment, fetchComments, commentsList, reset, userLoggedIn
//   } = props;
//   const classes = useStyles();
//
//   const defaultText = 'Enter here your comment...';
//   const [addComment, setComment] = useState(false);
//   const [commentText, setCommentText] = useState(defaultText);
//   const [addForm, sendForm] = useState(false);
//   const [id, setId] = useState('');
//   const [buttonDisabled, setButtonDisabled] = useState(true);
//   const [addCommentDisabled, setAddCommentDisabled] = useState(false);
//   const [modalIsVisible, setModalVisibility] = useState(false);
//
//   const closeModal = () => {
//     setModalVisibility(false);
//   };
//
//   useEffect(() => {
//     if ((id === '') || (id !== thisId) || !id) {
//       setId(thisId);
//       reset();
//     }
//
//     fetchComments(thisId);
//   }, [thisId, fetchComments, id, reset]);
//
//   const commentHandler = () => {
//     if (userLoggedIn) {
//       setComment((prev) => setComment(!prev));
//       setAddCommentDisabled(false);
//     } else {
//       setModalVisibility(true);
//     }
//   };
//
//   const focusHandler = () => {
//     if (commentText === defaultText) {
//       setCommentText('');
//     }
//   };
//
//   const commentTextHandler = (event) => {
//     setCommentText(event.target.value);
//     if (event.target.value.length > 1) {
//       setButtonDisabled(false);
//     } else {
//       setButtonDisabled(true);
//     }
//   };
//
//   const blurHandler = () => {
//     if (!commentText) {
//       setCommentText(defaultText);
//     }
//   };
//
//   // const deleteComment = (commentId) => {
//   //   axios
//   //     .delete(`/comments/${commentId}`)
//   //     .then(result => {
//   //       console.log(result);
//   //     })
//   //     .catch(err => {
//   //       console.log(err);
//   //     });
//   // };
//   // deleteComment();
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setComment(false);
//     sendForm(true);
//     const currentDate = getCurrentDate();
//     const newComment = {
//       product: thisId,
//       content: commentText,
//       date: currentDate
//     };
//     sendNewComment(newComment, thisId);
//   };
//
//   const getCurrentDate = () => {
//     const today = new Date();
//     const hours = getFormattedDate(today.getHours());
//     const minutes = getFormattedDate(today.getMinutes());
//     const day = getFormattedDate(today.getDate());
//     const month = getFormattedDate(today.getMonth());
//     const year = today.getFullYear();
//     return `${hours}:${minutes} ${day}/${month}/${year}`;
//   };
//
//   const getFormattedDate = (number) => {
//     let formattedNumber;
//     (number.toString().length === 1) ? (formattedNumber = `0${number}`) : formattedNumber = number;
//     return formattedNumber;
//   };
//
//   return (
//     <Box component="div" mt={2} mb={3} align="center">
//       <Typography variant="h6" component="h4" align="center" className={classes.title}>{name}</Typography>
//       <Button
//         variant="contained"
//         color="primary"
//         disabled={addCommentDisabled}
//         className={classes.commentBtn}
//         onClick={commentHandler}
//       >
//           Add comment
//       </Button>
//       { addComment && (
//         <FormBlock
//           handleSubmit={handleSubmit}
//           commentText={commentText}
//           focusHandler={focusHandler}
//           blurHandler={blurHandler}
//           commentTextHandler={commentTextHandler}
//           buttonDisabled={buttonDisabled}
//         />
//       )}
//       <Grid container direction="column-reverse" alignItems="center">
//         { commentsList &&
//           <CommentMap commentsList={commentsList} />}
//       </Grid>
//       { !userLoggedIn && <LoginModal onModalClose={closeModal} open={modalIsVisible} /> }
//     </Box>
//   )
// };
//
// const mapStateToProps = (state) => ({
//   currentProduct: state.currentProduct.currentProduct,
//   commentsList: state.commentsReducer.commentsList,
//   productId: state.commentsReducer.productId,
//   userLoggedIn: state.user.loggedIn
// });
//
// const mapDispatchToProps = (dispatch) => ({
//   sendNewComment: (comment, productId) => {
//     dispatch(sendComment(comment));
//     postNewComment(comment).then((response) => {
//       if (response.statusText === 'OK') {
//         dispatch(commentsRequest(productId));
//         getCommentsOfProducts(productId)
//           .then((comments) => {
//             dispatch(commentsLoaded(comments))
//           }).catch((error) => console.log(error));
//       }
//     })
//   },
//   fetchComments: (productId) => {
//     dispatch(commentsRequest(productId));
//     getCommentsOfProducts(productId)
//       .then((comments) => {
//         dispatch(commentsLoaded(comments))
//       }).catch((error) => console.log(error));
//   },
//   reset: () => dispatch(resetCommentsList())
// });
//
// Comment.propTypes = {
//   sendNewComment: PropTypes.func.isRequired,
//   fetchComments: PropTypes.func.isRequired,
//   commentsList: PropTypes.oneOfType(PropTypes.array).isRequired,
//   reset: PropTypes.func.isRequired,
//   userLoggedIn: PropTypes.bool.isRequired
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(Comment);
