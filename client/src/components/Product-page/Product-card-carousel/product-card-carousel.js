import React, { Component, useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import Carousel from 'nuka-carousel';
import Grid from '@material-ui/core/Grid';
import { getProductsByItemNo } from '../../../services/getProducts';
import getAllCards from '../../../services/dataBase';
import ProductCard from '../../Product-card/product-card';
import Carousels from '../../Carousel/carousel';
// import Carousels from '../../Carousel/carousel';

export default function ProductCardCarousel({ cardsToShow }) {
  console.log('cards', cardsToShow);
  const productCardList = (cardsToShow) => (
    <>
      <ProductCard
        product={cardsToShow}
      />
      <ProductCard
        product={cardsToShow}
      />
      <ProductCard
        product={cardsToShow}
      />
      <ProductCard
        product={cardsToShow}
      />
      <ProductCard
        product={cardsToShow}
      />
    </>
  )
  console.log(productCardList);
  // const [data, setData] = useState({ products: [] });
  //
  // useEffect(() => {
  //   getAllCards()
  //     .then((response) => {
  //       setData({ products: response.products })
  //     })
  // }, []);
  //
  //
  // console.log(data);
  // const [data, setData] = useState({  });
  // //
  // useEffect(() => {
  //   console.log('WHY')
  //   getProductsByItemNo(cardsToShow[0])
  //     .then((response) => {
  //       console.log('resp', response);
  //       setData([response.data])
  //     })
  // }, []);

  return (
    <Carousels
      wrapAround
      renderBottomCenterControls={null}
      transitionMode="scroll"
      cellSpacing={5}
      slidesToScroll={2}
      slidesToShow={5}
    >
      {productCardList(cardsToShow)}
    </Carousels>

  );
}