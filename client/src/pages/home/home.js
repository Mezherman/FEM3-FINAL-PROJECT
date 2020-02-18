import React from 'react';
import { Container } from '@material-ui/core';
import MainSlider from '../../components/Main-carousel/main-carousel';
import CategoryList from '../../components/Category-list/category-list';
import Carousels from '../../components/Carousel/carousel';

export default function HomePage() {
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
  )
}
