import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import InfiniteScroll from 'react-infinite-scroll-component';
import ProductCard from '../Product-card/product-card';
import { filterIncreasePage } from '../../redux/actions/filter';
import Spinner from '../Spinner/spinner';

import useStyles from './_product-list';
import { invalidPassword } from '../../redux/actions/password-validation'

export default function ProductList(props) {
  console.log('PROPS =', props);
  const { productsResult: { products, productsQuantity = 0 } } = props;
  const classes = useStyles();
  const dispatch = useDispatch();
  const loadMoreProducts = useCallback(() => {
    dispatch(filterIncreasePage());
  }, [dispatch]);

  const renderProducts = (productsList) => (
    productsList.map((product) => (
      <ProductCard
        key={product.itemNo}
        product={product}
      />
    ))
  );

  return (
    <InfiniteScroll
      dataLength={productsQuantity}
      next={loadMoreProducts}
      hasMore={products.length < productsQuantity}
      loader={<Spinner />}
      className={classes.productList}
    >
      {renderProducts(products)}
    </InfiniteScroll>
  )
}