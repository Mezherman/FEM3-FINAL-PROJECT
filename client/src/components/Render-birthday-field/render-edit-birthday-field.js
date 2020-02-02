import React from 'react';
import {
  TextField,
  FormHelperText
} from '@material-ui/core';

const RenderEditBirthdayField = ({
  input: { value, onBlur, onChange, onFocus },
  label,
  name,
  meta: { touched, error },
  classes,
  defaultValue
}) => (
  <TextField
    error={!!(touched && error)}
    name={name}
    type="number"
    variant="outlined"
    className={`${classes.inputBirthDay} ${classes.input}`}
    onBlur={(event) => onBlur(event)}
    onFocus={(event) => onFocus(event)}
    onChange={(event) => onChange(event.target.value)}
    defaultValue={value || defaultValue}
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

export default RenderEditBirthdayField;
