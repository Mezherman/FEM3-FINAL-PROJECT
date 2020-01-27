import React, { useEffect } from 'react'
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import FilterPanel from './Filter-panel/filter-panel'
import useStyles from './_filter';
import { getFilteredProducts, getColors, getBrands, getManufacturer } from '../../services/filter'
import { productsLoaded } from '../../redux/actions/products';
import { filterParamsLoaded } from '../../redux/actions/filter';
import { tempFilterData } from '../../services/filter-temp'

function Filter(props) {
  tempFilterData().then((products) => {
    const manufacturerSet = new Set();
    const withoutBrand = products.filter((product) => manufacturerSet.add(product.manufacturer))
    // products.filter(product => manufacturerSet.add(product.manufacturer))
    // console.log('manufacturerSet =', manufacturerSet);
    // console.log('withoutBrand =', withoutBrand);
  })

  const { productsLoaded, filterParamsLoaded, filterParams, filterResults, categoriesReducer } = props;
  const { catalogLocation, catalog } = categoriesReducer;
  const { allCategories } = catalog;
  const classes = useStyles();

  useEffect(() => {
    getColors().then((colors) => {
      // console.log(colors);
      filterParamsLoaded('colors', colors);
    })
    getBrands().then((brands) => {
      // console.log('brands',brands);
      filterParamsLoaded('brands', brands);
    })
    getManufacturer().then((manufacturers) => {
      // console.log('manufacturers', manufacturers);
      filterParamsLoaded('manufacturers', manufacturers)
    })
  }, [filterParamsLoaded]);

  const filterText = ['Brand', 'Price', 'Color'];

  // console.log('filterParams.colors =', filterParams.colors);
  // console.log('filterParams.manufacturers =', filterParams.manufacturers);
  // console.log('filterParams.brands =', filterParams.brands);
  const filter = filterText.map((name) => (
    <FilterPanel
      key={name}
      name={name}
      colors={filterParams.colors}
      brands={filterParams.brands}
      manufacturers={filterParams.manufacturers}
    />
  ));

  let valToFilter;
  let valOfBrands = '';
  const valOfCollection = '';
  let valOfColor = '';
  let valOfPrice = '';

  function parseToFilterValue(obj) {
    // console.log('OBJ -> ',obj)

    if (obj.brand.length > 0) {
      const brands = 'brand='
      const items = obj.brand.map((item) => item)
      const str = items.join(',')
      brands.concat(str)
      valOfBrands = brands.concat(str)
    }

    // if (obj.filterResults.manufacturer.length > 0) {
    //   let manufacturer = 'manufacturer='
    //   const items = obj.filterResults.manufacturer.map(item => item)
    //   const str = items.join(',')
    //   manufacturer.concat(str)
    //   valOfCollection = manufacturer.concat(str)
    //   // console.log('end of  => ', valOfBrands)
    //   // return valOfBrands
    // }

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

    // const currentCategory = !allCategories.find((category) => category.id === catalogLocation)
    //   ? {}
    //   : allCategories.find((category) => category.id === catalogLocation);
    // console.log('category =', currentCategory);
    // const parentCategory = currentCategory.parentId !== 'null' ? ${currentCategory.parentId} : '';
    const subCategories = allCategories.filter((category) => category.parentId === catalogLocation);
    const subCategoriesString = subCategories ? subCategories.map((subCategory) => subCategory.id).join(',') : '';
    const categoryForFilter = !subCategoriesString ? catalogLocation : subCategoriesString;
    // console.log('ENDS OF VAL', valOfBrands, valOfCollection)
    valToFilter = `categories=${categoryForFilter}&${valOfBrands}&${valOfCollection}&${valOfColor}&${valOfPrice}`
    // console.log('!!!!! ->>>>>', valToFilter);
    return valToFilter
  }

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
              // console.log(products);
              productsLoaded(products)
            });
        }}
      >
        Filter
      </Button>
    </>
  );
}

function mapStateToProps(state) {
  // console.log('STATE =>', state);
  return {
    filterResults: state.filterReducer.filterResults,
    filterParams: state.filterReducer.filterParams,
    categoriesReducer: state.categoriesReducer
  }
}

const mapDispatchToProps = {
  productsLoaded,
  filterParamsLoaded
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter)
