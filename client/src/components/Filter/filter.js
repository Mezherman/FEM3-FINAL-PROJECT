import React, { useEffect } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

import { useMediaQuery, useTheme } from '@material-ui/core'
import Button from '@material-ui/core/Button';
import FilterPanel from './Filter-panel/filter-panel'
import { getColors, getBrands } from '../../services/filter'
import { filterParamsLoaded } from '../../redux/actions/filter';

import useStyles from './_filter';

const Filter = (props) => {
  const {
    filterParamsLoaded,
    filterParams,
    toggleFilter
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
  const theme = useTheme();
  const closeBtn = useMediaQuery(theme.breakpoints.up('md')) ? ''
    : (
      <Button
        className={classes.button}
        size="large"
        variant="contained"
        disableElevation
        color="primary"
        onClick={() => toggleFilter(false)}
      >
      Filter
      </Button>
    );
  return (
    <>
      {filter}
      {closeBtn}
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
  filterParamsLoaded: PropTypes.func.isRequired,
  toggleFilter: PropTypes.func,
};
Filter.defaultProps = {
  toggleFilter: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter)