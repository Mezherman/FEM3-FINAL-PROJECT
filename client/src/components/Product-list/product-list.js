import React from 'react';
import { useSelector } from 'react-redux';

import ProductCard from '../Product-card/product-card';
import Spinner from '../Spinner/spinner';
import Sorting from '../Sorting/sorting';

import useStyles from './_product-list';

export default function ProductList() {
  const { products, productsLoading } = useSelector((state) => state.productsReducer);
  const classes = useStyles();
  const renderProducts = (productsList) => (
    productsList.map((product) => (
      <ProductCard
        key={product.itemNo}
        product={product}
      />
    ))
  );

  return (
    <>
      <Sorting />
      <div className={classes.productList}>
        {productsLoading && <Spinner />}
        {!productsLoading &&
        renderProducts(products)}
      </div>
    </>
  )
}