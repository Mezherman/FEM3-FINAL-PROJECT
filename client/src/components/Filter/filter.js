import React, { useEffect } from 'react'
import { PropTypes } from 'prop-types';
import { connect, useSelector } from 'react-redux'

import FilterPanel from './Filter-panel/filter-panel'
import { getColors, getBrands } from '../../services/filter'
import { filterParamsLoaded } from '../../redux/actions/filter';

const Filter = (props) => {
  const {
    filterParamsLoaded,
  } = props;

  const filterParams = useSelector((state) => state.filterReducer.filterParams);

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
    </>
  );
};

const mapDispatchToProps = {
  filterParamsLoaded,
};

Filter.propTypes = {
  filterParamsLoaded: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Filter)