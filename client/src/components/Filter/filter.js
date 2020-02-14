import React, { useEffect } from 'react'
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux'

import Button from '@material-ui/core/Button';
import FilterPanel from './Filter-panel/filter-panel'
import { getFilteredProducts, getColors, getBrands } from '../../services/filter'
import { productsLoaded } from '../../redux/actions/products';
import { filterParamsLoaded, filterType, resetFilters } from '../../redux/actions/filter';

import useStyles from './_filter';

const Filter = (props) => {
  const {
    filterParamsLoaded,
    filterParams,
    filterHandle,
  } = props;

  const classes = useStyles();

  useEffect(() => {
    getColors().then((colors) => {
      filterParamsLoaded('colors', colors);
    });
    getBrands().then((brands) => {
      filterParamsLoaded('brands', brands);
    });
  }, [filterParamsLoaded]);

  const filterText = ['Brand', 'Price', 'Color'];

  const filter = filterText.map((name) => (
    <FilterPanel
      max={700}
      key={name}
      name={name}
      colors={filterParams.colors}
      brands={filterParams.brands}
    />
  ));

  return (
    <>
      {filter}
      <Button
        className={classes.button}
        size="large"
        variant="contained"
        disableElevation
        color="primary"
        onClick={filterHandle}
      >
        Filter
      </Button>
    </>
  );
};

const mapStateToProps = (state) => ({
  filterParams: state.filterReducer.filterParams,
});

const mapDispatchToProps = {
  filterParamsLoaded,
};

Filter.propTypes = {
  filterParams: PropTypes.objectOf(PropTypes.array).isRequired,
  filterHandle: PropTypes.func.isRequired,
  filterParamsLoaded: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter)