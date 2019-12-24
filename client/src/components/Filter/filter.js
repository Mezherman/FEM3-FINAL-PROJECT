import Button from '@material-ui/core/Button';
import React from 'react';
import FilterPanel from './filter-panel'

export default function Filter() {
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

  const filter = filterText.map((item) => (
    <FilterPanel
      className="filter"
      key={item.id}
      // name={item.name}
      // text={item.text}
      // checkbox={item.checkbox}
      // range={item.range}
      // max={item.max}
      {...item}
    />
  ));

  return (
    <>
      {filter}
      <Button
        size="large"
        fullWidth
        variant="contained"
        color="primary"
        disableElevation
        onClick={() => console.log('Filtered')}
      >
        Apply
      </Button>
    </>
  );
}