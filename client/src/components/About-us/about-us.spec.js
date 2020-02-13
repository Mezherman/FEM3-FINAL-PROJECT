import React from 'react'
import { shallow } from 'enzyme';
import AboutUs from './about-us'
import Brands from './Brands/brands'
import About from './About/about'
import Awards from './Awards/awards'
import Video from './Video/video'

describe('AboutUs component', () => {
  it('should render correctly component', () => {
    const renderedComponent = shallow(<AboutUs />);

    expect(renderedComponent.find('h2').text()).toEqual('About us');
    expect(renderedComponent.find('About')).toHaveLength(1);
    expect(renderedComponent.find('Video')).toHaveLength(1);
    expect(renderedComponent.find('Brands')).toHaveLength(1);
    expect(renderedComponent.find('Awards')).toHaveLength(1);
  });

  it('About component', () => {
    const renderedComponent = shallow(<About />);

    expect(renderedComponent.find('h3').text()).toEqual('WMF brings pleasure into your life');
    expect(renderedComponent.find('p')).toHaveLength(2);
  })

  it('Awards component', () => {
    const renderedComponent = shallow(<Awards />);

    expect(renderedComponent.find('h3').text()).toEqual('WMF Design – Winner of multiple awards');
    expect(renderedComponent.contains(<img src="/img/about/awards.jpg" alt="Our rewards" className="makeStyles-img-8" />)).toEqual(true);
    expect(renderedComponent.find('p')).toHaveLength(1);
  })

  it('Brands component', () => {
    const renderedComponent = shallow(<Brands />)
    expect(renderedComponent.find('h3').text()).toEqual('Brands and companies');
    expect(renderedComponent.find('p')).toHaveLength(2);
  })

  it('Video component', () => {
    const renderedComponent = shallow(<Video />)
    expect(renderedComponent.contains(
      <video className="makeStyles-video-9" controls poster="/img/wmf.jpg">
        <source src="/video.mp4" />
        <track kind="captions" />
        Sorry, your browser doesn′t support embedded videos.
      </video>
    )).toEqual(true);
  })
});