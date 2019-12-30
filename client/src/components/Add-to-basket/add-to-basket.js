import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Grid, IconButton, Divider, Button, Box, Paper } from '@material-ui/core';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

import ModalWindow from '../Modal-window/modal-window';

import useStyles from './_add-to-basket';

export default function AddToBasket({ open, onModalClose, product }) {
  const classes = useStyles();
  const { url, title, price, specialPrice } = product;
  const [totalPrice, setTotalPrice] = useState(price);
  const [qty, setQty] = useState(1);

  const finalPrice = !specialPrice ? price : specialPrice;

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
          ADDED TO BASKET:
          <IconButton onClick={onModalClose}>
            <CloseIcon />
          </IconButton>
        </div>
        <Divider />
        <div className={classes.body}>
          <Grid container spacing={4} justify="center">
            <Grid item sm={6} md={4}>
              <img className={classes.img} src={url} alt="" />
            </Grid>
            <Grid item sm={12} md={8}>
              <div className={classes.title}>
                <span>
                  {title}
                </span>
                <span className={classes.total}>TOTAL:</span>
              </div>
              <Divider />
              <Box className={classes.pricingBlock}>
                <Box className={classes.price}>
                  <span>{finalPrice}</span>
                  <span className={classes.currency}>UAH</span>
                </Box>
                <Paper className={classes.qtyPicker}>
                  <Box
                    className={classes.sign}
                    onClick={() => {
                      if (qty === 1) return;
                      setQty((prevQty) => prevQty - 1)
                    }}
                  >
                    <RemoveIcon />
                  </Box>
                  <Box className={classes.qty}>{qty}</Box>
                  <Box
                    className={classes.sign}
                    onClick={() => setQty((prevQty) => prevQty + 1)}
                  >
                    <AddIcon />
                  </Box>
                </Paper>
                <Box className={classes.total}>
                  <span>{totalPrice}</span>
                  <span className={classes.currency}>UAH</span>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Button
                className={classes.btn}
                size="large"
                variant="contained"
                color="primary"
                disableElevation
              >
                Continue shopping
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                className={classes.btn}
                size="large"
                variant="contained"
                color="secondary"
                disableElevation
              >
                <ShoppingCartOutlinedIcon />
                <Box ml={2}>View basket</Box>
              </Button>
            </Grid>
          </Grid>
        </div>
        <Divider />
        <div className={classes.footer}>
          <article>
            Free delivery from &#8372;1000 | Free returns | Quick delivery with &apos;Nova
            Poshta&apos;
          </article>
        </div>
      </>
    </ModalWindow>
  )
}

AddToBasket.propTypes = {
  open: PropTypes.bool.isRequired,
  onModalClose: PropTypes.func.isRequired,
  product: PropTypes.objectOf(PropTypes.string).isRequired,
};
