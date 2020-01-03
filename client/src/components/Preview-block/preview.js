import React, { Component } from 'react';
import Button from '@material-ui/core/Button'
import { Divider } from '@material-ui/core';

import getAllCards from '../../services/dataBase';
import './preview.scss'

class Preview extends Component {
  state = {
    products: []
  };

  componentDidMount() {
    getAllCards()
      .then((data) => this.setState({
        products: data.products
      }))
  }

  deleteItem(art) {
    this.setState((prevState) => {
      prevState.prototype.remove = function (value) {
        const idx = this.indexOf(value);
        if (idx !== -1) {
          return this.splice(idx, 1)
        }
        return false
      }
    })
  }

  render () {
    const { products } = this.state;
    console.log(this.state)
    return (
      <div className="show-product">
        <div className="product-list">
          { products.map((product, index) => (
            <div className="product-mini" key={product.art}>
              <img src={product.url} className="product-image" />
              <Divider />
              <p className="product-title">{product.title}</p>
              <p>
€
                {product.price}
              </p>
              <Divider />
              {/* eslint-disable-next-line react/jsx-no-undef */}
              <Button
                size="medium"
                variant="contained"
                color="primary"
                disableElevation
                onClick={(art) => this.deleteItem}
              >
                Remove
              </Button>
            </div>
          ))}
        </div>
        <div>
          <p>
            There
            {products.length > 1 ? ' are' : ' is'}
            <span className="product-items">
              {products.length}
              {products.length > 1 ? ' items' : ' item'}
            </span>
            in your cart.
          </p>
          <Divider />
          <div className="show-product-price">
            <span>Cart Subtotal</span>
            <span>300</span>
          </div>
          <Button
            size="medium"
            fullWidth
            variant="contained"
            color="secondary"
            disableElevation
            onClick={() => console.log('View shopping cart')}
          >
            View Shopping Cart
          </Button>
          <Button
            size="medium"
            fullWidth
            variant="contained"
            color="primary"
            disableElevation
            onClick={() => console.log('Chechout')}
          >
            Checkout
          </Button>
        </div>
      </div>
    )
  }
}

export default Preview;