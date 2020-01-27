import React from 'react';
import { connect, useSelector } from 'react-redux';
import { Button, Container, Grid } from '@material-ui/core';
import { reduxForm } from 'redux-form';

import CheckoutForm from './Checkout-form/checkout-form';
import validateCheckoutForm from './validate-checkout-form';
import validate from '../SignUp/validate';

import { placeOrderToDB } from '../../services/checkout';
import { getCustomer } from '../../services/customer';

import useStyles from '../SignUp/_sign-up';

let Checkout = (props) => {
  // console.log('PROPS IN CHECKOUT =', props);
  const classes = useStyles();
  const { history, handleSubmit } = props;
  // const { cart, userReducer } = useSelector((state) => state);

  let initialState = {
    gender: 'Mr',
    firstName: '',
    lastName: ''
  };

  const submitNewOrder = (values) => {
    const newOrder = {
      ...initialState,
      ...values
    };

    // const newOrder = {
    //   customerId: `${customer._id}`,
    //   deliveryAddress: {
    //     country: 'Ukraine',
    //     city: 'Kiev',
    //     address: 'Kreshchatic Street 56//A',
    //     postal: '01044'
    //   },
    //   shipping: 'Kiev 50UAH',
    //   paymentInfo: 'Credit card',
    //   status: 'not shipped',
    //   email: 'vlad.mezhik@gmail.com',
    //   mobile: '+380630000000',
    //   letterSubject: 'Thank you for order! You are welcome!',
    //   letterHtml:
    //     '<h1>Your order is placed. OrderNo is 023689452.</h1><p>{Other details about order in your HTML}</p>'
    // };

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

  // const customer = userReducer.loggedIn ? userReducer.customer : { _id: 'unknown' };

  return (
    <Container component="div" maxWidth="xl" disableGutters>
      <form className={classes.form} noValidate={false} onSubmit={handleSubmit(submitNewOrder)}>
        <Grid container>
          <Grid item md={4}>
            <CheckoutForm />
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
  user: state.userReducer
});

Checkout = reduxForm({
  form: 'checkout',
  validateCheckoutForm,
})(Checkout);

export default connect(mapStateToProps)(Checkout)