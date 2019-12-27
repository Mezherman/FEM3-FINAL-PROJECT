import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import getAllCards from '../../services/dataBase';
import Container from '@material-ui/core/Container';

import './сarousel.scss';
import Button from '@material-ui/core/Button';

export default class Carousels extends Component {

  state = {
    products: [],
    slideIndex: 0
  };

  componentDidMount () {
    getAllCards()
      .then((data) => this.setState({
        products: data.products
      }))
  }

  render () {
    const { products } = this.state;
    const { autoPlay, autoplayInterval, wrapAround, slideIndex, slidesToShow, text = false, isProductSlider = true, productsList = [], transitionMode, pauseOnHover, renderBottomCenterControls = true } = this.props;

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
      renderBottomCenterControls={() =>
        <ul>
          <li className="paging-item active">
            <button type="button" aria-label="slide 1 bullet">
              1
            </button>
          </li>
          <li className="paging-item">
            <button type="button" aria-label="slide 2 bullet">
              2
            </button>
          </li>
          <li className="paging-item">
            <button type="button" aria-label="slide 3 bullet">
              3
            </button>
          </li>
        </ul>




     // <div class="slider-control-bottomcenter" style="position: absolute; bottom: 0px; left: 50%; transform: translateX(-50%);"><ul style="position: relative; top: -10px; display: flex; margin: 0px; padding: 0px; list-style-type: none;"><li class="paging-item active"><button type="button" aria-label="slide 1 bullet" style="cursor: pointer; opacity: 1; background: transparent; border: none;"><svg class="paging-dot" width="6" height="6"><circle cx="3" cy="3" r="3" style="fill: black;"></circle></svg></button></li><li class="paging-item"><button type="button" aria-label="slide 2 bullet" style="cursor: pointer; opacity: 0.5; background: transparent; border: none;"><svg class="paging-dot" width="6" height="6"><circle cx="3" cy="3" r="3" style="fill: black;"></circle></svg></button></li><li class="paging-item"><button type="button" aria-label="slide 3 bullet" style="cursor: pointer; opacity: 0.5; background: transparent; border: none;"><svg class="paging-dot" width="6" height="6"><circle cx="3" cy="3" r="3" style="fill: black;"></circle></svg></button></li><li class="paging-item"><button type="button" aria-label="slide 4 bullet" style="cursor: pointer; opacity: 0.5; background: transparent; border: none;"><svg class="paging-dot" width="6" height="6"><circle cx="3" cy="3" r="3" style="fill: black;"></circle></svg></button></li><li class="paging-item"><button type="button" aria-label="slide 5 bullet" style="cursor: pointer; opacity: 0.5; background: transparent; border: none;"><svg class="paging-dot" width="6" height="6"><circle cx="3" cy="3" r="3" style="fill: black;"></circle></svg></button></li><li class="paging-item"><button type="button" aria-label="slide 6 bullet" style="cursor: pointer; opacity: 0.5; background: transparent; border: none;"><svg class="paging-dot" width="6" height="6"><circle cx="3" cy="3" r="3" style="fill: black;"></circle></svg></button></li></ul></div>
     //
     //
     //
     //
     //
     //
     //
     // <div className='main-pagin-items slider-control-bottomcenter'>
     //    <ul>
     //      <li className="paging-item" aria-label="slide 1 bullet">
     //        <button aria-label="slide 1 bullet">1</button>
     //      </li>
     //      <li className="paging-item" aria-label="slide 2 bullet">
     //        <button aria-label="slide 2 bullet">2</button>
     //      </li>
     //      <li className="paging-item" aria-label="slide 3 bullet">
     //        <button aria-label="slide 3 bullet">3</button>
     //      </li></ul>
     //  </div>
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
          // renderBottomCenterControls={}
          renderTopCenterControls={({ currentSlide }) => (
            console.log(products[currentSlide])
          )}
          renderCenterLeftControls={({ previousSlide }) => (
            < div className="arrow-prev" onClick={previousSlide}>
              <div className="arrow-prev-top"/>
              <div className="arrow-prev-bottom"/>
            </div>
          )}
          renderCenterRightControls={({ nextSlide }) => (
            < div className="arrow-next" onClick={nextSlide}>
              <div className="arrow-next-top"/>
              <div className="arrow-next-bottom"/>
            </div>
          )}
        >
          {products.map(
            function (product, index) {
              const li = document.documentElement.getElementsByClassName('paging-item');
              console.log(li);
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
            //   (product) => (
            //   <Container maxWidth="sm" key={product.art}>
            //     <div className="product-card-image">
            //       <img  src={product.url} alt="Product"/>
            //       <p>{text ? <h1>Hello</h1> : null}</p>
            //     </div>
            //     <h1 className="product-card-title">{product.title}</h1>
            //   </Container>
            // )
          )}
        </Carousel>
      );
    }
  }
}
