import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import ProductCard from '../Product-card/product-card';
import { filterIncreasePage } from '../../redux/actions/filter';
import Spinner from '../Spinner/spinner';

import useStyles from './_product-list';

export default function ProductList(props) {
  const { productsResult: { products = [], productsQuantity = 0 } } = props;
  const classes = useStyles();
  const dispatch = useDispatch();
  const loadMoreProducts = useCallback(() => {
    setTimeout(() => {
      dispatch(filterIncreasePage());
    }, 2000);
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
      dataLength={products.length}
      next={loadMoreProducts}
      hasMore={productsQuantity > products.length}
      loader={<Spinner />}
      className={classes.productList}
    >
      {renderProducts(products)}
    </InfiniteScroll>
  )
}

ProductList.propTypes = {
  productsResult: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.number
  ])).isRequired
}