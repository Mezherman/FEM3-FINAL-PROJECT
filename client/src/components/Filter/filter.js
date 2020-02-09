import React, { useEffect } from 'react'
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types';
import FilterPanel from './Filter-panel/filter-panel'
import useStyles from './_filter';
import { getFilteredProducts, getColors, getBrands } from '../../services/filter'
import { productsLoaded } from '../../redux/actions/products';
import { filterParamsLoaded, filterType, resetFilters } from '../../redux/actions/filter';

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

  const { catalogLocation, catalog } = categoriesReducer;
  const { allCategories } = catalog;
  const classes = useStyles();
  let filteredCategory = '';

  let valToFilter = '';
  let valOfBrands = '';
  let valOfColor = '';
  let valOfPrice = '';
  // const filteredCategory = '';

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
    if (!filteredCategory && (filteredCategory !== currentCategory)) {
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
    // console.log('ENDS OF VAL', valOfBrands, valOfCollection)
    // valToFilter = `categories=${categoryForFilter}&${valOfBrands}&${valOfCollection}&${valOfColor}&${valOfPrice}`
    // console.log('!!!!! ->>>>>', valToFilter);
    filteredCategory = valToFilter;
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
}

const mapStateToProps = (state) => ({
  filterResults: state.filterReducer.filterResults,
  filterParams: state.filterReducer.filterParams,
  categoriesReducer: state.categoriesReducer,
  currentCategory: state.categoriesReducer.catalogLocation
})

const mapDispatchToProps = {
  productsLoaded,
  filterParamsLoaded,
  filterType,
  resetFilters
};

Filter.propTypes = {
  filterParams: PropTypes.objectOf(PropTypes.array).isRequired,
  filterResults: PropTypes.objectOf(PropTypes.array).isRequired,
  currentCategory: PropTypes.objectOf(PropTypes.array).isRequired,
  categoriesReducer: PropTypes.objectOf(PropTypes.object).isRequired,
  onClose: PropTypes.func
}

Filter.defaultProps = {
  onClose: () => {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter)