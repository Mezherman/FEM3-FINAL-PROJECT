import React from 'react';
import { TextField } from '@material-ui/core';

const TextArea = (props) => {
  // console.log(props);
  const {
    input: { onBlur, onChange, value, name },
    meta: { touched, error },
    label
  } = props;
  return (
    <TextField
      name={name}
      // className={classes.textArea}
      label={label}
      multiline
      fullWidth
      rows="4"
      variant="outlined"
      onChange={(event) => onChange(event.target.value)}
    />
  )
};

export default TextArea;
