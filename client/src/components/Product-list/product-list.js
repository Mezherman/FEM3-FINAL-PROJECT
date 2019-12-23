import React, { Component } from 'react';
import ProductCard from '../Product-card/product-card';
import getAllCards from '../../services/dataBase';
import './product-list.scss'

class ProductList extends Component {
    state = {
      products: []
    }

    componentDidMount() {
      getAllCards()
        .then((data) => this.setState({
          products: data.products
        }))
    }

    render () {
      const { products } = this.state;
      return (
        <div className="product-list">
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

export default ProductList;