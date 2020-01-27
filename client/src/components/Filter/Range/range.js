import React from 'react'
import PropTypes from 'prop-types';
import Slider from '@material-ui/core/Slider';
import { connect } from 'react-redux'
import useStyles from './_range';
import { getFilterProducts } from '../../../redux/actions/filter'

function RangeSlider(props) {
  const { getFilterProducts, filterResults, max } = props;
  const classes = useStyles();
  const handleChange = (event, price) => getFilterProducts({
    ...filterResults,
    price
  })

  return (
    <>
      <Slider
        className={classes.root}
        max={max}
        valueLabelDisplay="on"
        value={filterResults.price}
        onChange={handleChange}
        aria-labelledby="range-slider"
      />
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