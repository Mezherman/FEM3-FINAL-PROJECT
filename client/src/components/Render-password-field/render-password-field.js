import React from 'react';
import {
  FormLabel,
  TextField,
  InputAdornment,
  IconButton
} from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const renderPasswordField = ({
  invalid,
  input,
  label,
  name,
  value,
  type,
  meta: { touched, error },
  classes,
  eyeToggle,
  togglePasswordMask,
  ...custom
}) => (
  <TextField
    type={eyeToggle ? 'password' : 'text'}
    name={name}
    variant="outlined"
    fullWidth
    id={name + type}
    error={!!(touched && error)}
    helperText={touched && error}
    {...input}
    {...custom}
    className={invalid ? classes.invalidPassword : classes.root}
    label={
      (
        <FormLabel
          className={invalid ? classes.invalidPassword : classes.root}
          required
        >
          {label}
        </FormLabel>
      )
    }
    InputProps={{
      endAdornment: (
        <InputAdornment position="end">
          <IconButton
            aria-label="toggle password visibility"
            onClick={togglePasswordMask}
          >
            {eyeToggle ? <Visibility /> : <VisibilityOff />}
          </IconButton>
        </InputAdornment>
      )
    }}
  />
);

export default renderPasswordField;
