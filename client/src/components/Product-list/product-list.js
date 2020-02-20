import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import { fadeIn } from 'react-animations';
import ProductCard from '../Product-card/product-card';
import { filterIncreasePage } from '../../redux/actions/filter';
import Spinner from '../Spinner/spinner';

import useStyles from './_product-list';

const ProductList = React.memo(({ products = [], productsQuantity = 0 }) => {
  const fadeAnimation = keyframes`${fadeIn}`;
  const AnimationCard = styled.div`
  animation: 2s ${fadeAnimation};
`;
  const classes = useStyles();
  const dispatch = useDispatch();
  const loadMoreProducts = useCallback(() => {
    setTimeout(() => {
      dispatch(filterIncreasePage());
    }, 2500);
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
});

export default ProductList;

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.number,
  ])).isRequired,
  productsQuantity: PropTypes.number.isRequired,
};