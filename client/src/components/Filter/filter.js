import React, { useEffect } from 'react'
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import FilterPanel from './Filter-panel/filter-panel'
import useStyles from './_filter';
import { getFilteredProducts, getColors, getBrands } from '../../services/filter'
import { productsLoaded } from '../../redux/actions/products';
import { filterParamsLoaded, filterType, resetFilters } from '../../redux/actions/filter';
import { tempFilterData } from '../../services/filter-temp'

function Filter(props) {
  // tempFilterData().then((products) => {
  //   const manufacturerSet = new Set();
  //   const withoutBrand = products.filter((product) => manufacturerSet.add(product.manufacturer))
  // products.filter(product => manufacturerSet.add(product.manufacturer))
  // console.log('manufacturerSet =', manufacturerSet);
  // console.log('withoutBrand =', withoutBrand);
  // })

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

  useEffect(() => {
    getColors().then((colors) => {
      filterParamsLoaded('colors', colors);
    });
    getBrands().then((brands) => {
      filterParamsLoaded('brands', brands);
    });
    // getCurrentCategory();
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

  let valToFilter = '';
  let valOfBrands = '';
  const valOfCollection = '';
  let valOfColor = '';
  let valOfPrice = '';
  //
  // const getCurrentCategory = () => {
  //   // if (!valToFilter && (valToFilter !== currentCategory)) {
  //   if (!valToFilter && (valToFilter !== currentCategory)) {
  //     resetFilters();
  //   }
  // };

  const parseToFilterValue = (obj) => {

    if (obj.brand.length > 0) {
      const brands = 'brand='
      const items = obj.brand.map((item) => item)
      const str = items.join(',')
      brands.concat(str)
      valOfBrands = brands.concat(str)
    }

    if (obj.price.length > 0) {
      const price = '';
      const items = obj.price.map((item) => item)
      const str = price.concat('minPrice=', items[0], '&', 'maxPrice=', items[1])
      valOfPrice = str
    }

    if (obj.color.length > 0) {
      const color = 'color='
      const items = obj.color.map((item) => item)
      const str = items.join(',')
      color.concat(str)
      valOfColor = color.concat(str)
    }

    const subCategories = allCategories.filter((category) => category.parentId === catalogLocation);
    const subCategoriesString = subCategories ? subCategories.map((subCategory) => subCategory.id).join(',') : '';
    const categoryForFilter = !subCategoriesString ? catalogLocation : subCategoriesString;

    valToFilter = `categories=${categoryForFilter}&${valOfBrands}&${valOfCollection}&${valOfColor}&${valOfPrice}`
    // console.log('!!!!! ->>>>>', valToFilter);
    filterType(valToFilter);
    return valToFilter
  };

  // console.log('filterResults =', filterResults);
  // console.log('filterParams =', filterParams);
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
          getFilteredProducts(valToFilter)
            .then((products) => {
              productsLoaded(products)
            })
            .then(onClose)
            .then(resetFilters)
        }}
      >
        Filter
      </Button>
    </>
  );
}

function mapStateToProps(state) {
  return {
    filterResults: state.filterReducer.filterResults,
    filterParams: state.filterReducer.filterParams,
    categoriesReducer: state.categoriesReducer,
    currentCategory: state.categoriesReducer.catalogLocation
  }
}

const mapDispatchToProps = {
  productsLoaded,
  filterParamsLoaded,
  filterType,
  resetFilters
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter)
