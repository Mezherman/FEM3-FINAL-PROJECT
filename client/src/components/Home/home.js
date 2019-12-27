import React from 'react';
import Carousels from '../Nuka-carousel/nukaCarousel'
import CategoryList from '../Category-list/category-list'

export default function Home() {

  return (
    <>
      <Carousels
        isProductSlider={false}
        autoPlay
        autoplayInterval={2000}
        wrapAround
        slideIndex={0}
        slidesToShow={1}
      />
      <CategoryList />
      <Carousels
        autoPlay
        autoplayInterval={2000}
        wrapAround
        slideIndex={0}
        slidesToShow={1}
      />
    </>
  );
}