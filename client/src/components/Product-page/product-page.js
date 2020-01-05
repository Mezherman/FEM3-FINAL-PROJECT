import React, { Component, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import getAllCards from '../../services/dataBase';
import ProductCard from '../Product-card/product-card';
import ProductDetail from '../Product-detail/product-detail';
import Grid from "@material-ui/core/Grid";

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
            id={product.id}
            key={product.url}
            url={product.url}
            url1={product.url1}
            url2={product.url2}
            price={product.price}
            specialPrice={product.specialPrice}
            title={product.title}
          />
        </Grid>
      ))}
    </div>
  )
}
ProductPage.propTypes = {
  itemUrl: PropTypes.string.isRequired,
};
