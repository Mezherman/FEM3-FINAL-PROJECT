import React from 'react';
import { Grid, List, ListItem } from '@material-ui/core';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import RoutesName from '../../../../../routes-list';

const OrderDetails = ({ classes, product, cartQuantity }) => {
  const { itemNo, imageUrls, name, currentPrice } = product;
  return (
    <List component="div" disablePadding>
      <Link
        className={classes.link}
        to={`${RoutesName.products}/${itemNo}`}
      >
        <ListItem component="div" button className={classes.nested}>
          <Grid
            component="div"
            item
            container
            xs={12}
            justify="space-between"
            alignItems="center"
            className={classes.productContainer}
          >
            <Grid
              component="div"
              item
              container
              xs={12}
              sm={2}
              md={1}
              className={classes.imgContainer}
            >
              <img
                className={classes.img}
                src={imageUrls ? imageUrls[0] : ''}
                alt={name ?? ''}
              />
            </Grid>
            <Grid
              component="div"
              item
              container
              xs={12}
              sm={3}
              md={4}
              justify="center"
            >
              {itemNo}
            </Grid>
            <Grid
              component="div"
              item
              container
              xs={12}
              sm={3}
              md={3}
              justify="center"
              className={`${classes.marginTop} ${classes.textCenter} ${classes.title}`}
            >
              {name}
            </Grid>
            <Grid
              component="div"
              item
              container
              xs={12}
              sm={1}
              md={2}
              justify="center"
              className={`${classes.marginTop} ${classes.fontBold} ${classes.textRight}`}
            >
              {`€${currentPrice}`}
            </Grid>
            <Grid
              component="div"
              item
              container
              xs={12}
              sm={1}
              md={2}
              className={`${classes.amoutContainer} ${classes.marginTop} ${classes.textCenter} ${classes.fontBold}`}
            >
              {cartQuantity}
            </Grid>
          </Grid>
        </ListItem>
      </Link>
    </List>
  )
};

export default OrderDetails;

OrderDetails.propTypes = {
  classes: PropTypes.string.isRequired,
  cartQuantity: PropTypes.string.isRequired,
  product: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
  ]).isRequired,
};
