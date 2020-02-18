import React from 'react'
import { shallow } from 'enzyme';
import Home from './home'

describe('Home component', () => {
  it('should render correctly component', () => {
    const wrapper = shallow(<Home />);

    expect(wrapper.find('MainSlider')).toHaveLength(1);
    expect(wrapper.find('CategoryList')).toHaveLength(1);
    expect(wrapper.find('Carousels')).toHaveLength(1);
  });
});