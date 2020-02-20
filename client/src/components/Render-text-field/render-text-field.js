import React from 'react';
import { PropTypes } from 'prop-types';

import {
  FormLabel,
  TextField
} from '@material-ui/core';

const renderTextField = ({
  input, label, name, value, type, meta: { touched, error }, placeholder, classes, ...custom
}) => (
  <TextField
    type={type}
    name={name}
    variant="outlined"
    fullWidth
    id={name}
    error={!!(touched && error)}
    helperText={touched && error}
    className={classes.root}
    placeholder={placeholder || null}
    {...input}
    {...custom}
    label={
      (
        <FormLabel
          className={classes.root}
          required
        >
          {label}
          {custom.test}
        </FormLabel>
      )
    }
  />
);

export default renderTextField;

renderTextField.propTypes = {
  input: PropTypes.oneOfType([PropTypes.object]).isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  touched: PropTypes.string,
  meta: PropTypes.oneOfType([PropTypes.object]).isRequired,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  placeholder: PropTypes.string,
  classes: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

renderTextField.defaultProps = {
  name: '',
  type: '',
  value: '',
  placeholder: '',
  error: false,
  touched: ''
}