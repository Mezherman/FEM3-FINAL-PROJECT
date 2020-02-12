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
    productsLoaded,
    filterParamsLoaded,
    filterParams,
    filterResults,
    categoriesReducer,
    onClose,
    filterType,
    resetFilters,
    currentCategory
  } = props;

  // console.log(currentCategory);

  const { catalogLocation, catalog } = categoriesReducer;
  const { allCategories } = catalog;
  const classes = useStyles();

  let valToFilter = '';
  let valOfBrands = '';
  let valOfColor = '';
  let valOfPrice = '';

  useEffect(() => {
    getColors().then((colors) => {
      filterParamsLoaded('colors', colors);
    });
    getBrands().then((brands) => {
      filterParamsLoaded('brands', brands);
    });
    filterType(valToFilter);
    getCurrentCategory();
  }, [filterParamsLoaded, currentCategory]);

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

  const getCurrentCategory = () => {
    if (currentCategory) {
      resetFilters();
    }
  };

  const parseToFilterValue = (obj) => {
    if (obj.brand.length > 0) {
      valOfBrands = `brand=${obj.brand.join(',')}`
    }

    if (obj.price.length > 0) {
      valOfPrice = `minPrice=${obj.price[0]}&maxPrice=${obj.price[1]}`
    }

    if (obj.color.length > 0) {
      valOfColor = `color=${obj.color.join(',')}`
    }

    const subCategories = allCategories.filter((category) => category.parentId === catalogLocation);
    const subCategoriesString = subCategories ? subCategories.map((subCategory) => subCategory.id).join(',') : '';
    const categoryForFilter = !subCategoriesString ? catalogLocation : subCategoriesString;

    valToFilter = `categories=${categoryForFilter}&${valOfBrands}&${valOfColor}&${valOfPrice}`
    filterType(valToFilter);
    return valToFilter
  };

  parseToFilterValue(filterResults);

  return (
    <>
      {filter}
      <Button
        className={classes.button}
        size="large"
        variant="contained"
        color="primary"
        onClick={() => {
          filterType(valToFilter);
          getFilteredProducts(valToFilter)
            .then((products) => {
              productsLoaded(products)
            })
            .then(onClose)
        }}
      >
        Filter
      </Button>
    </>
  );
};

const mapStateToProps = (state) => ({
  filterResults: state.filterReducer.filterResults,
  filterParams: state.filterReducer.filterParams,
  categoriesReducer: state.categoriesReducer,
  currentCategory: state.categoriesReducer.catalogLocation
});

const mapDispatchToProps = {
  productsLoaded,
  filterParamsLoaded,
  filterType,
  resetFilters
};

Filter.propTypes = {
  filterParams: PropTypes.objectOf(PropTypes.array).isRequired,
  filterResults: PropTypes.objectOf(PropTypes.array).isRequired,
  currentCategory: PropTypes.string.isRequired,
  categoriesReducer: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
    PropTypes.func
  ]).isRequired,
  onClose: PropTypes.func,
  productsLoaded: PropTypes.func.isRequired,
  filterParamsLoaded: PropTypes.func.isRequired,
  filterType: PropTypes.func.isRequired,
  resetFilters: PropTypes.func.isRequired,
};

Filter.defaultProps = {
  onClose: () => {
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter)