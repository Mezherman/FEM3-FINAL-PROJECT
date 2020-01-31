import React from 'react';
import {
  TextField,
  FormHelperText
} from '@material-ui/core';

const renderBirthdayField = ({
  input, label, name, value, meta: { touched, error }, classes, ...custom
  }) => (
  <TextField
    error={!!(touched && error)}
    name={name}
    type="number"
    variant="outlined"
    className={`${classes.inputBirthDay} ${classes.input}`}
    {...custom}
    {...input}
    InputProps={{
      className: classes.input,
    }}
    helperText={(touched && error) || (
      <FormHelperText className={classes.helperBirth} component="span">
        {label}
      </FormHelperText>
    )}
  />
);

export default renderBirthdayField;
