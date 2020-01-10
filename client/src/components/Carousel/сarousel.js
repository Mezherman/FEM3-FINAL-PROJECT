import React, { useState } from 'react';
import Carousel from 'nuka-carousel';
import Container from '@material-ui/core/Container';

import './сarousel.scss';

/**
 * @return {null}
 */
export default function Carousels(props) {
  const [slideIndex, setSlideIndex] = useState(0);

  const { autoPlay, autoplayInterval, wrapAround, slidesToShow, transitionMode = 'fade', text = false, isProductSlider = true, products = [] } = props;

  if (isProductSlider) {
    return (
      <Carousel
        autoplay={autoPlay}
        autoplayInterval={autoplayInterval}
        wrapAround={wrapAround}
        afterSlide={slideIndex => setSlideIndex({ slideIndex })}
        transitionMode={transitionMode}
        slidesToShow={slidesToShow}
        renderCenterLeftControls={({ previousSlide }) => (
          <div className="arrow-prev" onClick={previousSlide}>
            <div className="arrow-prev-top" />
            <div className="arrow-prev-bottom" />
          </div>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <div className="arrow-next" onClick={nextSlide}>
            <div className="arrow-next-top" />
            <div className="arrow-next-bottom" />
          </div>
        )}
      >
        {products.map((product) => (
          <Container maxWidth="sm">
            <div className="product-card-image">
              <img src={product.url} alt="Product" />
            </div>
            <h1 className="product-card-title">{product.title}</h1>
          </Container>
        ))}
      </Carousel>
    );
  } else {
    return (
      <Carousel
        autoplay={false}
        autoplayInterval={autoplayInterval}
        wrapAround={wrapAround}
        transitionMode={transitionMode}
        slidesToShow={slidesToShow}
        className='main-carousel'
        afterSlide={slideIndex => setSlideIndex({ slideIndex })}
        renderCenterLeftControls={({ previousSlide }) => (
          <div className="arrow-prev" onClick={previousSlide}>
            <div className="arrow-prev-top" />
            <div className="arrow-prev-bottom" />
          </div>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <div className="arrow-next" onClick={nextSlide}>
            <div className="arrow-next-top" />
            <div className="arrow-next-bottom" />
          </div>
        )}
        renderBottomCenterControls={({ currentSlide, goToSlide, slideCount, slidesToScroll, cellAlign }) => {
          function getDotIndexes(slideCount, slidesToScroll, slidesToShow, cellAlign) {
            let dotIndexes = [];
            let lastDotIndex = slideCount - slidesToShow;

            switch (cellAlign) {
              case 'center':
              case 'right':
                lastDotIndex += slidesToShow - 1;
                break;
              default:
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
          return (
            <ul>
              {indexes.map(function (index) {
                return (
                  <li key={index}
                      className={currentSlide === index ? 'paging-item active' : 'paging-item'}>
                    <button type='button' onClick={goToSlide.bind(null, index)}
                            aria-label={'slide '.concat(index + 1, ' bullet')}>{index + 1}</button>
                  </li>
                )
              })}
            </ul>
          )
        }
        }
      >
        <div>
          <img
            src='https://www.wmf.com/media/flexslider/Teaser_1170x570px_WMF_Dish_ohneText-b_hne.jpg'
            alt="Product"
            className='image-carousel image-carousel-1'
          />
          {text ? <p> Hello </p> : null}
        </div>
        <div>
          <img
            src='https://www.wmf.com/media/flexslider/impulse-buehne.jpg'
            alt="Product"
            className='image-carousel image-carousel-2'
          />
          {text ? <p> Hello </p> : null}
        </div>
        <div>
          <img
            src='https://www.wmf.com/media/flexslider/ProfessionalCoffeeMachines_Slider_1170x500_1.jpg'
            alt="Product"
            className='image-carousel image-carousel-3'
          />
          {text ? <p> Hello </p> : null}
        </div>
      </Carousel>
    );
  }
}
