import React, { useState } from 'react'
import PropTypes from 'prop-types';
import Slider from '@material-ui/core/Slider';
import { connect } from 'react-redux'
import useStyles from './_range';
import { getFilterProducts } from '../../../redux/actions/filter'

function RangeSlider(props) {
  const { getFilterProducts, max, filterResults } = props;
  const classes = useStyles();
  const handleChange = (event, price) => getFilterProducts({
    ...filterResults,
    price
  })

  // useEffect()

  // console.log('get price RANGE = ', getFilterProducts(value));

  return (
    <>
      <Slider
        className={classes.root}
        max={filterResults.price[1]}
        valueLabelDisplay="on"
        value={filterResults.price}
        onChange={handleChange}
        aria-labelledby="range-slider"
      />
    </>
  );
}

function mapStateToProps(state) {
  // console.log('MAP STATE TO PROPS =>', state.filterReducer.price)
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
  max: PropTypes.number
};

RangeSlider.defaultProps = {
  max: null
};

export default connect(mapStateToProps, mapDispatchToProps)(RangeSlider)