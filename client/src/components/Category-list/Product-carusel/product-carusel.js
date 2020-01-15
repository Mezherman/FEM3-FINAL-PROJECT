import React, { useEffect, useState } from 'react'
import { Button } from '@material-ui/core'
import Grid from '@material-ui/core/Grid/Grid'
import Carousels from '../../Carousel/carousel';
import useStyles from './styles'

export default function ProductCarusel (props) {
  const classes = useStyles();
  const { products } = props;
  const [productLink, updateProductLinks] = useState([]);

  useEffect(() => {
    updateProductLinks(generateProductLink(products[0]));
  }, [products]);

  const onProductSlide = (event, productIndex) => {
    updateProductLinks(generateProductLink(products[productIndex]));
  }
  const generateProductLink = (product) =>
    // TODO dont know route
    product.id

  return (
    <Grid container direction="column" className={classes.categories_item_slider}>
      <Carousels
        isProductSlider
        autoPlay={false}
        wrapAround
        slideIndex={0}
        slidesToShow={1}
        productsList={products}
        onProductSlide={onProductSlide}
      />

      <Button variant="contained" color="primary" className={classes.categories_btn} link={productLink}>
        to product
      </Button>
    </Grid>
  )
}
