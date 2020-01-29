import React from 'react';
import { connect } from 'react-redux';
import { Button, Container, Grid, Typography } from '@material-ui/core';
import { reduxForm } from 'redux-form';

import CustomerInfo from './Checkout-form/customer-info';
import DeliveryPaymentInfo from './Checkout-form/delivery-payment-info';
import OrderConfirmation from './Checkout-form/order-confirmation';
import validateCheckoutForm from './validate-checkout-form';
import validate from '../SignUp/validate';
import RoutesName from '../../routes-list';

import { placeOrderToDB } from '../../services/checkout';
import { getCustomer } from '../../services/customer';
import { deleteCart } from '../../services/cart';
import { clearCart } from '../../redux/actions/CartActions';

import useStyles from '../SignUp/_sign-up';

let Checkout = (props) => {
  // console.log('PROPS IN CHECKOUT =', props);
  const classes = useStyles();
  const { history, handleSubmit, user, clearCart } = props;

  const customer = user.loggedIn ? user.customer : { _id: '5e30acb4264f5509ccd7bd96' };

  const initialState = {
    gender: 'Mr',
    firstName: '',
    lastName: ''
  };

  const submitNewOrder = (order) => {
    // console.log('FORM values =', order);
    // const newOrder = {
    //   ...initialState,
    //   ...values
    // };

    const newOrder = {
      customerId: `${customer._id}`,
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
      letterSubject: 'Thank you for your order!',
      letterHtml:
        '<h1>Your order is placed. OrderNo is XXXXXXXXXX.</h1><p>{Other details about order in' +
        ' your HTML}</p>'
    };

    // console.log('NEW ORDER =', newOrder);

    placeOrderToDB(newOrder)
      .then((order) => {
        if (order.status === 200) {
          console.log('order successfully placed');
          const { orderNo } = order.data.order;
          deleteCart()
            .then((response) => {
              console.log('OK =', response);
              clearCart();
            })
            .catch((error) => console.log('ERROR =', error));

          history.push(RoutesName.orderConfirmation, { orderDone: true, orderNo });
          return
        }

        console.log('order wasn\'t placed');
        history.push(RoutesName.orderConfirmation, { orderDone: false });
      })
      .catch((error) => {
        console.log('ERROR =', error);
        history.push(RoutesName.orderConfirmation, { orderDone: false });
      });
  };

  return (
    <Container component="div" maxWidth="xl" disableGutters>
      <Button
        onClick={() => history.push(RoutesName.cart)}
      >
        BACK TO CART
      </Button>
      <form className={classes.form} noValidate={false} onSubmit={handleSubmit(submitNewOrder)}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <CustomerInfo customer={customer} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <DeliveryPaymentInfo />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <OrderConfirmation />

          </Grid>
        </Grid>
        <Button
          type="submit"
          onClick={() => {
            console.log('order sent to DB');
          }}
        >
          PLACE ORDER
        </Button>
      </form>
    </Container>
  )
};

const mapStateToProps = (state) => ({
  cart: state.cart,
  user: state.user
});

const mapDispatchToProps = {
  clearCart
};

Checkout = reduxForm({
  form: 'checkout',
  validate,
})(Checkout);

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)