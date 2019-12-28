import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import getAllCards from '../../services/dataBase';
import Container from '@material-ui/core/Container';

import './сarousel.scss';
import Button from '@material-ui/core/Button';

export default class Carousels extends Component {

  state = {
    // products: [],
    slideIndex: 0
  };

  componentDidMount () {
    getAllCards()
      .then((data) => this.setState({
        products: data.products
      }))
  }

  render () {
    // const { products } = this.state;
    const { autoPlay, autoplayInterval, wrapAround, slidesToShow, text = false, isProductSlider = true, productsList = [], transitionMode, pauseOnHover } = this.props;

    if (isProductSlider === false) {
      return (
        <Carousel
          autoplay={false}
          autoplayInterval={autoplayInterval}
          wrapAround={wrapAround}
          slidesToShow={slidesToShow}
          className='main-carousel'
          slideIndex={this.state.slideIndex}
          afterSlide={slideIndex => this.setState({ slideIndex })}
          renderCenterLeftControls={({ previousSlide }) => (
            <div className="arrow-prev" onClick={previousSlide}>
              <div className="arrow-prev-top"/>
              <div className="arrow-prev-bottom"/>
            </div>
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <div className="arrow-next" onClick={nextSlide}>
              <div className="arrow-next-top"/>
              <div className="arrow-next-bottom"/>
            </div>
          )}
          renderBottomCenterControls={({ currentSlide, goToSlide, slideCount, slidesToScroll, cellAlign }) => {
            function getDotIndexes (slideCount, slidesToScroll, slidesToShow, cellAlign) {
              let dotIndexes = [];
              let lastDotIndex = slideCount - slidesToShow;

              switch (cellAlign) {
                case 'center':
                case 'right':
                  lastDotIndex += slidesToShow - 1;
                  break;
              }

              if (lastDotIndex < 0) {
                return [0];
              }

              for (let i = 0; i < lastDotIndex; i += slidesToScroll) {
                dotIndexes.push(i);
              }

              dotIndexes.push(lastDotIndex);
              return dotIndexes;
            }

            let indexes = getDotIndexes(slideCount, slidesToScroll, slidesToShow, cellAlign);
            return React.createElement('ul', '', indexes.map(function (index) {
              return React.createElement('li', {
                key: index,
                className: currentSlide === index ? 'paging-item active' : 'paging-item'
              }, React.createElement('button', {
                type: 'button',
                onClick: goToSlide.bind(null, index),
                'aria-label': 'slide '.concat(index + 1, ' bullet')
              }, index + 1));
            }));
          }
          }
        >
          <div>
            <img
              src='https://www.wmf.com/media/flexslider/Teaser_1170x570px_WMF_Dish_ohneText-b_hne.jpg'
              alt="Product"
              className='image-carousel'
            />
            <p> {text ? <h1>Hello</h1> : null} </p>
            <h1 className="product-card-title">Hello</h1>
          </div>
          <div>
            <img
              src='https://www.wmf.com/media/flexslider/Teaser_1170x570px_WMF_Dish_ohneText-b_hne.jpg'
              alt="Product"
              className='image-carousel'
            />
            <p> {text ? <h1>Hello</h1> : null} </p>
            <h1 className="product-card-title">Hi</h1>
          </div>
          <div>
            <img
              src='https://www.wmf.com/media/flexslider/Teaser_1170x570px_WMF_Dish_ohneText-b_hne.jpg'
              alt="Product"
              className='image-carousel'
            />
            <p> {text ? <h1>Hello</h1> : null} </p>
            <h1 className="product-card-title">Hey</h1>
          </div>
        </Carousel>
      );
    } else {
      return (
        <Carousel
          autoplay={autoPlay}
          autoplayInterval={autoplayInterval}
          wrapAround={wrapAround}
          key="products"
          slidesToShow={slidesToShow}
          transitionMode={transitionMode}
          pauseOnHover={pauseOnHover}
          slideIndex={this.state.slideIndex}
          afterSlide={slideIndex => this.setState({ slideIndex })}
          renderCenterLeftControls={({ previousSlide }) => (
            <div className="arrow-prev" onClick={previousSlide}>
              <div className="arrow-prev-top"/>
              <div className="arrow-prev-bottom"/>
            </div>
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <div className="arrow-next" onClick={nextSlide}>
              <div className="arrow-next-top"/>
              <div className="arrow-next-bottom"/>
            </div>
          )}
        >
          {productsList.map(
            function (product) {
              return (
                <Container maxWidth="sm" key={product.art}>
                  <div className="product-card-image">
                    <img src={product.url} alt="Product"/>
                    <p>{text ? <h1>Hello</h1> : null}</p>
                  </div>
                  <h1 className="product-card-title">{product.title}</h1>
                </Container>
              )
            }
          )}
        </Carousel>
      );
    }
  }
}
