import React from 'react';
import { Container, makeStyles } from '@material-ui/core';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'typeface-roboto';

import Header from './components/Header/header'
import CategoryList from './components/Category-list/category-list'
import Footer from './components/Footer/footer'
import Carousels from './components/Сarousel/сarousel';
import Catalog from './components/Catalog/catalog';
import ProductPage from './components/Product-page/product-page';
import ScrollTop, { ScrollToAnchor } from './components/Scroll-top/scroll-top';
import PagingDots from './components/Сarousel/pagingDots';
// import CustomizedMenus3 from './components/Autorization-block/blockOnHover3';

const useStylesCarousel = makeStyles({
  mainCarousel: {
    height: 'calc(100vh - 300px) !important',
  },

});

export default function App (props) {
  return (
    <Container>
      <Router>
        <Header />
        <ScrollToAnchor />
        <Route path="/" exact>
          <Carousels
            isProductSlider={false}
            autoPlay
            // className={useStylesCarousel.mainCarousel}
            className="main-carousel"
            autoplayInterval={2000}
            wrapAround
            slidesToShow={1}
            dragging
            renderCenterLeftControls={({ previousSlide }) => (
              // eslint-disable-next-line max-len
              // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
              <div className="arrow-prev" onClick={previousSlide}>
                <div className="arrow-prev-top" />
                <div className="arrow-prev-bottom" />
              </div>
            )}
            renderCenterRightControls={({ nextSlide }) => (
              // eslint-disable-next-line max-len
              // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
              <div className="arrow-next" onClick={nextSlide}>
                <div className="arrow-next-top" />
                <div className="arrow-next-bottom" />
              </div>
            )}
            renderBottomCenterControls={
              ({
                currentSlide, goToSlide, slideCount, slidesToScroll, slidesToShow, cellAlign
                // eslint-disable-next-line max-len
              }) => <PagingDots currentSlide={currentSlide} goToSlide={goToSlide} slideCount={slideCount} slidesToScroll={slidesToScroll} slidesToShow={slidesToShow} cellAlign={cellAlign} classItemsActive="paging-item active" classItems="paging-item" />
            }

            // renderBottomCenterControls={
            //   ({
            //     currentSlide, goToSlide, slideCount, slidesToScroll, slidesToShow, cellAlign
            //   }) => {
            //     // eslint-disable-next-line no-shadow
            //     function getDotIndexes (slideCount, slidesToScroll, slidesToShow, cellAlign) {
            //       const dotIndexes = [];
            //       let lastDotIndex = slideCount - slidesToShow;
            //
            //       switch (cellAlign) {
            //         case 'center':
            //         case 'right':
            //           lastDotIndex += slidesToShow - 1;
            //           break;
            //         default:
            //       }
            //
            //       if (lastDotIndex < 0) {
            //         return [0];
            //       }
            //
            //       for (let i = 0; i < lastDotIndex; i += slidesToScroll) {
            //         dotIndexes.push(i);
            //       }
            //
            //       dotIndexes.push(lastDotIndex);
            //       return dotIndexes;
            //     }
            //
            //     // eslint-disable-next-line no-undef
            /* eslint-disable-next-line max-len */
            //     const indexes = getDotIndexes(slideCount, slidesToScroll, slidesToShow, cellAlign);
            //     return (
            //       <ul>
            //         {indexes.map((index) => (
            //           <li
            //             key={index}
            //             className={currentSlide === index ? 'paging-item active' : 'paging-item'}
            //           >
            //             <button
            //               type="button"
            //               onClick={goToSlide.bind(null, index)}
            //               aria-label={'slide '.concat(index + 1, ' bullet')}
            //             >
            //               {index + 1}
            //             </button>
            //           </li>
            //         ))}
            //       </ul>
            //     )
            //   }
            // }
          >
            <div>
              <img
                src="https://www.wmf.com/media/flexslider/Teaser_1170x570px_WMF_Dish_ohneText-b_hne.jpg"
                alt="Product"
                className="image-carousel image-carousel-1"
              />
            </div>
            <div>
              <img
                src="https://www.wmf.com/media/flexslider/impulse-buehne.jpg"
                alt="Product"
                className="image-carousel image-carousel-2"
              />
            </div>
            <div>
              <img
                src="https://www.wmf.com/media/flexslider/ProfessionalCoffeeMachines_Slider_1170x500_1.jpg"
                alt="Product"
                className="image-carousel image-carousel-3"
              />
            </div>
          </Carousels>
        </Route>
        <Route path="/" exact>
          <CategoryList />
        </Route>
        <Route path="/products" exact component={Catalog} />
        <Route
          path="/products/:id"
          render={({ match, location }) => {
            const { id } = match.params;
            const { pathname: url } = location;
            return <ProductPage itemId={id} itemUrl={url} />
          }}
        />
      </Router>
      <Footer />
      <ScrollTop {...props} />
    </Container>
  )
}
