import React, { useState } from 'react'
import PropTypes from 'prop-types';
import Slider from '@material-ui/core/Slider';
import { connect } from 'react-redux'
import useStyles from './_range';
import Input from '@material-ui/core/Input';
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
    // console.log('e =>',event.target.value);value
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
          value={minValue}
          margin="dense"
          onChange={handleInputMin}
          inputProps={{
            // step: 10,
            min: 0,
            max,
            type: 'number',
            'aria-labelledby': 'range-slider',
          }}
        />
        <Input
          value={maxValue}
          margin="dense"
          onChange={handleInputMax}
          inputProps={{
            // step: 10,
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