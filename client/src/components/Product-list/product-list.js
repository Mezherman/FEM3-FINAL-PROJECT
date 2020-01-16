import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import useStyles from './_product-list';

import ProductCard from '../Product-card/product-card';
import getAllCards from '../../services/dataBase';
import getAllProducts, { getProductsByCategory } from '../../services/getProducts';

import { RoutesName } from '../../routes';
// import './product-list.scss'

export default function ProductList({ category }) {
  const classes = useStyles();

  const [data, setData] = useState([]);

  // useEffect(() => {
  //   getAllProducts()
  //     .then((products) => {
  //       setData({ products })
  //     })
  // }, [])
  useEffect(() => {
    getProductsByCategory(category)
      .then((products) => {
        console.log('useEffect = ', products);
        setData(products.products)
      })
  }, [category]);
  // useEffect(() => {
  //   getAllCards()
  //     .then((response) => {
  //       setData({ products: response.products })
  //     })
  // }, []);
  console.log('data = ', data);
  return (
    <div className={classes.productList}>
      {data.map((product, index) => (
        <Grid item md={6} lg={4} key={product._id}>
          <ProductCard

            product={product}

          />
        </Grid>
      ))}
    </div>
  )
}
