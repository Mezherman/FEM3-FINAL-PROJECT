import React from 'react';
import {
  RadioGroup
} from '@material-ui/core';

const renderRadioGroup = ({ input, name, classes, gender, setGender, ...rest }) => (
  <RadioGroup
    {...input}
    {...rest}
    value={gender}
    aria-label="gender"
    defaultValue="Mr"
    className={classes.radioGender}
    name={name}
    onChange={(event, value) => {
      input.onChange(value);
      setGender(event.target.value);
    }}
  />
);

export default renderRadioGroup;
