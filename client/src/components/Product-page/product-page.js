import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getAllCards from '../../services/dataBase';
import ProductCard from '../Product-card/product-card';
import ProductDetail from '../Product-detail/product-detail';

class ProductPage extends Component {
  state = {
    products: []
  };

  componentDidMount() {
    getAllCards()
      .then((data) => {
        this.setState({
          products: data.products
        })
      })
  }

  render () {
    const { products } = this.state;
    const { itemUrl } = this.props;
    const filteredProduct = products.filter((product) => itemUrl.indexOf(product.id) !== -1)
    return (
      <div className="product-essential">

        { filteredProduct.map((product) => (
          <>
            <ProductDetail
              id={product.id}
              key={product.art}
              url={product.url}
              price={product.price}
              specialPrice={product.specialPrice}
              title={product.title}
            />
            <ProductCard
              id={product.id}
              key={product.id}
              url={product.url}
              price={product.price}
              specialPrice={product.specialPrice}
              title={product.title}
            />
          </>
        ))}
      </div>
    )
  }
}
ProductPage.propTypes = {
  itemUrl: PropTypes.string.isRequired,
};
export default ProductPage;
