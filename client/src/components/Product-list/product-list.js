import React, { Component, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../Product-card/product-card';
import getAllCards from '../../services/dataBase';
import './product-list.scss'
import Grid from '@material-ui/core/Grid';

export default function ProductList() {
  const [data, setData] = useState({ products: [] });

  useEffect(() => {
    getAllCards()
      .then((response) => {
        setData({ products: response.products })
      })
  }, [])

  return (
    <div className="product-list">

      {data.products.map((product, index) => (
        <Grid item md={6} lg={4}>
          <Link to={`products/${product.id}`}>
            <ProductCard
              id={product.id}
              key={product.art}
              url={product.url}
              price={product.price}
              specialPrice={product.specialPrice}
              title={product.title}
            />
          </Link>
        </Grid>
      ))}
    </div>
  )
}
