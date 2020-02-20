import React from 'react';
import { PropTypes } from 'prop-types';
import { FormLabel, TextField } from '@material-ui/core';
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

RenderEditTextField.propTypes = {
  input: PropTypes.oneOfType([PropTypes.object]).isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  touched: PropTypes.string,
  meta: PropTypes.oneOfType([PropTypes.object]).isRequired,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  placeholder: PropTypes.string.isRequired,
  classes: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

RenderEditTextField.defaultProps = {
  name: '',
  type: '',
  value: '',
  error: false,
  touched: ''
}
