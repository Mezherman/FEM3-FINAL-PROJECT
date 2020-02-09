import React from 'react';
import { Grid, List, ListItem } from '@material-ui/core';
import PropTypes from 'prop-types';
import OrderTitlesTemplate from './Order-function-templates/order-titles-template';

const OrderTitles = ({ classes }) => (
  <List component="div" disablePadding>
    <ListItem component="div" className={classes.mainBlock}>
      <Grid
        component="div"
        item
        container
        xs={12}
        justify="space-between"
        alignItems="center"
        direction="row"
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
        />
        <OrderTitlesTemplate
          className={`${classes.textCenter} ${classes.fontBold}`}
          xs={12}
          sm={3}
          md={4}
          value="Item-Num: "
          justify="center"
        />
        <OrderTitlesTemplate
          className={`${classes.textCenter} ${classes.fontBold}`}
          xs={12}
          sm={3}
          md={3}
          value="Product: "
          justify="flex-start"
        />
        <OrderTitlesTemplate
          className={`${classes.textRight} ${classes.fontBold}`}
          xs={12}
          sm={1}
          md={2}
          justify="center"
          value="Price: "
        />
        <OrderTitlesTemplate
          className={`${classes.textRight} ${classes.fontBold}`}
          xs={12}
          sm={1}
          md={2}
          justify="center"
          value="Amount: "
        />
      </Grid>
    </ListItem>
  </List>
);

export default OrderTitles;

OrderTitles.propTypes = {
  classes: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]).isRequired,
};
