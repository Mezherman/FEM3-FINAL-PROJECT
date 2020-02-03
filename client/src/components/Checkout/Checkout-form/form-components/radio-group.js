import React from 'react';
import { RadioGroup } from '@material-ui/core';

const RenderRadioGroup = (props) => {
  // console.log(props);
  const { input, meta, children, classes } = props;
  // console.log(rest);
  return (
    <RadioGroup
      {...input}
      // value={input.value}
      aria-label="gender"
      defaultValue="Mr"
      className={classes.radioGender}
      name={input.name}
      onChange={(event, value) =>
        // console.log('123', event, value);
        input.onChange(value)}
    >
      {children}
    </RadioGroup>
  )
};

export default RenderRadioGroup;