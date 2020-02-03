import React from 'react';
import { TextField } from '@material-ui/core';

const textArea = ({name, label, classes}) => (
  <TextField
    name={name}
    // className={classes.textArea}
    label={label}
    multiline
    fullWidth
    rows="4"
    variant="outlined"
  />
);

export default textArea;
