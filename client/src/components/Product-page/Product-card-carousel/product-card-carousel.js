import React, { Component, useEffect, useState } from 'react';
import Slider from 'react-slick';
// import 'slick-carousel/slick/slick-theme.css';
import { Box, Divider, Button, SvgIcon, useTheme } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import useMediaQuery from '@material-ui/core/useMediaQuery/useMediaQuery';
import withWidth from '@material-ui/core/withWidth';
import ProductCard from '../../Product-card/product-card';
import Carousels from '../../Carousel/carousel';
import useStyles from './_product-card-carousel';
import RoutesName from '../../../routes-list';

function ProductCardCarousel(props) {
  const { products } = props;
  const classes = useStyles();

  const slidesToShow = {
    xs: 1,
    sm: 2,
    md: 3,
    lg: 4,
    xl: 4,
  };
  const productCardList = (products) => (
    products.map((item) => (
      <>
        <ProductCard
          key={item.itemNo}
          product={item}
        />
      </>
    ))
  )

  return (
    <Box className={classes.carousel}>
      <Carousels
      // autoPlay
        wrapAround
        renderBottomCenterControls={null}
        transitionMode="scroll"
        cellSpacing={5}
        slidesToScroll={2}
        slidesToShow={slidesToShow[props.width]}
        renderCenterLeftControls={({ previousSlide }) => (
          <Button

            onClick={previousSlide}
          >
            <SvgIcon>
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M20 .755l-14.374 11.245 14.374 11.219-.619.781-15.381-12 15.391-12 .609.755z" /></svg>
            </SvgIcon>
          </Button>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <Button onClick={nextSlide}>
            <SvgIcon>
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z" /></svg>
            </SvgIcon>
          </Button>
        )}
      >
        {productCardList(products)}
      </Carousels>
      <Divider />
    </Box>
  );
}

export default withWidth()(ProductCardCarousel);
