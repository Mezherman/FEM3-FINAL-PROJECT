import React from 'react';
import {
  RadioGroup
} from '@material-ui/core';
import { PropTypes } from 'prop-types'

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

renderRadioGroup.propTypes = {
  input: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  classes: PropTypes.arrayOf([PropTypes.array]).isRequired,
  gender: PropTypes.string.isRequired,
  setGender: PropTypes.func.isRequired
};


export default renderRadioGroup;
