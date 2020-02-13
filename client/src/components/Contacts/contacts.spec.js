import React from 'react'
import { shallow } from 'enzyme';
import Contacts from './contacts'
import Contact from './contact'

describe('Contacts component', () => {
  it('should render correctly component', () => {
    const renderedComponent = shallow(<Contacts />);

    expect(renderedComponent.find('h2').text()).toEqual('Consultations and order by phone:');
    expect(renderedComponent.find('h3').text()).toEqual('Address:');
    expect(renderedComponent.find('span').text()).toEqual('Kyiv, Hetmana 1, office 115');
    expect(renderedComponent.find('Contact')).toHaveLength(7);
  });

  it('Contact component', () => {
    const renderedComponent = shallow(<Contact>text</Contact>);
    expect(renderedComponent.find('span').text()).toEqual('text');
  })
});