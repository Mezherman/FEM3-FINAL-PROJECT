import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

import { Slider, Input } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { getFilterProducts } from '../../../redux/actions/filter'

import useStyles from './_range';

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

  const [value, setValue] = useState([filterResults.price[0], filterResults.price[1]]);

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
    setValue([inputValue === '' ? '' : Number(inputValue), filterResults.price[1]]);
  };

  const handleInputMax = (event) => {
    let inputValue = event.target.value
    if (inputValue > max) {
      inputValue = max
    }
    setValue([filterResults.price[0], inputValue === '' ? '' : Number(inputValue)]);
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
        value={filterResults.price}
        onChange={handleChange}
        aria-labelledby="range-slider"
      />
      <div className={classes.inputs}>
        {(value[1] < value[0]) && <div className={classes.error}>{error}</div>}
        {input(filterResults.price[0], handleInputMin)}
        {input(filterResults.price[1], handleInputMax)}
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