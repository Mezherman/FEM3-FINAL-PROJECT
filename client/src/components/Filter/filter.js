import React from 'react'
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import FilterPanel from './Filter-panel/filter-panel'
import useStyles from './_filter';
// import getAllFilterProducts from '../../services/filter'

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

// getAllFilterProducts('color=red')

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
