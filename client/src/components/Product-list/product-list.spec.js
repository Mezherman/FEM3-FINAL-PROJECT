import React from 'react'
import { shallow } from 'enzyme';
import { connect, Provider } from 'react-redux'

import ProductList from './product-list'
import configureStore from '../../redux/store/configureStore'

describe('ProductList component', () => {
  const props = {
    products: [],
    productsLoading: false
  }

  console.log('props before ->',props)

  const store = configureStore();

  it('products loading', () => {
    const nextProps = {
      ...props,
      productsLoading: true,
      products: [1]
    }

    const renderedComponent = shallow(<Provider store={store}><ProductList {...nextProps}/></Provider>);
    console.log('afteer ->>>',nextProps)
    console.log(renderedComponent.debug())

    // expect(renderedComponent.find('p').text()).toEqual('Loading');
    expect(renderedComponent.find('p')).toEqual(true);
    // expect(renderedComponent.find('FooterNavbar')).toHaveLength(1);
  });

  // Bare component.
//   const Component = () => {
//     return <div>Hello World</div>;
//   };
//
// // Redux connected component.
//   const ConnectedComponent = connect()(Component);
//
//   it('inject store work', () => {
//     // Inject store directly into connected component.
//     const wrapper = shallow(
//       <ConnectedComponent store={mockStore()} />
//     );
//     expect(wrapper).toMatchSnapshot();
//   });

  // it('MainText component', () => {
  //   const renderedComponent = shallow(<MainText />);
  //
  //   expect(renderedComponent.contains(<img src="/img/wmf-footer.jpg" alt="WMF" className="makeStyles-img-5" />)).toEqual(true);
  //   expect(renderedComponent.find('h2')).toHaveLength(1);
  //   expect(renderedComponent.find('p')).toHaveLength(1);
  // })
  //
  // it('FooterNavbar component', () => {
  //   const renderedComponent = shallow(<FooterNavbar />);
  //
  //   expect(renderedComponent.find('FooterCompanyLink')).toHaveLength(1);
  //   expect(renderedComponent.find('FooterAccountLink')).toHaveLength(1);
  //   expect(renderedComponent.find('FooterContactsLink')).toHaveLength(1);
  // })
  //
  // it('FooterAccountLink component', () => {
  //   const renderedComponent = shallow(<FooterAccountLink />);
  //
  //   expect(renderedComponent.find('h2').text()).toEqual('Account');
  //   expect(renderedComponent.find('Link')).toHaveLength(3);
  // })
  //
  // it('FooterCompanyLink component', () => {
  //   const renderedComponent = shallow(<FooterCompanyLink />);
  //
  //   expect(renderedComponent.find('h2').text()).toEqual('Company');
  //   expect(renderedComponent.find('Link')).toHaveLength(2);
  // })
  //
  // it('FooterContactsLink component', () => {
  //   const renderedComponent = shallow(<FooterContactsLink />);
  //
  //   expect(renderedComponent.find('h2').text()).toEqual('Contacts');
  //   expect(renderedComponent.find('Link').text()).toEqual(' Contact list ');
  //   expect(renderedComponent.find('span')).toHaveLength(6);
  // })
});