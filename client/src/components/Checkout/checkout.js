import React from 'react';
import { connect } from 'react-redux';
import { Button, Container, Grid, Typography, Box } from '@material-ui/core';
import { reduxForm } from 'redux-form';

import CustomerInfo from './Checkout-form/customer-info';
import DeliveryPaymentInfo from './Checkout-form/delivery-payment-info';
import OrderConfirmation from './Checkout-form/order-confirmation';
import validate from './validate';
import RoutesName from '../../routes-list';

import { placeOrderToDB } from '../../services/checkout';
import { deleteCartFromDB } from '../../services/cart';
import { clearCart } from '../../redux/actions/CartActions';

import useStyles from './_checkout';
import Spinner from '../Spinner/spinner';

let Checkout = (props) => {
  // console.log('PROPS IN CHECKOUT =', props);
  const classes = useStyles();
  const { history, handleSubmit, user, cart, clearCart, isFetchingLoadData } = props;

  // console.log('isFetchingLoadData =', isFetchingLoadData);

  const customer = user.loggedIn ? user.customer : '';

  const createOrder = (order) => {
    // console.log(order);
    const interimOrder = {
      deliveryAddress: {
        country: order.country,
        city: order.city,
        address: `${order.street}, ${order.house}`,
        postal: order.postalCode
      },
      shipping: order.delivery,
      paymentInfo: order.paymentMethod,
      status: 'not shipped',
      email: order.email,
      mobile: order.mobile,
      comments: order.comments,
      letterSubject: 'Thank you for your order!',
      letterHtml:
        '<h1>Your order is placed. OrderNo is XXXXXXXXXX.</h1><p>{Other details about order in' +
        ' your HTML}</p>'
    };

    // console.log('CUSTOMER =', customer);

    if (customer) {
      return {
        ...interimOrder,
        customerId: `${customer._id}`
      }
    }

    return {
      ...interimOrder,
      products: cart.products
    }
  };

  const submitNewOrder = (order) => {
    // console.log('order =', order);

    const newOrder = createOrder(order);
    // console.log('NEW ORDER =', newOrder);

    placeOrderToDB(newOrder)
      .then((response) => {
        // console.log('RESP =', response);
        if (response.orderIsPlaced) {
          console.log('order successfully placed');
          const { orderNo, customerId } = response.placedOrder;

          // console.log('customerId =', customerId);

          if (customerId) {
            deleteCartFromDB()
              .then((response) => {
                // console.log('OK =', response);
                clearCart();
              })
              .catch((error) => console.log('ERROR =', error));
          } else {
            window.localStorage.setItem('cart', '');
            clearCart();
          }

          history.push(RoutesName.orderConfirmation, {
            orderDone: true,
            orderNo
          });
        } else {
          console.log('order wasn\'t placed');
          history.push(RoutesName.orderConfirmation, {
            orderDone: false,
            message: response.message
          });
        }
      })
      .catch((error) => {
        console.log('ERROR =', error);
        history.push(RoutesName.orderConfirmation, { orderDone: false });
      });
  };

  return (
    <>
      {isFetchingLoadData
        ? <Spinner />
        : (
          <Container component="div" maxWidth="xl" disableGutters>
            <form
              className={classes.form}
              noValidate={false}
              onSubmit={handleSubmit(submitNewOrder)}
            >
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4}>
                  <CustomerInfo customer={customer} />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <DeliveryPaymentInfo />
                </Grid>
                <Grid item xs={12} md={4}>
                  <OrderConfirmation />
                  <Box className={classes.btnWrapper}>
                    <Button
                      type="submit"
                      size="large"
                      variant="contained"
                      color="primary"
                      disableElevation
                      className={classes.btn}
                      onClick={() => {
                        console.log('order sent to DB');
                      }}
                    >
                      PLACE ORDER
                    </Button>
                    <Button
                      size="large"
                      variant="contained"
                      color="secondary"
                      disableElevation
                      className={classes.btn}
                      onClick={() => history.push(RoutesName.cart)}
                    >
                      BACK TO CART
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </form>
          </Container>
        )}
    </>
  )
};

const mapStateToProps = (state) => {
  // console.log('STATE =', state);
  return {
    cart: state.cart,
    user: state.user,
    isFetchingLoadData: state.isFetchingLoadData.isFetching,
    initialValues: state.user
  }
};

const mapDispatchToProps = {
  clearCart
};

Checkout = reduxForm({
  form: 'checkout',
  values: { firstName: 'Petya' },
  validate,
})(Checkout);

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)