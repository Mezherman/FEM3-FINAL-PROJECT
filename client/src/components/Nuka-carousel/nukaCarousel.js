import React, { Component } from 'react';
import Carousel from 'nuka-carousel';

export default class NukaCarousel extends Component {
  render () {
    return (
      <div>
        <Carousel autoplay={true} autoplayInterval={1000} wrapAround={true} slideIndex={1}
          slidesToShow={3}>
          <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide1"/>
          <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide2"/>
          <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide3"/>
          <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide4"/>
          <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide5"/>
          <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide6"/>
        </Carousel>
      </div>
    );
  }
}
