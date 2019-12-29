import React from 'react';
import PropTypes from 'prop-types';
import { Grid, IconButton, Typography, Paper, Divider, Button } from '@material-ui/core';
import CloseIcon from '@material-ui/core/SvgIcon/SvgIcon';

import ModalWindow from '../Modal-window/modal-window';

import useStyles from './_add-to-basket';

export default function AddToBasket({ open, onModalClose, product }) {
  const { url, title } = product;
  const classes = useStyles();

  return (
    <ModalWindow
      open={open}
      onModalClose={onModalClose}
    >
      <>
        <div className={classes.header}>
          BASKET
          <IconButton onClick={onModalClose}>
            <CloseIcon />
          </IconButton>
        </div>
        <Divider className={classes.centered} />
        <div className={classes.body}>
          <Grid container spacing={2}>
            <Grid item md={4} justify="center">
              <img className={classes.img} src={url} alt="" />
            </Grid>
            <Grid item md={8}>
              <Typography className={classes.typography}>
                {title}
              </Typography>
            </Grid>
          </Grid>
          <Button>Continue shopping</Button>
          <Button>View basket</Button>
        </div>
        <Divider className={classes.centered} />
        <div className={classes.footer}>
          <article>Free delivery from €49 | Free returns | Quick delivery with DHL</article>
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
