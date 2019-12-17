import React, { Component } from 'react';
import ProductCard from '../Product-card/product-card';

class ProductList extends Component{
  constructor(props) {
    super(props);
      this.state = {
      products: []
    }
}
componentDidMount() {
  fetch('./items.json')
    .then(response => response.json())
    .then(data => this.setState( {
      products: data.products
    }))
  }
render () {
  const { products } = this.state;
  return (
    <div className= "product-list">
      { products.map((product, index) => (
        <React.Fragment>
        <ProductCard
         key = {item + index}/>
        />
        </React.Fragment>
        )
      )
      }
    </div>
    )
  }
}

export default ProductList;