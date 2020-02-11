import React from 'react';
import { Box, Button, TextField } from '@material-ui/core';

import useStyles from './_form-block';
import {PropTypes} from "prop-types";

const FormBlock = ({handleSubmit, commentText, focusHandler, blurHandler, commentTextHandler, buttonDisabled}) => {
  const classes = useStyles();

  return (
    <form onSubmit={handleSubmit}>
      <Box align="center">
        <TextField
          id="outlined-multiline-static"
          multiline
          rows="4"
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
          disabled={buttonDisabled}
        >
          Send comment
        </Button>
      </Box>
    </form>
  )
};

FormBlock.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  commentText: PropTypes.string.isRequired,
  focusHandler: PropTypes.bool.isRequired,
  blurHandler: PropTypes.bool.isRequired,
  commentTextHandler: PropTypes.string.isRequired,
  buttonDisabled: PropTypes.bool.isRequired
};

export default FormBlock;
