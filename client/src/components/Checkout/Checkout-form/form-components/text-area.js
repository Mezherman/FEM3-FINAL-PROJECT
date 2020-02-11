import React from 'react';
import { TextField } from '@material-ui/core';
import { PropTypes } from 'prop-types';

const TextArea = (props) => {
  const {
    input: { onChange, name },
    label
  } = props;
  return (
    <TextField
      name={name}
      // className={classes.textArea}
      label={label}
      multiline
      fullWidth
      rows="4"
      variant="outlined"
      onChange={(event) => onChange(event.target.value)}
    />
  )
};

export default TextArea;

TextArea.propTypes = {
  input: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]).isRequired,
  onChange: PropTypes.func,
  name: PropTypes.string,
  label: PropTypes.string.isRequired,

};

TextArea.defaultProps = {
  name: '',
  onChange: () => {}
};