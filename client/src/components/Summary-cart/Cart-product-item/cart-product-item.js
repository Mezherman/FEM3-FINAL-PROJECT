import React from 'react';
import { connect } from 'react-redux';
import QuantitySelector from '../Quantity-selector/quantity-selector';
import { setProductQuantity } from '../../../redux/actions/CartActions';

function CartProductItem({ product, setProductQuantity }){
  const { product: currentProduct, productQuantity } = product
  return (
    <div>
      <td>
        <img src={currentProduct.imageUrls ? currentProduct.imageUrls[0] : ''} alt={currentProduct.name ?? ''}/>
      </td>
      <td>
        <h4>{currentProduct.name}</h4>
        <p>Item-Nr. : {currentProduct.itemNo}</p>
      </td>
      <td>
        <p>€{currentProduct.currentPrice}</p>
      </td>
      <td>
        <QuantitySelector productId={currentProduct.id} onSetProductQuantity={setProductQuantity} productQuantity={productQuantity}/>
      </td>

    </div>

  );
}

function mapStateToProps () {
  return {

  };
}

function mapDispatchToProps (dispatch) {
  return {
    setProductQuantity: (productId, quantity) => {
      dispatch(setProductQuantity(productId, quantity))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartProductItem);