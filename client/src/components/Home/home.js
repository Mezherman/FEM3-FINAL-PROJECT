import React from 'react';
// import { CarouselSlideRenderControlProps as previousSlide } from 'nuka-carousel';
import CategoryList from '../Category-list/category-list';
import MainSlider from '../Main-carousel/mainCarousel'

import Carousels from '../Carousel/carousel';
import PagingDots from '../Carousel/pagingDots';
// import useStylesCarousel from '../Carousel/_carousel';

export default function Home() {
  // const classes = useStylesCarousel();
  // const arrowsPrev =
  return (
    <>
      <MainSlider />
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
