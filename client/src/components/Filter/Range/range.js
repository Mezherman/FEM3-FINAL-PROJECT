import React from 'react';
import PropTypes from 'prop-types';
import Slider from '@material-ui/core/Slider';
import useStyles from './_range';

export default function RangeSlider(props) {
  const classes = useStyles();
  const { max } = props;
  const [value, setValue] = React.useState([0, max]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Slider
        className={classes.root}
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

RangeSlider.defaultProps = {
  max: null
};