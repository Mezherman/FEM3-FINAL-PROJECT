import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import useStyles from './_product-list';

import ProductCard from '../Product-card/product-card';
import getAllProducts, { getProductsByCategory } from '../../services/getProducts';
import setProducts from '../../redux/actions/products';

function ProductList(props) {
  const { assortment, setProducts, products } = props;
  // console.log('products =', products);
  // console.log('PROPS =', props);
  const classes = useStyles();

  useEffect(() => {
    if (assortment === 'all') {
      // console.log('show all');
      getAllProducts().then((products) => {
        // console.log('All products = ', products);
        setProducts(products);
      })
    }
    getProductsByCategory(assortment)
      .then((products) => {
        // console.log('PRODUCTS in useEffect = ', products);
        setProducts(products);
      })
  }, [assortment, setProducts]);

  // console.log('data = ', products);
  return (
    <div className={classes.productList}>
      {products.map((product, index) => (
        <Grid item md={6} lg={4} key={product._id}>
          <ProductCard

            product={product}

          />
        </Grid>
      ))}
    </div>
  )
}

function mapStateToProps(state) {
  return state.productsReducer
}

function mapDispatchToProps(dispatch) {
  return {
    setProducts: (products) => dispatch(setProducts(products))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
