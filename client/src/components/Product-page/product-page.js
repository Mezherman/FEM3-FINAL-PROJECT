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

function ProductPage(props) {
  // console.log('PROPS =', props);
  const { assortment, itemNo, chosenProduct, fetchProduct, productsLoading, setProducts } = props;
  const [productsToShow, setProductsToShow] = useState([]);
  const cardsToShow = ['896520', '896520', '896520', '896520', '896520', '217355'];
  // thermos
  // const cardsToShow = ['896520', '502739', '73816', '551930', '665912', '217355'];

  // frying-pans
  // const cardsToShow = ['369068', '394952', '873606', '314952', '588176', '547742'];

  // pots
  // const cardsToShow = ['239365', '579193', '82131', '512557', '293933', '792636'];

  // steamers
  // const cardsToShow = ['424953', '845357', '324156', '263657', '828323', '454682'];

  // salad servers
  // const cardsToShow = ['963240', '940745', '801864', '200428', '469025', '892663'];

  // cutlery sets
  // const cardsToShow = ['591935', '383254', '633043', '260056', '809408', '429137'];

  // glasses
  // const cardsToShow = ['120024', '648384', '281039', '672012', '49872', '642381'];

  // knives
  // const cardsToShow = ['588994', '122522', '117494', '44543', '483853', '457505'];

  // kitchen gadgets
  // const cardsToShow = ['344238', '730715', '979847', '971118', '937631', '597400'];

  // preparing
  // const cardsToShow = ['344238', '122522', '979847', '971118', '44543', '457505'];

  // cooking
  // const cardsToShow = ['344238', '730715', '979847', '971118', '937631', '597400'];

  // drinking
  // const cardsToShow = ['120024', '281039', '979847', '672012', '73816', '217355'];

  // dining
  // const cardsToShow = ['383254', '200428', '896520', '591935', '801864', '892663'];

  // HOME
  // const cardsToShow = ['342511', '142956', '740039', '29100'];

  const cardsToShowString = cardsToShow.toString();
  // console.log(cardsToShowString);
  useEffect(() => {
    if (!chosenProduct) {
      fetchProduct(itemNo);
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
      {productsLoading
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

  // console.log('chosen prod MSTP =', chosenProduct);
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
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);

ProductPage.propTypes = {
  itemUrl: PropTypes.string.isRequired,
};
