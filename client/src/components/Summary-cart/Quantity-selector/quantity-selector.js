import React, { useState } from 'react';
import { Select, Grid } from '@material-ui/core';
import propTypes from 'prop-types';
import useStyles from './_quantity-selector';

export default function QuantitySelector ({ cartQuantity, productId, onSetProductQuantity }) {
  const classes = useStyles();

  const createListItems = () => {
    const items = [];
    for (let i = 1; i <= 100; i++) {
      items.push(<option key={i} value={i}>{i}</option>);
    }
    return items;
  }

  const setProductQuantity = (val) => {
    onSetProductQuantity(productId, +val);
  }

  const handleSelected = (quantity) => (event) => {
    const { value } = event.target;
    setProductQuantity(value);
  }
  console.log(cartQuantity);
  return (
    <Grid container className={classes.main} >
      <Grid item>
        <span
          className={classes.increase}
          onClick={() => { setProductQuantity(cartQuantity - 1) }}
        >
          -
        </span>
      </Grid>
      <Grid item>
        <Select
          native
          value={cartQuantity}
          onChange={
            handleSelected('quantity')
          }
          inputProps={{
            name: 'quantity',
            id: 'name-native-disabled',
          }}
          className={`${classes.root}`}
        >
          {createListItems()}
        </Select>
      </Grid>
      <Grid item>
        <span
          className={classes.increase}
          onClick={() => { setProductQuantity(cartQuantity + 1) }}
        >
          +
        </span>
      </Grid>
    </Grid>
  )
}

QuantitySelector.propTypes = {
  cartQuantity: propTypes.number,
  productId: propTypes.string,
  onSetProductQuantity: propTypes.func
};

QuantitySelector.defaultProps = {
  cartQuantity: 1,
}