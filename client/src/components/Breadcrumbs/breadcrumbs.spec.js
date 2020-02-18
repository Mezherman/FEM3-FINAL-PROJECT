import React from 'react'
import { shallow, mount } from 'enzyme';
import { Typography, MenuItem } from '@material-ui/core';
import { BrowserRouter, Link } from 'react-router-dom'
import HomeIcon from '@material-ui/icons/Home';
import BreadcrumbsSearch from './breadcrumbs-search'
import BreadcrumbsHome from './breadcrumbs-home'
import BreadcrumbsItem from './breadcrumbs-item'

describe('Breadcrumbs component', () => {
  it('BreadcrumbsSearch should render a Link, Icon, MenuItem', () => {
    const wrapper = shallow(<BreadcrumbsHome />);

    expect(wrapper.find(MenuItem)).toHaveLength(1);
    expect(wrapper.find(Link)).toHaveLength(1);
    expect(wrapper.find(HomeIcon)).toHaveLength(1);
  });

  it('BreadcrumbsItem should render with props', () => {
    const props = {
      route: 'someText',
      text: '123'
    }
    const wrapper = shallow(<BreadcrumbsItem {...props} />);
    console.log(wrapper.debug())
    expect(wrapper.find(MenuItem)).toHaveLength(1);
    expect(wrapper.find(Link)).toHaveLength(1);
  });

  it('BreadcrumbsItem should render if set props', () => {
    const props = {
      route: '',
      text: ''
    }
    const wrapper = mount(<BrowserRouter><BreadcrumbsItem {...props} /></BrowserRouter>);
    console.log(wrapper.debug())

    wrapper.setProps({ route: 'test', text: '12' })
    expect(wrapper.prop('text')).toEqual('12')
    expect(wrapper.prop('route')).toEqual('test')
  });

  it('BreadcrumbsSearch should render a Typography', () => {
    const wrapper = shallow(<BreadcrumbsSearch />);

    expect(wrapper.find(Typography)).toHaveLength(1);
  });
});