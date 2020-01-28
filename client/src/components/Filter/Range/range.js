import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { Slider, Input }from '@material-ui/core';
import { connect } from 'react-redux'
import useStyles from './_range';
import { getFilterProducts } from '../../../redux/actions/filter'

function RangeSlider(props) {
  const classes = useStyles();
  const { getFilterProducts, filterResults, max } = props;

  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(max);
  const [value, setValue] = useState([minValue, maxValue]);

  const handleChange = (event, price) => {
    setMinValue(price[0]);
    setMaxValue(price[1]);
    setValue(price);
    getFilterProducts({
      ...filterResults,
      price
    });
  };

  const handleInputMin = (event) => {
    setMinValue(event.target.value === '' ? '' : Number(event.target.value));
    setValue([minValue, maxValue]);
    getFilterProducts({
      ...filterResults,
      price: value
    });
  };

  const handleInputMax = (event) => {
    setMaxValue(event.target.value === '' ? '' : Number(event.target.value));
    setValue([minValue, maxValue]);
    getFilterProducts({
      ...filterResults,
      price: value
    });
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
      <div className={classes.inputs}>
        <Input
          className={classes.input}
          value={minValue}
          margin="dense"
          onChange={handleInputMin}
          inputProps={{
            min: 0,
            max,
            type: 'number',
            'aria-labelledby': 'range-slider',
          }}
        />
        <Input
          className={classes.input}
          value={maxValue}
          margin="dense"
          onChange={handleInputMax}
          inputProps={{
            min: 0,
            max,
            type: 'number',
            'aria-labelledby': 'range-slider',
          }}
        />
      </div>
    </>
  );
}

function mapStateToProps(state) {
  return {
    filterResults: state.filterReducer.filterResults
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getFilterProducts: (priceRange) => dispatch(getFilterProducts(priceRange))
  }
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