import React, { useEffect } from 'react'
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import FilterPanel from './Filter-panel/filter-panel'
import useStyles from './_filter';
import { getAllFilterProducts, getColors, getBrands, getManufacturer } from '../../services/filter'
import { productsLoaded } from '../../redux/actions/products';
import { filterParamsLoaded } from '../../redux/actions/filter';
import { tempFilterData } from '../../services/filter-temp'

function Filter(props) {
  tempFilterData().then((products) => {
    const manufacturerSet = new Set();
    const withoutBrand = products.filter(product => manufacturerSet.add(product.manufacturer))
    // products.filter(product => manufacturerSet.add(product.manufacturer))
    // console.log('manufacturerSet =', manufacturerSet);
    // console.log('withoutBrand =', withoutBrand);
  })

  const { productsLoaded, filterParamsLoaded, filterParams, filterResults } = props;
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
      filterParamsLoaded('manufacturers',manufacturers)
    })
  }, []);

  const filterText = [
    {
      name: 'Brand',
      checkbox: true,
      text: ['Silit', 'WMF', 'Tefal', 'Spiegelau & Nachtmann', 'KRUPS', 'Kaiser'],
      id: 1
    },
    { name: 'Price', max: 60, slider: true, id: 2 },
    {
      name: 'Collection',
      checkbox: true,
      text: ['Classic', 'Classic Plus', 'Creativ', 'Cuisine Line', 'Delicious', 'Inspiration'],
      id: 3
    },
    { name: 'Color', checkbox: true, text: ['red', 'orange'], id: 11 },
  ];

  // console.log('filterParams.colors =', filterParams.colors);
  // console.log('filterParams.manufacturers =', filterParams.manufacturers);
  // console.log('filterParams.brands =', filterParams.brands);
  const filter = filterText.map((item) => (
    <FilterPanel
      key={item.id}
      {...item}
      colors={filterParams.colors}
      brands={filterParams.brands}
      manufacturers={filterParams.manufacturers}
    />
  ));

  let valToFilter;
  let valOfBrands = '';
  let valOfCollection = '';
  let valOfColor = '';

  function parseToFilterValue(obj) {
    // console.log('OBJ -> ',obj)

    // if (obj.brand.length > 0) {
    //   let brands = 'brand='
    //   const items = obj.brand.map(item => item)
    //   const str = items.join(',')
    //   brands.concat(str)
    //   valOfBrands = brands.concat(str)
    // }
    //
    // if (obj.filterResults.manufacturer.length > 0) {
    //   let manufacturer = 'manufacturer='
    //   const items = obj.filterResults.manufacturer.map(item => item)
    //   const str = items.join(',')
    //   manufacturer.concat(str)
    //   valOfCollection = manufacturer.concat(str)
    //   // console.log('end of  => ', valOfBrands)
    //   // return valOfBrands
    // }

    if (obj.color.length > 0) {
      let color = 'color='
      const items = obj.color.map(item => item)
      const str = items.join(',')
      color.concat(str)
      valOfColor = color.concat(str)
    }

    // console.log('ENDS OF VAL', valOfBrands, valOfCollection)
    valToFilter = `${valOfBrands}&${valOfCollection}&${valOfColor}`
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
          getAllFilterProducts(valToFilter)
            .then((products) => {
              console.log(products);
              productsLoaded(products)
            });
        }}
      >
        Apply
      </Button>
    </>
  );
}

function mapStateToProps(state) {
  // console.log('STATE FILTER =>', state.filterReducer);
  return {
    filterResults: state.filterReducer.filterResults,
    filterParams: state.filterReducer.filterParams
  }
}

const mapDispatchToProps = {
  productsLoaded,
  filterParamsLoaded
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter)
