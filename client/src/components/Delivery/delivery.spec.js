import React from 'react'
import { shallow } from 'enzyme';
import Delivery from './delivery'

describe('Delivery component', () => {
  it('should render correctly component', () => {
    const renderedComponent = shallow(<Delivery />);

    expect(renderedComponent.find('h2')).toHaveLength(3);
    expect(renderedComponent.find('p')).toHaveLength(2);
  });
});