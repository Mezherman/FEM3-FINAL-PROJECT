import { FormLabel, TextField } from '@material-ui/core';
import React from 'react';
import useStyles from '../Sign-up/Sign-up-form/_sign-up-form';

const RenderEditTextField = ({
  placeholder,
  label,
  name,
  type,
  defaultValue,
  meta: { touched, error },
  input: { value, onBlur, onChange, onFocus },
}) => {
  const classes = useStyles();
  return (
    <TextField
      type={type}
      name={name}
      placeholder={placeholder}
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

export default RenderEditTextField;
