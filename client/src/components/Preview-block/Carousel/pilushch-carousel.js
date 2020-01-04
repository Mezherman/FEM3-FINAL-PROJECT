import React, { useState } from 'react';
import Carousel from 'nuka-carousel';
import { Divider } from '@material-ui/core';
import useStyles from '../Preview-list/_preview-list';

export default function MyCarousel (props) {
  const classes = useStyles();

  const [slideIndex, setSlideIndex] = useState(0);

  const { wrapAround, slidesToScroll, slidesToShow, autoPlay,  transitionMode="fade", text = false, isProductSlider = true, products = [] } = props;

  return (
    <Carousel
      slidesToScroll={slidesToScroll}
      autoplay={autoPlay}
      wrapAround={wrapAround}
      afterSlide={slideIndex => setSlideIndex({ slideIndex })}
      transitionMode={transitionMode}
      slidesToShow={slidesToShow}
      renderBottomCenterControls={null}
      renderCenterLeftControls={({ previousSlide }) => (
        <div className="arrow-prev" onClick={previousSlide}>
          <div className="arrow-prev-top"/>
          <div className="arrow-prev-bottom"/>
        </div>
      )}
      renderCenterRightControls={({ nextSlide }) => (
        <div className="arrow-next" onClick={nextSlide}>
          <div className="arrow-next-top"/>
          <div className="arrow-next-bottom"/>
        </div>
      )}
    >
      {products.map((product) => (
        <div className={classes.product} key={product.art}>
          <img src={product.url} className={classes.image} alt="products" />
          <Divider />
          <div className={classes.text}>
            <p className={classes.title}>{product.title}</p>
            <p className={classes.price}>
              €
              {product.specialPrice ? product.specialPrice : product.price}
            </p>
            <Divider />
            <p className={classes.button}>Remove</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
}