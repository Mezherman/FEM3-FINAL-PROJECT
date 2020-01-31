import React from 'react';
// import { CarouselSlideRenderControlProps as previousSlide } from 'nuka-carousel';
import { Container } from '@material-ui/core';
import CategoryList from '../Category-list/category-list';
import MainSlider from '../Main-carousel/mainCarousel'

import Carousels from '../Carousel/carousel';
// import PagingDots from '../Carousel/pagingDots';
import PersonalData from '../My-account/edit-personal-data';
import ProductCardCarousel from '../Product-card-carousel/product-card-carousel';
// import useStylesCarousel from '../Carousel/_carousel';

export default function Home() {
  // const classes = useStylesCarousel();
  // const arrowsPrev =
  return (
    <>
      <MainSlider />
      <Container maxWidth="xl">
        <CategoryList />
        <Carousels
          autoPlay
          autoplayInterval={2000}
          wrapAround
          slideIndex={0}
          slidesToShow={1}
        />
      </Container>
    </>
  );
}
