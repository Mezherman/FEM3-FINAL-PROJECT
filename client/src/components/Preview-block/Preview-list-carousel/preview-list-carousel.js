import React from 'react';
import { Divider, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import Carousels from '../../Carousel/carousel';
import useStyles from './_preview-list-carousel';

export default function PreviewListCarousel(props) {
  const classes = useStyles();
  const { products, slidesToShow } = props;

  return (
    <>
      <Carousels
        wrapAround
        renderBottomCenterControls={null}
        transitionMode="scroll"
        cellSpacing={5}
        slidesToScroll={1}
        slidesToShow={slidesToShow}
      >
        {products.map((product) => (
          <div className={classes.product} key={product.art}>
            <img
              src={product.imageUrls[0]}
              className={classes.image}
              alt={product.name}
            />
            <Divider />
            <div className={classes.text}>
              <p className={classes.title}>{product.name}</p>
              <p className={classes.price}>
                €
                {product.specialPrice ? product.specialPrice : product.currentPrice}
              </p>
              <Divider />
              <Button onClick={() => console.log('work!')}>
                Remove
              </Button>
            </div>
          </div>
        ))}
      </Carousels>
    </>
  )
}

PreviewListCarousel.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
  slidesToShow: PropTypes.number
};

PreviewListCarousel.defaultProps = {
  products: [],
  slidesToShow: 1
};