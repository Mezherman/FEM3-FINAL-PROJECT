import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import getAllCards from '../../services/dataBase';
import ProductDetail from '../Product-detail/product-detail';
import ProductCardSlider from '../Product-detail/product-card-slider';

export default function ProductPage({ itemUrl }) {
  const [data, setData] = useState({ products: [] });

  useEffect(() => {
    getAllCards()
      .then((response) => {
        setData({ products: response.products })
      })
  }, []);

  const filteredProduct = data.products.filter((product) => itemUrl.indexOf(product.id) !== -1)
  return (
    <div className="product-essential">
      { filteredProduct.map((product) => (
        <Grid key={product.id}>
          <ProductDetail
            product={product}
          />
        </Grid>
      ))}
      <ProductCardSlider />
    </div>
  )
}
ProductPage.propTypes = {
  itemUrl: PropTypes.string.isRequired,
};
