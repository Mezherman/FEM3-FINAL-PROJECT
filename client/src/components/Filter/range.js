import React from 'react';
import PropTypes from 'prop-types';
import Slider from '@material-ui/core/Slider';

export default function RangeSlider({ max }) {
  const [value, setValue] = React.useState([0, max]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Slider
        max={max}
        valueLabelDisplay="on"
        value={value}
        onChange={handleChange}
        aria-labelledby="range-slider"
      />
    </>
  );
}

RangeSlider.propTypes = {
  max: PropTypes.number
};