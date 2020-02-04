import React from 'react';
import { useSelector } from 'react-redux';
import { Field } from 'redux-form';
import { Typography, Divider, Box } from '@material-ui/core';

import RenderCheckboxField from './form-components/checkbox-field';

import useStyles from './_checkout-form';

export default function OrderConfirmation() {
  const classes = useStyles();
  const { products, totalCartPrice } = useSelector((state) => state.cart);
  // console.log('products=', products);

  return (
    <>
      <Typography className={classes.blockTitle}>4. CONFIRMATION</Typography>
      <div className={classes.confirmationHeader}>
        <span>PRODUCT</span>
        <span>SUM</span>
      </div>
      <Divider />
      {products.map((product) => {
        const { cartQuantity, product: { name, currentPrice, itemNo } } = product;
        return (
          <div className={classes.confirmationHeader}>
            <Typography>{cartQuantity}x {name.toUpperCase()[0] + name.slice(1)}
              <Typography>(Item.No {itemNo})</Typography>
            </Typography>
            <Typography>&#8364;{currentPrice * cartQuantity}</Typography>
          </div>
        )
      })}
      <Divider />
      <Box className={classes.confirmationHeader}>
        <strong>TOTAL</strong>
        <strong>&#8364;{totalCartPrice}</strong>
      </Box>
      <Divider />
      <Field name="agreement" component={RenderCheckboxField} />
    </>
  )
}