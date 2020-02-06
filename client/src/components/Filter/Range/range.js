import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import { Slider, Input } from '@material-ui/core';
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import useStyles from './_range';
import { getFilterProducts } from '../../../redux/actions/filter'

// const Shadow =
//   '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';

const CustomSlider = withStyles((theme) => ({
  root: {
    color: theme.palette.primary.main,
    left: '2%',
    // padding: '15px 0',
  },
  thumb: {
    // height: 28,
    // width: 28,
    backgroundColor: theme.palette.primary.main,
    // boxShadow: Shadow,
    // marginTop: -14,
    // marginLeft: -14,
    // '&:focus,&:hover,&$active': {
    //  boxShadow: '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
    //   '@media (hover: none)': {
    //     boxShadow: Shadow,
    //   },
    // },
  },
  valueLabel: {
    top: -22,
    '& *': {
      background: 'transparent',
      color: '#000',
    },
  },
}))(Slider);

function RangeSlider(props) {
  const classes = useStyles();
  const { getFilterProducts, filterResults, max } = props;

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
    if (event.target.value > max) {
      event.target.value = 0
    }
    setValue([event.target.value === '' ? '' : Number(event.target.value), value[1]]);
  };

  const handleInputMax = (event) => {
    if (event.target.value > max) {
      event.target.value = max
    }
    setValue([value[0], event.target.value === '' ? '' : Number(event.target.value)]);
  };

  const combineInputs = () => {
    getFilterProducts({
      ...filterResults,
      price: value
    });
  }

  const error = 'Warning! Your first value should be lower than the second!'

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