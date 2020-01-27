import React, { Component, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import Carousel from 'nuka-carousel';
// import Carousels from '../../Carousel/carousel';

export default function ProductDetailCarousel({ images }) {
  const { imageUrls } = images;
  const imageList = imageUrls.map((url) => (
    <img src={url} />
  ))
  return (
    <Carousel
      wrapAround
      renderBottomCenterControls={null}
      transitionMode="scroll"
      cellSpacing={5}
      slidesToScroll={2}
      slidesToShow={1}
    >
      {imageList}
    </Carousel>

  );
}
