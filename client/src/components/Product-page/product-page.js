import React, { Component, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import getAllCards from '../../services/dataBase';
import ProductCard from '../Product-card/product-card';
import ProductDetail from '../Product-detail/product-detail';

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
        <>
          <ProductDetail
            id={product.id}
            key={product.art}
            url={product.url}
            price={product.price}
            specialPrice={product.specialPrice}
            title={product.title}
          />
        </>
      ))}
    </div>
  )
}
ProductPage.propTypes = {
  itemUrl: PropTypes.string.isRequired,
};
