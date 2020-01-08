import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

import useStyles from './_product-list';
import ProductCard from '../Product-card/product-card';
import getAllCards from '../../services/dataBase';

// import './product-list.scss'

export default function ProductList() {
  const classes = useStyles();

  const [data, setData] = useState({ products: [] });

  useEffect(() => {
    getAllCards()
      .then((response) => {
        setData({ products: response.products })
      })
  }, []);

  return (
    <div className={classes.productList}>
      {data.products.map((product, index) => (
        <Grid item md={6} lg={4} key={product.id}>
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
