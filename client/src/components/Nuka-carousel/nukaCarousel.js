import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import Container from '@material-ui/core/Container';
import getAllCards from '../../services/dataBase';
// import 'client/src/components/Nuka-carousel/nukaCarousel.scss';

import './mainCarousel.scss';

export default class Carousels extends Component {
  state = {
    products: []
  };

  componentDidMount() {
    getAllCards()
      .then((data) => this.setState({
        products: data.products
      }))
  }

  render() {
    const { products } = this.state;
    const { autoPlay, autoplayInterval, wrapAround, slideIndex, slidesToShow, text = false, isProductSlider = true, ...img } = this.props;

    // console.log(document.documentElement.clientWidth);
    if (document.documentElement.clientWidth < 400 && isProductSlider) {
      return null
    }
    if (isProductSlider === false) {
      return (
        <Carousel
          autoplay={false}
          autoplayInterval={autoplayInterval}
          wrapAround={wrapAround}
          slideIndex={slideIndex}
          slidesToShow={slidesToShow}
          className="main-carousel"
        >
          <div>
            <img
              src="https://www.wmf.com/media/flexslider/Teaser_1170x570px_WMF_Dish_ohneText-b_hne.jpg"
              alt="Product"
              className="image-carousel"
            />
            <p>
              {' '}
              {text ? <h1>Hello</h1> : null}
              {' '}
            </p>
            <h1 className="product-card-title">Hello</h1>
          </div>
          <div>
            <img
              src="https://www.wmf.com/media/flexslider/Teaser_1170x570px_WMF_Dish_ohneText-b_hne.jpg"
              alt="Product"
              className="image-carousel"
            />
            <p>
              {' '}
              {text ? <h1>Hello</h1> : null}
              {' '}
            </p>
            <h1 className="product-card-title">Hi</h1>
          </div>
          <div>
            <img
              src="https://www.wmf.com/media/flexslider/Teaser_1170x570px_WMF_Dish_ohneText-b_hne.jpg"
              alt="Product"
              className="image-carousel"
            />
            <p>
              {' '}
              {text ? <h1>Hello</h1> : null}
              {' '}
            </p>
            <h1 className="product-card-title">Hey</h1>
          </div>
        </Carousel>
      );
    }
    return (
      <Carousel
        autoplay={autoPlay}
        autoplayInterval={autoplayInterval}
        wrapAround={wrapAround}
        slideIndex={slideIndex}
        slidesToShow={slidesToShow}
      >
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <Container maxWidth="sm">
              <div className="product-card-image">
                <img src={product.url} alt="Product" />
                <p>{text ? <h1>Hello</h1> : null}</p>
              </div>
              <h1 className="product-card-title">{product.title}</h1>
            </Container>
          </div>
        ))}
      </Carousel>
    );
  }
}
