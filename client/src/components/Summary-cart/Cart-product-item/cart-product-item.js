import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, IconButton } from '@material-ui/core';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import DeleteIcon from '@material-ui/icons/Delete';
import RoutesName from '../../../routes-list';
import QuantitySelector from '../Quantity-selector/quantity-selector';
import useStyles from './_cart-product-item';
import useHeaderStyles from '../Cart-product-list-header/_cart-product-list-header';

export default function CartProductItem({ product, onSetProductQuantity, onRemoveProduct }) {
  const classes = useStyles();
  const headerClasses = useHeaderStyles();
  const { product: currentProduct, cartQuantity } = product;
  const subTotalProduct = currentProduct.currentPrice * cartQuantity;
  return (
    <Grid container justify="space-between" className={`${classes.root} ${headerClasses.underline}`}>
      <Grid item lg={3}>
        <Link to={`${RoutesName.products}/${currentProduct._id}`}>
          <img
            className={classes.img}
            src={currentProduct.imageUrls ? currentProduct.imageUrls[0] : ''}
            alt={currentProduct.name ?? ''}
          />
        </Link>
      </Grid>
      <Grid item lg={3}>
        <p className={`${classes.marginTop} ${classes.title}`}>{currentProduct.name}</p>
        <p className={classes.itemNum}>
Item-Nr. :
          {currentProduct.itemNo}
        </p>
      </Grid>
      <Grid item lg={1} className={headerClasses.alignRight}>
        <p className={`${classes.marginTop} ${classes.price}`}>
          €
          {currentProduct.currentPrice}
        </p>
      </Grid>
      <Grid item lg={2} >
        <QuantitySelector productId={currentProduct._id} onSetProductQuantity={onSetProductQuantity} cartQuantity={cartQuantity} />
      </Grid>
      <Grid item lg={2} className={headerClasses.alignRight}>
        <p className={`${classes.marginTop} ${classes.price}`}>
          €
          { subTotalProduct }
        </p>
      </Grid>
      <Grid item lg={1} className={headerClasses.alignCenter}>
        <DeleteIcon color="secondary" className={classes.deleteBtn} onClick={() => { onRemoveProduct(currentProduct._id) }} />
      </Grid>
    </Grid>

  );
}