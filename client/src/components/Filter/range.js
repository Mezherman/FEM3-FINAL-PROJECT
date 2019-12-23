import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    width: 300
  }
});
export default function RangeSlider({ max }) {
  const classes = useStyles();
  const [value, setValue] = React.useState([0, max]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      <Slider
        max={max}
        valueLabelDisplay="on"
        value={value}
        onChange={handleChange}
        aria-labelledby="range-slider"
      />
      <Button
        size="large"
        fullWidth
        variant="contained"
        color="primary"
        disableElevation
        onClick={() => console.log('Apply from FILTER')}
      >
        Apply
      </Button>
    </div>
  );
}
RangeSlider.propTypes = {
  max: PropTypes.number.isRequired
}