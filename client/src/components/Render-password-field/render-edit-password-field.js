import { FormLabel, TextField } from '@material-ui/core';
import React from 'react';
import useStyles from '../SignUp/Sign-up-form/_sign-up-form';

const RenderTextField = ({
  label,
  name,
  type,
  defaultValue,
  meta: { touched, error },
  input: { value, onBlur, onChange, onFocus },
  input
}) => {
  console.log('INPUT', input);
  const classes = useStyles();
  // console.log('INPUT', onFocus);
  // console.log('INPUT', onBlur);
  return (
    <TextField
      type={type}
      name={name}
      variant="outlined"
      fullWidth
      id={name}
      error={!!(touched && error)}
      helperText={touched && error}
      onBlur={(event) => onBlur(event)}
      onFocus={(event) => onFocus(event)}
      onChange={(event) => onChange(event.target.value)}
      defaultValue={value || defaultValue}
      className={classes.root}
      label={(<FormLabel className={classes.root} required>{label}</FormLabel>)}
    />
  )
};

export default RenderTextField;
