import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import useStyles from './_product-list';
import ProductCard from '../Product-card/product-card';
import getAllCards from '../../services/dataBase';
import getDataTest from '../../services/getDataTest';

// import './product-list.scss'

export default function ProductList() {
  const classes = useStyles();

  const [data, setData] = useState({ products: [] });

  useEffect(() => {
    getDataTest()
      .then((products) => {
        setData({ products })
      })
  }, []);
  // useEffect(() => {
  //   getAllCards()
  //     .then((response) => {
  //       setData({ products: response.products })
  //     })
  // }, []);
  console.log(data);
  return (
    <div className={classes.productList}>
      {data.products.map((product, index) => (
        <Grid item md={6} lg={4} key={product._id}>
          <ProductCard

            product={product}

          />
        </Grid>
      ))}
    </div>
  )
}
