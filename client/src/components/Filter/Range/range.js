import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import { Slider, Input } from '@material-ui/core';
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import useStyles from './_range';
import { getFilterProducts } from '../../../redux/actions/filter'

const CustomSlider = withStyles((theme) => ({
  root: {
    color: theme.palette.primary.main,
    left: '2%',
  },
  thumb: {
    backgroundColor: theme.palette.primary.main,
  },
  valueLabel: {
    top: -22,
    '& *': {
      background: 'transparent',
      color: '#000',
    },
  },
}))(Slider);

const RangeSlider = ({ getFilterProducts, filterResults, max }) => {
  const classes = useStyles();

  const [value, setValue] = useState([0, max]);

  useEffect(() => {
    combineInputs()
  }, [value])

  const handleChange = (event, price) => {
    setValue(price);
    getFilterProducts({
      ...filterResults,
      price
    });
  };

  const handleInputMin = (event) => {
    let inputValue = event.target.value;
    if (inputValue > max) {
      inputValue = 0
    }
    setValue([inputValue === '' ? '' : Number(inputValue), value[1]]);
  };

  const handleInputMax = (event) => {
    let inputValue = event.target.value
    if (inputValue > max) {
      inputValue = max
    }
    setValue([value[0], inputValue === '' ? '' : Number(inputValue)]);
  };

  const combineInputs = () => {
    getFilterProducts({
      ...filterResults,
      price: value
    });
  }

  const error = 'Warning! Your first value should be lower than the second!';

  const input = (values, func) => (
    <Input
      className={classes.input}
      value={values}
      margin="dense"
      onChange={func}
      inputProps={{
        min: 0,
        max,
        type: 'number',
        'aria-labelledby': 'range-slider',
      }}
    />
  )

  return (
    <>
      <CustomSlider
        max={max}
        valueLabelDisplay="auto"
        value={value}
        onChange={handleChange}
        aria-labelledby="range-slider"
      />
      <div className={classes.inputs}>
        {(value[1] < value[0]) && <div className={classes.error}>{error}</div>}
        {input(value[0], handleInputMin)}
        {input(value[1], handleInputMax)}
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  filterResults: state.filterReducer.filterResults
})

const mapDispatchToProps = {
  getFilterProducts
}

RangeSlider.propTypes = {
  max: PropTypes.number,
  getFilterProducts: PropTypes.func.isRequired,
  filterResults: PropTypes.objectOf(PropTypes.array).isRequired,
};

RangeSlider.defaultProps = {
  max: null
};

export default connect(mapStateToProps, mapDispatchToProps)(RangeSlider)