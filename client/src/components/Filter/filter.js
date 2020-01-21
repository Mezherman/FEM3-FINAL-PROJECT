import React, { useEffect } from 'react'
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import FilterPanel from './Filter-panel/filter-panel'
import useStyles from './_filter';
import { getAllFilterProducts, getColors, getBrands } from '../../services/filter';
import { productsLoaded } from '../../redux/actions/products';
import { filterParamsLoaded } from '../../redux/actions/filter';
import { tempFilterData } from '../../services/filter-temp'

function Filter(props) {
  tempFilterData().then((products) => {
    const brandSet = new Set();
    // const withoutBrand = products.filter(product => !product.brand)
    products.filter(product => brandSet.add(product.brand))
    console.log('brandSet =', brandSet);
    // console.log('withoutBrand =', withoutBrand);
  })

  const { productsLoaded, filterParamsLoaded, filterParams, filterResults } = props;
  const classes = useStyles();

  useEffect(() => {
    getColors().then((colors) => {
      console.log(colors);
      filterParamsLoaded('colors', colors);
    })
    getBrands().then((brands) => {
      console.log(brands);
      filterParamsLoaded('brands', brands);
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

  console.log('filterParams.colors =', filterParams.colors);
  const filter = filterText.map((item) => (
    <FilterPanel
      key={item.id}
      {...item}
      colors={filterParams.colors}
    />
  ));

  // const test = {
  //   filters: {
  //     brand: ['WMF'],
  //     collection: [],
  //     color: ['red']
  //   },
  //   currentPrice: []
  // }

  let valToFilter;
  let valOfBrands = '';
  let valOfCollection = '';
  let valOfColor = '';

  function parseToFilterValue(obj) {

    // if (obj.filterResults.brand.length > 0) {
    //   let brands = 'brand='
    //   const items = obj.filterResults.brand.map(item => item)
    //   const str = items.join(',')
    //   brands.concat(str)
    //   valOfBrands = brands.concat(str)
    // }
    //
    // if (obj.filterResults.collection.length > 0) {
    //   let collection = 'collection='
    //   const items = obj.filterResults.collection.map(item => item)
    //   const str = items.join(',')
    //   collection.concat(str)
    //   valOfCollection = collection.concat(str)
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

  console.log('filterResults =', filterResults);
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
  console.log('STATE FILTER =>', state.filterReducer);
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
