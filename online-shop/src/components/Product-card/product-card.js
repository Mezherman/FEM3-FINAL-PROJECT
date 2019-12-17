import React, { Component } from 'react';

import Button from '@material-ui/core/Button';

const ProductCard = ( {products} ) => {
 return (
  <React.Fragment>
    <div className="image">
      <img src={url}/>
      <h1>{title}</h1>
      <span>{price}</span>
      <Button />
    </div>
  </React.Fragment>
 )
}

export default ProductCard;
