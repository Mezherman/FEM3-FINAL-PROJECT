import React from 'react';
import { FormLabel, RadioGroup, TextField } from '@material-ui/core';
import useStyles from './_checkout-form';

const RenderTextField = (props) => {
  const classes = useStyles();
  // console.log(props);
  const { input: { onBlur, onChange, value }, name, meta: { touched, error }, label, defaultValue, type } = props;
  // console.log('VALUE in PROPS=', value);
  // console.log('REST in PROPS=', rest);
  return (
    <TextField
      type={type}
      name={name}
      variant="outlined"
      fullWidth
      id={name}
      error={!!(touched && error)}
      helperText={touched && error}
      className={classes.root}
      onBlur={onBlur}
      onChange={(event) => onChange(event.target.value)}
      defaultValue={!touched ? defaultValue : value}
      label={(<FormLabel className={classes.root} required>{label}</FormLabel>)}
    />
  )
};

const RenderRadioGroup = (props) => {
  // console.log(props);
  const { input, meta, children, className } = props;
  // console.log(rest);
  const classes = useStyles();
  return (
    <RadioGroup
      {...input}
      // value={input.value}
      aria-label="gender"
      // defaultValue={input.checked}
      className={classes[className]}
      name={input.name}
      onChange={(event, value) =>
        // console.log('123', event, value);
        input.onChange(value)}
    >
      {children}
    </RadioGroup>
  )
};

export {
  RenderTextField,
  RenderRadioGroup
};