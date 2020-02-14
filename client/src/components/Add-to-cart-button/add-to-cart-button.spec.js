import React from 'react'
import { shallow } from 'enzyme';
import AddToCartButton from './add-to-cart-button'

describe('AddToCartButton component', () => {
  it('should render correctly component', () => {
    const renderedComponent = shallow(<AddToCartButton quantity={2} handleClick={() => {}} />);
    console.log(renderedComponent.debug())

    // expect(renderedComponent.find('h2').text()).toEqual('About us');
    // expect(renderedComponent.find('About')).toHaveLength(1);
    // expect(renderedComponent.find('Video')).toHaveLength(1);
    // expect(renderedComponent.find('Brands')).toHaveLength(1);
    // expect(renderedComponent.find('Awards')).toHaveLength(1);
  });

  // it('About component', () => {
  //   const renderedComponent = shallow(<About />);
  //
  //   expect(renderedComponent.find('h3').text()).toEqual('WMF brings pleasure into your life');
  //   expect(renderedComponent.find('p')).toHaveLength(2);
  // })

});