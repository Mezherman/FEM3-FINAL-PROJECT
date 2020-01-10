import React from 'react';
import { Divider } from '@material-ui/core';
import PropTypes from 'prop-types';
import useStyles2 from './_preview-list';

export default function PreviewList(props) {
  const classes = useStyles2();
  const { products } = props;

  return (
    <>
      {products.map((product) => (
        <div className={classes.test} key={product.art}>
          <img src={product.imageUrls[0]} className={classes.image} alt="products" />
          <Divider />
          <div className={classes.text}>
            <p className={classes.title}>{product.name}</p>
            <p className={classes.price}>
              €
              {product.specialPrice ? product.specialPrice : product.currentPrice}
            </p>
            <Divider />
            <p className={classes.button}>Remove</p>
          </div>
        </div>
      ))}
    </>
  )
}

PreviewList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
};

PreviewList.defaultProps = {
  products: []
};