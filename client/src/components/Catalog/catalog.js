import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import ContainerFilter from '../Filter/filter';
import ProductList from '../Product-list/product-list';
import ProductBreadcrumbs from '../Breadcrumbs/breadcrumbs';

import useStyles from './catalog-style';

function Catalog({ assortment }) {
  const classes = useStyles();

  return (
    <>
      <ProductBreadcrumbs assortment={assortment} />
      <Grid container spacing={2} className={classes.root}>
        <Grid item sm={12} md={4}>
          <div className={classes.filter}>
            <ContainerFilter />
          </div>
        </Grid>
        <Grid item sm={12} md={8}>
          <ProductList assortment={assortment} />
        </Grid>
      </Grid>
    </>
  )
}

const mapStateToProps = (state) => ({
  catalog: state.categoriesReducer.catalog
});

export default connect(mapStateToProps)(Catalog)

Catalog.propTypes = {
  assortment: PropTypes.string.isRequired
};
