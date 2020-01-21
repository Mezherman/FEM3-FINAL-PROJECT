import React from 'react'
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import FilterPanel from './Filter-panel/filter-panel'
import useStyles from './_filter';
import getAllFilterProducts from '../../services/filter'

function Filter() {
  const classes = useStyles();

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

  const filter = filterText.map((item) => (
    <FilterPanel
      key={item.id}
      {...item}
    />
  ));

  const test = {
    filters: {
      brand: [],
      collection: [],
      color: ['red']
    },
    currentPrice: []
}

  let valToFilter;
  let valOfBrands = '';
  let valOfCollection = '';
  let valOfColor = ''

  function parseToFilterValue(obj) {

    if (obj.filters.brand.length > 0) {
      let brands = 'brand='
      const items = obj.filters.brand.map(item => item)
      const str = items.join(',')
      brands.concat(str)
      valOfBrands = brands.concat(str)
    }

    if (obj.filters.collection.length > 0) {
      let collection = 'collection='
      const items = obj.filters.collection.map(item => item)
      const str = items.join(',')
      collection.concat(str)
      valOfCollection = collection.concat(str)
      // console.log('end of  => ', valOfBrands)
      // return valOfBrands
    }

    if (obj.filters.color.length > 0) {
      let color = 'color='
      const items = obj.filters.color.map(item => item)
      const str = items.join(',')
      color.concat(str)
      valOfColor = color.concat(str)
    }

    // console.log('ENDS OF VAL', valOfBrands, valOfCollection)
    valToFilter = `${valOfBrands}&${valOfCollection}&${valOfColor}`

    return valToFilter
  }

// parseToFilterValue(test)
//
//
// getAllFilterProducts(valToFilter)

  return (
    <>
      {filter}
      <Button
        className={classes.button}
        size="large"
        variant="contained"
        color="primary"
      >
        Apply
      </Button>
    </>
  );
}

function mapStateToProps(state) {
  console.log('STATE FILTER =>', state.filterReducer);
  return state.filterReducer
}

export default connect(mapStateToProps)(Filter)
