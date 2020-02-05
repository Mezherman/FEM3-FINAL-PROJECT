import React from 'react';
import { Box, Button, TextField } from '@material-ui/core';

import useStyles from './_form-block';

const FormBlock = ({handleSubmit, commentText, focusHandler, blurHandler, commentTextHandler}) => {
  const classes = useStyles();

  return (
    <form onSubmit={handleSubmit}>
      <Box align="center">
        <TextField
          id="outlined-multiline-static"
          multiline
          rows="4"
          defaultValue="Enter here your comment..."
          value={commentText}
          variant="outlined"
          className={classes.field}
          onFocus={focusHandler}
          onBlur={blurHandler}
          onChange={commentTextHandler}
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.commentBtn}
          type="submit"
        >
          Send comment
        </Button>
      </Box>
    </form>
  )
};

export default FormBlock;
