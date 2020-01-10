import React from 'react';
import CategoryList from '../Category-list/category-list';

import Carousels from '../Carousel/carousel';
import PagingDots from '../Carousel/pagingDots';
import useStylesCarousel from '../Carousel/_carousel';

export default function Home() {
  const classes = useStylesCarousel();
  return (
    <>
      <Carousels
        isProductSlider={false}
        autoPlay={false}
        className={classes.mainCarousel}
        // className="main-carousel"
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
          }) => (
            // eslint-disable-next-line no-console
            <PagingDots currentSlide={currentSlide} goToSlide={goToSlide} slideCount={slideCount} slidesToScroll={slidesToScroll} slidesToShow={slidesToShow} cellAlign={cellAlign} classItemsActive="paging-item active" classItems="paging-item" containerID="" />
          )
        }
      >
        <img
          src="https://www.wmf.com/media/flexslider/Teaser_1170x570px_WMF_Dish_ohneText-b_hne.jpg"
          alt="Product"
          className="image-carousel image-carousel-1"
        />
        <img
          src="https://www.wmf.com/media/flexslider/impulse-buehne.jpg"
          alt="Product"
          className="image-carousel image-carousel-2"
        />
        <img
          src="https://www.wmf.com/media/flexslider/ProfessionalCoffeeMachines_Slider_1170x500_1.jpg"
          alt="Product"
          className="image-carousel image-carousel-3"
        />
      </Carousels>
      <CategoryList />
      <Carousels
        autoPlay
        autoplayInterval={2000}
        wrapAround
        slideIndex={0}
        slidesToShow={1}
      />
    </>
  );
}
