import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Grid, IconButton, Divider, Button, Box, Paper } from '@material-ui/core';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import RoutesName from '../../routes-list';

import ModalWindow from '../Modal-window/modal-window';

import useStyles from './_add-to-cart';

export default function AddToCart({ open, onModalClose, product }) {
  const classes = useStyles();
  const { imageUrls, name, currentPrice, specialPrice, itemNo } = product;
  const [totalPrice, setTotalPrice] = useState(currentPrice);
  const [qty, setQty] = useState(1);

  const finalPrice = !specialPrice ? currentPrice : specialPrice;

  useEffect(() => {
    setTotalPrice(qty * finalPrice)
  }, [qty, finalPrice]);

  return (
    <ModalWindow
      open={open}
      onModalClose={onModalClose}
    >
      <>
        <div className={classes.header}>
          ADDED TO CART:
          <IconButton onClick={onModalClose}>
            <CloseIcon />
          </IconButton>
        </div>
        <Divider />
        <div className={classes.body}>
          <Grid container spacing={4} justify="center">
            <Grid item sm={6} md={4}>
              <img className={classes.img} src={imageUrls[0]} alt={name} />
            </Grid>
            <Grid item sm={12} md={8}>
              <div className={classes.title}>
                <span>
                  {name.toUpperCase()[0] + name.slice(1)}
                </span>
                <span className={classes.total}>TOTAL:</span>
              </div>
              <p>
                <span style={{ paddingRight: '5px' }}>Item.No</span>
                {itemNo}
              </p>
              <Divider />
              <Box className={classes.pricingBlock}>
                <Box className={classes.price}>
                  <span>
                    &#8364;
                    {finalPrice}
                  </span>
                </Box>
                <Paper className={classes.qtyPicker}>
                  <RemoveIcon
                    className={classes.sign}
                    onClick={() => {
                      if (qty === 1) return;
                      setQty((prevQty) => prevQty - 1)
                    }}
                  />
                  <Box className={classes.qty}>{qty}</Box>
                  <AddIcon
                    className={classes.sign}
                    onClick={() => setQty((prevQty) => prevQty + 1)}
                  />
                </Paper>
                <Box className={classes.total}>
                  <span>
                    &#8364;
                    {totalPrice}
                  </span>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Button
                className={classes.btn}
                size="large"
                variant="contained"
                color="primary"
                disableElevation
                onClick={onModalClose}
              >
                Continue shopping
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Link to={RoutesName.cart}>
                <Button
                  className={classes.btn}
                  size="large"
                  variant="contained"
                  color="secondary"
                  disableElevation
                >
                  <ShoppingCartOutlinedIcon />
                  <Box ml={2}>View cart</Box>
                </Button>
              </Link>
            </Grid>
          </Grid>
        </div>
        <Divider />
        <div className={classes.footer}>
          <article>
            Free delivery from &#8372;1000 | Free returns | Quick delivery with DHL
          </article>
        </div>
      </>
    </ModalWindow>
  )
}

AddToCart.propTypes = {
  open: PropTypes.bool.isRequired,
  onModalClose: PropTypes.func.isRequired,
  product:
  PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.number])
  ).isRequired,
};
