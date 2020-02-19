import React from 'react'
import { shallow } from 'enzyme';
import { Typography } from '@material-ui/core';

import CheckoutStatus from './Status/status'
import DeliveryPaymentInfo from './Checkout-form/delivery-payment-info'
import CustomerInfo from './Checkout-form/customer-info'

describe('CheckoutStatus component', () => {
  const props = {
    location: {
      state: {
        orderDone: true,
        orderNo: 123,
        message: 'text'
      }
    }
  };

  it('CheckoutStatus orderDone is true', () => {
    const wrapper = shallow(<CheckoutStatus {...props} />);

    expect(wrapper.find('h2')).toHaveLength(1)
    expect(wrapper.find('p').text()).toEqual('Thank you for your choice!')
  });

  it('CheckoutStatus orderDone is false', () => {
    const nextProps = {
      ...props,
      location: {
        state: {
          orderDone: false
        }
      }
    }
    const wrapper = shallow(<CheckoutStatus {...nextProps} />);

    expect(wrapper.find('h2')).toHaveLength(1)
    expect(wrapper.find('p')).toHaveLength(2)
  });
});

describe('DeliveryPaymentInfo component', () => {
  it('should render correctly component', () => {
    const wrapper = shallow(<DeliveryPaymentInfo />);

    expect(wrapper.find('RadioCheckboxField')).toHaveLength(4);
    expect(wrapper.find(Typography)).toHaveLength(2);

    const texts = wrapper.find(Typography).map((node) => node.text());
    expect(texts).toEqual(['2. PAYMENT METHODS', '3. DELIVERY OPTIONS']);
  });
})

describe('CustomerInfo component', () => {
  it('should render correctly component', () => {
    const props = {
      customer: 'test'
    };

    const wrapper = shallow(<CustomerInfo {...props} />);

    expect(wrapper.find('Field')).toHaveLength(11);

    wrapper.find('Field').forEach((node) => {
      expect(node.simulate('change', { target: { value: 'My new value' } }));
    });
  });
});