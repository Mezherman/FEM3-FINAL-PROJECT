import React from 'react';
import { PropTypes } from 'prop-types';
import { FormControlLabel, Radio } from '@material-ui/core';

import useStyles from '../_checkout-form';

const RadioCheckboxField = ({ name, value, label }) => {
  const classes = useStyles();
  return (
    <FormControlLabel
      className={classes.root}
      value={value}
      label={label}
      name={name}
      control={<Radio className={classes.radioLabel} />}
    />
  )
};

export default RadioCheckboxField;

RadioCheckboxField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};