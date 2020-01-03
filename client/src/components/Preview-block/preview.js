import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button'
import { Divider } from '@material-ui/core';

import getAllCards from '../../services/dataBase';
import useStyles from './_preview';
import PreviewList from './Preview-list/preview-list';

export default function Preview() {
  const classes = useStyles();
  const [data, setData] = useState({ products: [] });

  useEffect(() => {
    getAllCards()
      .then((response) => {
        setData({ products: response.products })
      })
  }, []);

  return (
    <div className={classes.allProducts}>
      <div className={classes.products}>
        <PreviewList products={data.products} />
      </div>
      <div className={classes.miniCart}>
        <p>
            There
          {data.products.length > 1 ? ' are' : ' is'}
          <span className={classes.items}>
            {data.products.length}
            {data.products.length > 1 ? ' items' : ' item'}
          </span>
            in your cart.
        </p>
        <Divider />
        <div className={classes.price}>
          <span>Cart Subtotal</span>
          <span>€300</span>
        </div>
        <Button
          size="medium"
          fullWidth
          variant="contained"
          color="secondary"
          disableElevation
          className={classes.button}
          onClick={() => console.log('View shopping cart')}
        >
            View Shopping Cart
        </Button>
        <Button
          size="medium"
          fullWidth
          variant="contained"
          color="primary"
          disableElevation
          onClick={() => console.log('Chechout')}
        >
            Checkout
        </Button>
      </div>
    </div>
  )
}
