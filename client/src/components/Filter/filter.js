import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import FilterPanel from './Filter-panel/filter-panel'
import useStyles from './_filter';
// import getFilter from '../../services/filter';

export default function Filter() {
  const classes = useStyles();

  const filterText = [
    {
      name: 'Brand',
      checkbox: true,
      text: ['Silit', 'WMF', 'Tefal', 'Spiegelau & Nachtmann', 'KRUPS', 'Kaiser'],
      id: 1
    },
    { name: 'Price', max: 15, range: true, id: 2 },
    {
      name: 'Collection',
      checkbox: true,
      text: ['Classic', 'Classic Plus', 'Creativ', 'Cuisine Line', 'Delicious', 'Inspiration'],
      id: 3
    },
    { name: 'Size sets', checkbox: true, text: ['1-pc', '2-pcs', '3-pcs', '4-pcs', '5-pcs', '6-pcs'], id: 4 },
    { name: 'Material', checkbox: true, text: ['Cast Aluminum', 'Kaiser Inspiration', 'Lono'], id: 5 },
    {
      name: 'Product properties',
      checkbox: true,
      text: ['Easy to clean and care for', 'Good non-stick coating', 'Includes recipe', 'Regular tan through optimal heat conduction', 'Uniform heat'],
      id: 6
    },
    { name: 'Production', checkbox: true, text: ['Z', 'Y', 'X'], id: 7 },
    { name: 'Stove type', checkbox: true, text: ['Z', 'Y', 'X'], id: 8 },
    { name: 'Diameter (cm)', max: 60, range: true, id: 9 },
    { name: 'Capacity', checkbox: true, text: ['Z', 'Y', 'X'], id: 10 },
    { name: 'Color', checkbox: true, text: ['red', 'orange'], id: 11 },
  ];

  const [range, setRange] = useState([])

  const handleRange = () => {
    setRange
  }

  const filter = filterText.map((item) => (
    <FilterPanel
      key={item.id}
      {...item}
      onChange={handleRange}
    />
  ))

  // getFilter()

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