import React, { useEffect, useState } from 'react';
import { useSelector, connect } from 'react-redux';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import { Grid, Divider, Collapse, ListItem, List, } from '@material-ui/core';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import getOrders from '../../../../services/getOrders';
import { orders as ordersAction } from '../../../../redux/actions/user';
import Spinner from '../../../Spinner/spinner';
import RoutesName from '../../../../routes-list';
import useStylesOrderItem from './_order-item';

const OrderItem = ({ orderAction }) => {
  const { orders } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!orders) {
      getOrders()
        .then((response) => {
          orderAction(response);
          setLoading(false);
        })
    } else {
      setLoading(false);
    }
  }, [orders, orderAction]);

  const classes = useStylesOrderItem();
  const [open, setOpen] = useState(false);



  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      {loading && <Spinner />}
      {!loading && orders.length > 0 ? orders.map((item) => {
        const {
          products,
          deliveryAddress,
          paymentInfo,
          shipping,
          email,
          mobile,
          status,
          orderNo,
          date,
          totalSum
        } = item;
        const { country, city, address, postal } = deliveryAddress;
        return (
          <List
            key={orderNo}
            component="nav"
            aria-labelledby="nested-list-subheader"
            className={classes.root}
          >
            <ListItem className={classes.mainBlock} button onClick={handleClick}>
              <Grid
                item
                container
                className={classes.orderInfo}
              >
                <span>Order №:</span>
                <span>{` ${orderNo}`}</span>
              </Grid>
              <Grid
                item
                container
                className={classes.orderInfo}
              >
                <span>Date:</span>
                <span>{` ${date.slice(0, 10)}`}</span>
              </Grid>
              <Grid
                item
                container
                className={classes.orderInfo}
              >
                <span>Status: </span>
                <span>{` ${status}`}</span>
              </Grid>
              <Grid
                item
                container
                className={classes.orderInfo}
              >
                <span>Total Sum:</span>
                <span>{` €${totalSum}`}</span>
              </Grid>
              <Grid
                item
                container
                className={classes.orderInfo}
              >
                <span>Item&apos;s quantity: </span>
                <span>{` ${products.length}`}</span>
              </Grid>
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse
              in={Boolean(open)}
              timeout="auto"
              unmountOnExit
              onClick={handleClick}
            >
              <List component="div" disablePadding>
                <ListItem className={classes.mainBlock} button>
                  <Grid
                    item
                    container
                    className={`${classes.orderInfo} ${classes.moreOrderInfo}`}
                  >
                    <span>Shipping: </span>
                    <span>{` ${shipping}`}</span>
                  </Grid>
                  <Grid
                    item
                    container
                    className={`${classes.orderInfo} ${classes.moreOrderInfo}`}
                  >
                    <span>Delivery Address: </span>
                    <span>{` ${country}, ${city}, ${address}, ${postal}`}</span>
                  </Grid>
                  <Grid
                    item
                    container
                    className={`${classes.orderInfo} ${classes.moreOrderInfo}`}
                  >
                    <span>Payment: </span>
                    <span>{` ${paymentInfo}`}</span>
                  </Grid>
                  <Grid
                    item
                    container
                    className={`${classes.orderInfo} ${classes.moreOrderInfo}`}
                  >
                    <span>Email: </span>
                    <span>{` ${email}`}</span>
                  </Grid>
                  <Grid
                    item
                    container
                    className={`${classes.orderInfo} ${classes.moreOrderInfo}`}
                  >
                    <span>Mobile: </span>
                    <span>{` ${mobile}`}</span>
                  </Grid>
                </ListItem>
              </List>
            </Collapse>
            <Divider variant="middle" />
            <Collapse
              in={Boolean(open)}
              timeout="auto"
              unmountOnExit
              onClick={handleClick}
            >
              <List component="div" disablePadding>
                <ListItem className={classes.mainBlock} >
                  <Grid
                    item
                    container
                    xs={12}
                    justify="space-between"
                    alignItems="center"
                    direction="row"
                    className={classes.productContainer}
                  >
                    <Grid
                      item
                      container
                      xs={12}
                      sm={2}
                      md={1}
                      className={classes.imgContainer}
                    />
                    <Grid
                      item
                      container
                      xs={12}
                      sm={3}
                      md={4}
                      justify="center"
                    >
                      <span>Item-Num: </span>
                    </Grid>
                    <Grid
                      item
                      container
                      xs={12}
                      sm={3}
                      md={3}
                      justify="center"
                      className={classes.textCenter}
                    >
                      <span>Product: </span>
                    </Grid>
                    <Grid
                      item
                      container
                      xs={12}
                      sm={1}
                      md={2}
                      justify="center"
                      className={classes.textRight}
                    >
                      <span>Price: </span>
                    </Grid>
                    <Grid
                      item
                      container
                      xs={12}
                      sm={1}
                      md={2}
                      className={classes.textRight}
                    >
                      <span>Amount: </span>
                    </Grid>
                  </Grid>
                </ListItem>
              </List>
            </Collapse>
            {products.map((its) => (
              <Collapse
                in={Boolean(open)}
                timeout="auto"
                unmountOnExit
                key={its.product.itemNo}
              >
                <Divider variant="middle" />
                <List component="div" disablePadding>
                  <Link
                    className={classes.link}
                    to={`${RoutesName.products}/${its.product.itemNo}`}
                  >
                    <ListItem button className={classes.nested}>
                      <Grid
                        item
                        container
                        xs={12}
                        justify="space-between"
                        alignItems="center"
                        className={classes.productContainer}
                      >
                        <Grid
                          item
                          container
                          xs={12}
                          sm={2}
                          md={1}
                          className={classes.imgContainer}
                        >
                          <img
                            className={classes.img}
                            src={its.product.imageUrls ? its.product.imageUrls[0] : ''}
                            alt={its.product.name ?? ''}
                          />
                        </Grid>
                        <Grid
                          item
                          container
                          xs={12}
                          sm={3}
                          md={4}
                          justify="center"
                        >
                          {/*{`Item-Num. ${its.product.itemNo}`}*/}
                          {its.product.itemNo}
                        </Grid>
                        <Grid
                          item
                          container
                          xs={12}
                          sm={3}
                          md={3}
                          justify="center"
                          className={`${classes.marginTop} ${classes.textCenter} ${classes.title}`}
                        >
                          {its.product.name}
                        </Grid>
                        <Grid
                          item
                          container
                          xs={12}
                          sm={1}
                          md={2}
                          justify="center"
                          className={`${classes.marginTop} ${classes.fontBold} ${classes.textRight}`}
                        >
                          {/*{`Price €${its.product.currentPrice}`}*/}
                          {`€${its.product.currentPrice}`}
                        </Grid>
                        <Grid
                          item
                          container
                          xs={12}
                          sm={1}
                          md={2}
                          className={`${classes.amoutContainer} ${classes.marginTop} ${classes.textCenter} ${classes.fontBold}`}
                        >
                          {/*{`Amount ${its.cartQuantity}`}*/}
                          {its.cartQuantity}
                        </Grid>
                      </Grid>
                    </ListItem>
                  </Link>
                </List>
              </Collapse>
            ))}
          </List>
        )
      })
        : (
          <p>
            So far, here is no orders, move on to the catalog and place your order.
            <br />
            <strong>Best wishes, your WMF</strong>
          </p>
        )}
    </>
  )
};

const mapStateToProps = (state) => ({
  ordersItems: state.user.orders
});

const mapDispatchToProps = (dispatch) => ({
  orderAction: (data) => dispatch(ordersAction(data))
});

OrderItem.propTypes = {
  orderAction: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderItem);
