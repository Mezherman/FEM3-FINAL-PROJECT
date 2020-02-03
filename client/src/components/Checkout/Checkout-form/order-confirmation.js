import React from 'react';
import { useSelector } from 'react-redux';
import {
  Container,
  Grid,
  Typography,
  FormControlLabel,
  Radio,
  Divider,
  Box
} from '@material-ui/core';
import { Field } from 'redux-form';

import { RenderTextField, RenderRadioGroup } from './form-components';
import RenderCheckboxField from './form-components/checkbox-field';

import useStyles from './_checkout-form';
import ModalBirthdayInfo from '../../SignUp/Modal-birthday-info/modal-birthday-info';
import ModalInfoWindow from '../../Info-window/info-window';

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