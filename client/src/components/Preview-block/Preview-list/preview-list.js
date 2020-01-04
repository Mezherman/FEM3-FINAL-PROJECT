import React from 'react';
import { Divider } from '@material-ui/core';
import PropTypes from 'prop-types';
import useStyles from './_preview-list';

export default function PreviewList(props) {
  const classes = useStyles();
  const { products } = props;


  return (
    <div className={classes.products}>
      {products.map((product) => (
        <div className={classes.product} key={product.art}>
          <img src={product.url} className={classes.image} alt="products" />
          <Divider />
          <p className={classes.title}>{product.title}</p>
          <p className={classes.price}>
            €
            {product.price}
          </p>
          <Divider />
          <span className={classes.button}>Remove</span>
        </div>
      ))}
    </div>
  )
}

PreviewList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
};

PreviewList.defaultProps = {
  products: []
};