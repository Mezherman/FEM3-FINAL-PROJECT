import React, { useState } from 'react'
import PropTypes from 'prop-types';
import Slider from '@material-ui/core/Slider';
import { connect } from 'react-redux'
import useStyles from './_range';
import { getPriceProducts } from '../../../redux/actions/filter'

function RangeSlider(props) {
  const classes = useStyles();
  const { max } = props;
  const [value, setValue] = useState([0, max]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // useEffect()

  // console.log('get price RANGE = ',props.getPriceProducts(value));


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

function mapStateToProps(state) {
  // console.log('MAP STATE TO PROPS =>', state.filterReducer.price)
  return {
    state: state.filterReducer.price
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getPriceProducts: (price) => dispatch(getPriceProducts(price))
  }
}

RangeSlider.propTypes = {
  max: PropTypes.number
};

RangeSlider.defaultProps = {
  max: null
};

export default connect(mapStateToProps, mapDispatchToProps)(RangeSlider)