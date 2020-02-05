import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';

import ProductCard from '../Product-card/product-card';
import Spinner from '../Spinner/spinner';
import Sorting from '../Sorting/sorting';

import useStyles from './_product-list';

function ProductList(props) {
  const { assortment, products, productsLoading } = props;
  const classes = useStyles();
  const renderProducts = (productsList) => (
    productsList.map((product) => (
      <Grid item md={6} lg={4} key={product.itemNo}>
        <ProductCard
          product={product}
        />
      </Grid>
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

const mapStateToProps = (state) => ({
  products: state.productsReducer.products,
  sorting: state.productsReducer.sorting
});

export default connect(mapStateToProps)(ProductList)

ProductList.propTypes = {
  assortment: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  productsLoading: PropTypes.bool.isRequired,
  fetchProducts: PropTypes.func.isRequired,
};
