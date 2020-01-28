import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { Grid, Hidden } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import RoutesName from '../../../routes-list';
import QuantitySelector from '../Quantity-selector/quantity-selector';
import useStyles from './_cart-product-item';
import DialogModal from '../Dialog-modal/dialog-modal';
import useHeaderStyles from '../Cart-product-list-header/_cart-product-list-header';

export default function CartProductItem({ product, onSetProductQuantity, onRemoveProduct }) {
  const classes = useStyles();
  const [isDialogOpen, setDialogOpen] = useState(false);
  const handleDialogOpen = () => {
    setDialogOpen(true);
  }
  const headerClasses = useHeaderStyles();
  const { product: currentProduct, cartQuantity } = product;
  const subTotalProduct = currentProduct.currentPrice * cartQuantity;
  const onCloseDialogWithStatus = (status) => {
    console.log(status);
    if (status) {
      onRemoveProduct(currentProduct._id);
    }
    setDialogOpen(false);
  }
  return (
    <Grid item container xs={12} justify="space-between" className={`${classes.root} ${headerClasses.underline}`}>
      <Grid container item sm={3} xs={12} className={classes.img_block}>
        <Grid item sm={12}>
          <Link to={`${RoutesName.products}/${currentProduct.itemNo}`}>
            <img
              className={classes.img}
              src={currentProduct.imageUrls ? currentProduct.imageUrls[0] : ''}
              alt={currentProduct.name ?? ''}
            />
          </Link>
        </Grid>
      </Grid>
      <Grid item sm={3} xs={12}>
        <p className={`${classes.marginTop} ${classes.title}`}>{currentProduct.name}</p>
        <p className={classes.itemNum}>
Item-Nr. :
          {currentProduct.itemNo}
        </p>
      </Grid>
      <Grid item container justufy="space-between" sm={1} xs={12}>
        <Hidden smUp>
          <Grid item xs={6}>
            <p>Price</p>
          </Grid>
        </Hidden>
        <Grid item sm={12} xs={6} className={headerClasses.alignRight}>
          <p className={`${classes.marginTop} ${classes.price} ${headerClasses.alignRight}`}>
            €
            {currentProduct.currentPrice}
          </p>
        </Grid>
      </Grid>
      <Grid item container sm={2} xs={12} >
        <Hidden smUp>
          <Grid item xs={6} sm={12}>
            <p>Amount</p>
          </Grid>
        </Hidden>
        <Grid item xs={6} sm={12}>
          <QuantitySelector productId={currentProduct._id} onSetProductQuantity={onSetProductQuantity} cartQuantity={cartQuantity} />
        </Grid>
      </Grid>
      <Grid item container justufy="space-between" sm={2} xs={12}>
        <Hidden smUp>
          <Grid item xs={6}>
            <p>Subtotal</p>
          </Grid>
        </Hidden>
        <Grid item xs={6} sm={12} className={headerClasses.alignRight}>
          <p className={`${classes.marginTop} ${classes.price}`}>
            €
            { subTotalProduct }
          </p>
        </Grid>
      </Grid>
      <Grid item sm={1} xs={12} className={headerClasses.alignCenter}>
        <DeleteIcon color="secondary" className={classes.deleteBtn} onClick={()=> { handleDialogOpen() }} />
      </Grid>
      <DialogModal onCloseDialogWithStatus={onCloseDialogWithStatus} isOpen={isDialogOpen} />

    </Grid>

  );
}

CartProductItem.propTypes = {
  product: PropTypes.object,
  onSetProductQuantity: PropTypes.func,
  onRemoveProduct: PropTypes.func
}