import React from 'react'
import { shallow } from 'enzyme';
import { Typography } from '@material-ui/core';
import DeliveryPaymentInfo from './delivery-payment-info'
import CustomerInfo from './customer-info'
import RadioCheckboxField from './form-components/radio-checkbox-field'

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
    }
    const wrapper = shallow(<CustomerInfo {...props} />);

    expect(wrapper.find('Field')).toHaveLength(11);

    wrapper.find('Field').forEach((node) => {
      expect(node.simulate('change', { target: { value: 'My new value' } }));
    });
  });
})