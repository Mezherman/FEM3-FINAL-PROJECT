import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Grid, Container, useTheme, SwipeableDrawer, Button, useMediaQuery } from '@material-ui/core';

import Filter from '../Filter/filter';
import ProductList from '../Product-list/product-list';
import ProductBreadcrumbs from '../Breadcrumbs/breadcrumbs';

import useStyles from './_catalog';
import { productsError, productsLoaded, productsRequested } from '../../redux/actions/products';
import getAllProducts, { getProductsByCategory } from '../../services/getProducts';
import { getCategory } from '../../services/getCategories';
import { catalogLocation } from '../../redux/actions/categories';
import { getFilteredProducts } from '../../services/filter';
import ProductCardCarousel from '../Product-card-carousel/product-card-carousel';

function Catalog({ assortment, fetchProducts, catalogLocation }) {
  const classes = useStyles();
  const [topList, setTopList] = useState([]);
  const [productsToShow, setProductsToShow] = useState([]);

  useEffect(() => {
    getCategory(assortment)
      .then((response) => setTopList(response.topSellers))
  }, [assortment]);

  useEffect(() => {
    const cardsToShowString = topList.toString();
    getFilteredProducts(`itemNo=${cardsToShowString}`)
      .then((response) => {
        setProductsToShow(response)
      })
  }, [topList]);

  const [filterIsOpen, setFilterIsOpen] = useState(false);

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  const toggleFilter = () => {
    setFilterIsOpen((prev) => !prev);
  };

  useEffect(() => {
    // console.log(123456);
    catalogLocation(assortment);
    fetchProducts(assortment);
  }, [assortment, catalogLocation, fetchProducts]);

  return (
    <>
      <Container maxWidth="xl">
        <ProductBreadcrumbs assortment={assortment} />
        <Grid container spacing={2} className={classes.root}>
          <Grid item sm={12} md={4}>
            {isDesktop
              ? (
                <div className={classes.filterDesktop}>
                  <Filter />
                </div>
              )
              : (
                <div className={classes.filterMobile}>
                  <Button
                    onClick={toggleFilter}
                    className={classes.button}
                  >
                  Open Filter
                  </Button>

                  <SwipeableDrawer
                    anchor="bottom"
                    open={filterIsOpen}
                    onClose={toggleFilter}
                  >
                    <Filter onClose={toggleFilter} />
                  </SwipeableDrawer>
                </div>
              )}

          </Grid>
          <Grid item sm={12} md={8}>
            <ProductList assortment={assortment} />
          </Grid>
          <Grid item sm={12}>
            <ProductCardCarousel
              products={productsToShow}
              label="most popular products"
            />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

const mapStateToProps = (state) => ({
  catalog: state.categoriesReducer.catalog,
  fetchProducts: state.productsReducer.fetchProducts
});

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: (assortment) => {
    dispatch(productsRequested());
    if (assortment === 'all') {
      getAllProducts()
        .then((products) => dispatch(productsLoaded(products)))
        .catch((err) => dispatch(productsError(err)));
    } else {
      getProductsByCategory(assortment)
        .then((products) => {
          dispatch(productsLoaded(products));
        })
    }
  },
  catalogLocation: (assortment) => dispatch(catalogLocation(assortment)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Catalog)

Catalog.propTypes = {
  assortment: PropTypes.string.isRequired
};
