import React from 'react';
import { connect } from 'react-redux';
import { Button, Container, Grid, Typography } from '@material-ui/core';
import { reduxForm } from 'redux-form';

import CustomerInfo from './Checkout-form/customer-info';
import validateCheckoutForm from './validate-checkout-form';
import validate from '../SignUp/validate';

import { placeOrderToDB } from '../../services/checkout';
import { getCustomer } from '../../services/customer';

import useStyles from '../SignUp/_sign-up';

let Checkout = (props) => {
  // console.log('PROPS IN CHECKOUT =', props);
  const classes = useStyles();
  const { history, handleSubmit, user } = props;

  const initialState = {
    gender: 'Mr',
    firstName: '',
    lastName: ''
  };

  const customer = user.loggedIn ? user.customer : { _id: 'unknown' };


  const submitNewOrder = (order) => {
    console.log('FORM values =', order);
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
      shipping: 'Kiev 50UAH',
      paymentInfo: 'Credit card',
      status: 'not shipped',
      email: order.email,
      mobile: order.mobile,
      letterSubject: 'Thank you for your order!',
      letterHtml:
        '<h1>Your order is placed. OrderNo is 023689452.</h1><p>{Other details about order in your HTML}</p>'
    };

    console.log('NEW ORDER =', newOrder);

    // placeOrderToDB(newOrder)
    //   .then(() => {
    //     console.log('order successfully placed');
    //     history.push('/checkout/success', { test: 1 });
    //   })
    //   .catch(() => {
    //     console.log('order wasn\'t placed');
    //     history.push('/checkout/error')
    //   });
  };

  // console.log('CART=', cart);

  return (
    <Container component="div" maxWidth="xl" disableGutters>
      <form className={classes.form} noValidate={false} onSubmit={handleSubmit(submitNewOrder)}>
        <Grid container>
          <Grid item md={4}>
            <CustomerInfo />
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

Checkout = reduxForm({
  form: 'checkout',
  validateCheckoutForm,
})(Checkout);

export default connect(mapStateToProps)(Checkout)