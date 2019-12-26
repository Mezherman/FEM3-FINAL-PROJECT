import React, { Component } from 'react';
import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import getAllCards from '../../services/dataBase';
import ProductCard from '../Product-card/product-card';
import getProductData from '../../services/getProductData';

class ProductPage extends Component {
  state = {
    products: []

  };

  componentDidMount() {
    getProductData()
      .then((data) => this.setState({
        products: data
      }))
  }

  render () {
    const { products } = this.state;
    console.log(products);
    return (
      <div className="product-essential">
        { products.map((product, index) => (
          <ProductCard
            key={product.art}
            url={product.url}
            price={product.price}
            specialPrice={product.specialPrice}
            title={product.title}
          />
        ))}
      </div>
    )
  }
}

export default ProductPage;
