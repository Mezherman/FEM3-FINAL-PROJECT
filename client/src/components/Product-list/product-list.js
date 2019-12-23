import React, { Component } from 'react';
import ProductCard from '../Product-card/product-card';
import getAllCards from '../../services/dataBase';
import './product-list.scss'

class ProductList extends Component {
    state = {
      products: []
    }

    componentDidMount() {
      console.log(getAllCards);
      getAllCards()
        .then((data) => this.setState({
          products: data.products
        }))
    }

    render () {
      const { products } = this.state;
      console.log(products);
      return (
        <div className="product-list">
          { products.map((product, index) => (
            <ProductCard url={product.url} price={product.price} title={product.title} />

          ))}
        </div>
      )
    }
}

export default ProductList;