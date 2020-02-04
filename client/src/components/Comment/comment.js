import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { Box, Button, Grid, Typography } from '@material-ui/core';

import FormBlock from './Form-block/form-block';
import postNewComment from '../../services/postComment';
import getCommentsOfProducts from '../../services/getCommentsOfProduct';
import { commentsLoaded, commentsRequest, resetCommentsList, sendComment } from '../../redux/actions/comments';
import CommentMap from './Comment-map';

import useStyles from './_comment';

const Comment = (props) => {
  const {
    currentProduct, currentUser, sendNewComment, fetchComments, commentsList, reset
  } = props;
  // console.log(props);
  // console.log(currentProduct._id);
  const classes = useStyles();

  const defaultText = 'Enter here your comment...';
  const [addComment, setComment] = useState(false);
  const [commentText, setCommentText] = useState(defaultText);
  // const [date, setDate] = useState('');
  const [addForm, sendForm] = useState(false);
  const [id, setId] = useState('');

  useEffect(() => {
    if ((id === '') || (id !== currentProduct._id) || !id) {
      setId(currentProduct._id);
      reset();
    }
    fetchComments(currentProduct._id);
  }, [currentProduct._id, fetchComments, id, reset]);

  const commentHandler = () => {
    setComment((prev) => setComment(!prev));
    // console.log(getCurrentDate());
  };

  const focusHandler = () => {
    if (commentText === defaultText) {
      setCommentText('');
    }
  };

  const commentTextHandler = (event) => {
    setCommentText(event.target.value);
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
      product: currentProduct._id,
      content: commentText,
      date: currentDate
    };
    sendNewComment(newComment, currentProduct._id);
  };

  const getCurrentDate = () => {
    const today = new Date();
    return `${getFormattedDate(today.getHours())}:${getFormattedDate(today.getMinutes())} ${getFormattedDate(today.getDate())}/${getFormattedDate(today.getMonth())}/${today.getFullYear()}`;
  };

  const getFormattedDate = (number) => {
    let formattedNumber;
    (number.toString().length === 1) ? (formattedNumber = `0${number}`) : formattedNumber = number;
    return formattedNumber;
  };

  return (
    <Box component="div" mt={2} mb={3} align="center">
      <Typography variant="h6" component="h4" align="center" className={classes.title}>{currentProduct.name}</Typography>
      <Button variant="contained" color="primary" className={classes.commentBtn} onClick={commentHandler}>Add comment</Button>

      { addComment && (
        <FormBlock
          handleSubmit={handleSubmit}
          commentText={commentText}
          focusHandler={focusHandler}
          blurHandler={blurHandler}
          commentTextHandler={commentTextHandler}
        />
      )}
      <Grid container direction="column-reverse" alignItems="center">
        { commentsList &&
          <CommentMap commentsList={commentsList} />}
      </Grid>
    </Box>
  )
};

const mapStateToProps = (state) => ({
  currentProduct: state.currentProduct.currentProduct,
  currentUser: state.user,
  commentsList: state.commentsReducer.commentsList,
  productId: state.commentsReducer.productId
});

const mapDispatchToProps = (dispatch) => ({
  sendNewComment: (comment, productId) => {
    dispatch(sendComment(comment));
    postNewComment(comment).then((response) => {
      if (response.statusText === 'OK') {
        dispatch(commentsRequest(productId));
        getCommentsOfProducts(productId)
          .then((comments) => {
            dispatch(commentsLoaded(comments))
          }).catch((error) => console.log(error));
      }
    })
  },
  fetchComments: (productId) => {
    dispatch(commentsRequest(productId));
    getCommentsOfProducts(productId)
      .then((comments) => {
        dispatch(commentsLoaded(comments))
      }).catch((error) => console.log(error));
  },
  reset: () => dispatch(resetCommentsList())
});

export default connect(mapStateToProps, mapDispatchToProps)(Comment);
