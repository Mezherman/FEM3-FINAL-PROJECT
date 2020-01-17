import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { getProductsByItemNo } from '../../services/getProducts';
import ProductDetail from '../Product-detail/product-detail';
import setProducts from '../../redux/actions/products';

function ProductPage(props) {
  // console.log('PROPS IN PrPage =', props);
  const { itemUrl, itemNo, chosenProduct, setProducts } = props;
  // console.log('itemNo =', itemNo);
  console.log('chosenProduct =', chosenProduct);
  // console.log('!chosenProduct =', !chosenProduct);
  useEffect(() => {
    if (!chosenProduct) {
      getProductsByItemNo(itemNo)
        .then((response) => {
          // console.log('resp =', [response.data]);
          setProducts([response.data]);
        })
    }
  }, []);

  return (
    <>
      {chosenProduct && (
        <div className="product-essential">
          <Grid key={chosenProduct.itemNo}>
            <ProductDetail
              product={chosenProduct}
            />
          </Grid>
        </div>
      )}
    </>
  )
}

function mapStateToProps(state, { itemNo }) {
  // console.log('STATE in STORE=', state);
  const chosenProduct = state.productsReducer.products.filter((product) => (
    product.itemNo === itemNo
  ));
  // console.log('PRODUCT =', chosenProduct[0]);
  return {
    chosenProduct: chosenProduct[0]
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setProducts: (products) => dispatch(setProducts(products))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);

ProductPage.propTypes = {
  itemUrl: PropTypes.string.isRequired,
};
