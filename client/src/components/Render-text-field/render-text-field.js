import React from 'react';
import {
  FormLabel,
  TextField
} from '@material-ui/core';

const renderTextField = ({
  input, label, name, value, type, meta: { touched, error }, classes, ...custom
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
