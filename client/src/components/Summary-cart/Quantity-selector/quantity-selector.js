import React, { useState } from 'react';
import { MenuItem, NativeSelect } from '@material-ui/core';
import propTypes from 'prop-types';
import useStyles from './_quantity-selector';

export default function QuantitySelector ({ productQuantity, productId, onSetProductQuantity }) {
  console.log('productId', productId);
  const [quantity, updateQuantity] = useState(productQuantity);
  const createListItems = () => {
    const items = [];
    for (let i = 1; i <= 100; i++) {
      items.push(<option value={i}>{i}</option>);
    }
    return items;
  }

  const handleChange = quantity => event => {
    const value = event.target.value;
    onSetProductQuantity(productId, value);
    updateQuantity(value);
  }

  return (
    <NativeSelect
      value={quantity}
      onChange={
        handleChange('quantity')
      }
      inputProps={{
        name: 'quantity',
        id: 'name-native-disabled',
      }}
    >
      {createListItems()}
    </NativeSelect>
  )
}

QuantitySelector.propTypes = {
  productQuantity: propTypes.number,
};

QuantitySelector.defaultProps = {
  productQuantity: 1,
}