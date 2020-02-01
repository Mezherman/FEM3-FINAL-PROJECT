import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Carousels from '../Carousel/carousel';
import PagingDots from '../Carousel/pagingDots';
import useStylesCarousel from '../Carousel/_carousel';
import useStylesMainCarousel from './_mainCarousel';
import getMainSlides from '../../services/getMainSlides';
import slidesToFetch from '../../redux/actions/slides';

axios.defaults.baseURL = 'http://localhost:5000';

function MainSlider ({ fetchSlides }) {
  const { mainSlides } = useSelector((state) => state.slides);

  const classes = useStylesCarousel();
  const mainCarouselClasses = useStylesMainCarousel();

  useEffect(() => {
    if (mainSlides.length < 1) {
      getMainSlides()
        .then((response) => fetchSlides(response.data))
    }
  }
  , [fetchSlides, mainSlides.length]);

  return (
    <div className={classes.carouselContainer}>
      <Carousels
        isProductSlider={false}
        autoPlay
        // className={mainCarouselClasses.mainCarousel}
        autoplayInterval={2000}
        wrapAround
        slidesToShow={1}
        dragging
        // renderCenterLeftControls={({ previousSlide }) => (
        //   {/*<div*/}
        //   {/*  className={`${mainCarouselClasses.mainArrowsControl} ${mainCarouselClasses.mainArrowPrev}`}*/}
        //   {/*  onClick={previousSlide}*/}
        //   {/*>*/}
        //   {/*  <div*/}
        //   {/*    className={`${classes.arrowPrevTopBottom} ${mainCarouselClasses.mainArrowPrevTop}`}*/}
        //   {/*  />*/}
        //   {/*  <div className={`${classes.arrowPrevTopBottom} ${classes.arrowsTopBottom}`} />*/}
        //   {/*</div>*/}
        // )}
        // renderCenterRightControls={({ nextSlide }) => (
        //   {/*<div className={`${mainCarouselClasses.mainArrowsControl} ${mainCarouselClasses.mainArrowNext}`} onClick={nextSlide}>*/}
        //   {/*  <div className={`${classes.arrowNextTop} ${classes.arrowNextTopBottom}`} />*/}
        //   {/*  <div className={`${classes.arrowNextBottom} ${classes.arrowNextTopBottom}`} />*/}
        //   {/*</div>*/}
        // )}
        renderBottomCenterControls={
          ({
            currentSlide, goToSlide, slideCount, slidesToScroll, slidesToShow, cellAlign
            // eslint-disable-next-line max-len
          }) => (
            // eslint-disable-next-line no-console,max-len
            <PagingDots
              currentSlide={currentSlide}
              goToSlide={goToSlide}
              slideCount={slideCount}
              slidesToScroll={slidesToScroll}
              slidesToShow={slidesToShow}
              cellAlign={cellAlign}
              classItems={mainCarouselClasses.liMainPagingItem}
              ulPagingItem={mainCarouselClasses.ulMainPagingItem}
              buttonItems={mainCarouselClasses.buttonMainPagingItem}
            />
          )
        }
      >
        {mainSlides.map((item) => {
          // console.log(item);
          const { imageUrl, title, description, route, _id } = item;
          return (
            <Link to={route} key={_id}>
              <img
                src={imageUrl}
                className={mainCarouselClasses.img}
                alt="Special proposition for customers"
              />
              <div className={mainCarouselClasses.textBlock}>
                <h3 className={mainCarouselClasses.title}>{title}</h3>
                <p className={mainCarouselClasses.description}>{description}</p>
                <Button
                  size="large"
                  className={mainCarouselClasses.showMore}
                  variant="contained"
                  color="secondary"
                  disableElevation
                >
                  Show more
                </Button>
              </div>
            </Link>
          )
        })}
      </Carousels>
    </div>
  )
}

const mapStateToProps = (state) => ({
  slides: state.slides.mainSlides
});

const mapDispatchToProps = (dispatch) => ({
  fetchSlides: (data) => dispatch(slidesToFetch(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(MainSlider)
