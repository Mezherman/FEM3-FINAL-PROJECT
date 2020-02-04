import React from 'react';
import { FormHelperText, FormLabel, RadioGroup } from '@material-ui/core';
import useStyles from './_form-components';

const RenderRadioGroup = (props) => {
  // console.log(props);
  const classes = useStyles();
  const { input, meta: { touched, error }, children } = props;
  // console.log(error);
  // console.log(rest);
  return (
    <>
      <RadioGroup
        {...input}
        // value={input.value}
        aria-label={input.name}
        className={classes[input.name]}
        name={input.name}
        onChange={(event, value) => input.onChange(value)}
      >
        {children}
      </RadioGroup>
      {
        (touched && error) &&
        <FormHelperText className={classes.radioErrorMsg}>{error}</FormHelperText>
      }
    </>
  )
};

export default RenderRadioGroup;