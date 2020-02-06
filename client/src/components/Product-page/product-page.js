import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { Container, Box } from '@material-ui/core';
import { getProductsByItemNo } from '../../services/getProducts';
import ProductDetail from '../Product-detail/product-detail';
import { productsRequested, productsLoaded } from '../../redux/actions/products';
import ProductCardCarousel from '../Product-card-carousel/product-card-carousel';

import Spinner from '../Spinner/spinner';
import ProductBreadcrumbs from '../Breadcrumbs/breadcrumbs';
import { getFilteredProducts } from '../../services/filter';
import getCurrentProduct from '../../redux/actions/currentProduct';

function ProductPage(props) {
  // console.log('PROPS =', props);
  const { assortment, itemNo, chosenProduct, fetchProduct, productsLoading, getChosenProduct } = props;

  console.log('chosenProduct =', chosenProduct);

  const [productsToShow, setProductsToShow] = useState([]);
  const cardsToShow = ['896520', '896520', '896520', '896520', '896520', '217355'];

  const cardsToShowString = cardsToShow.toString();
  // console.log(cardsToShowString);
  useEffect(() => {
    if (!chosenProduct) {
      fetchProduct(itemNo);
    } else {
      getChosenProduct(chosenProduct);
    }
  }, [chosenProduct, itemNo, fetchProduct]);

  useEffect(() => {
    getFilteredProducts(`itemNo=${cardsToShowString}`)
      .then((response) => {
        // console.log('resp', response);
        setProductsToShow(response)
      })
  }, [cardsToShowString]);
  // console.log('products slider', productsToShow);
  return (
    <>
      {!chosenProduct
        ? <Spinner />
        : (
          <>
            <Container maxWidth="xl">
              <ProductBreadcrumbs assortment={assortment} />
              <div className="product-essential">
                <Grid key={chosenProduct.itemNo}>
                  <ProductDetail
                    product={chosenProduct}
                  />
                </Grid>
              </div>
              <ProductCardCarousel products={productsToShow} />
            </Container>
          </>
        )}
    </>
  )
}

const mapStateToProps = (state, { itemNo }) => {
  // console.log('STATE =', state);
  const chosenProduct = state.productsReducer.products.find((product) => (
    product.itemNo === itemNo
  ));

  return {
    chosenProduct,
    productsLoading: state.productsReducer.productsLoading
  }
};

const mapDispatchToProps = (dispatch) => ({
  fetchProduct: (itemNo) => {
    dispatch(productsRequested());
    getProductsByItemNo(itemNo)
      .then((response) => {
        dispatch(productsLoaded([response.data]));
      })
  },
  getChosenProduct: (product) => dispatch(getCurrentProduct(product))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);

ProductPage.propTypes = {
  itemUrl: PropTypes.string.isRequired,
};
