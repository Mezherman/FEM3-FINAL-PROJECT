import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, connect } from 'react-redux';
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import Carousels from '../Carousel/carousel';
import PagingDots from '../Carousel/pagingDots';
import useStylesCarousel from '../Carousel/_carousel';
import useStylesMainCarousel from './_mainCarousel';
import getMainSlides from '../../services/getMainSlides';
import slidesToFetch from '../../redux/actions/slides';

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
        autoplayInterval={2000}
        wrapAround
        slidesToShow={1}
        dragging
        renderBottomCenterControls={
          ({
            currentSlide, goToSlide, slideCount, slidesToScroll, slidesToShow, cellAlign
          }) => (
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
        {mainSlides.length > 0 ? mainSlides.map((item) => {
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
        }) : () => <div>Sorry</div> }
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

MainSlider.propTypes = {
  fetchSlides: PropTypes.func.isRequired,
};

// MainSlider.defaultProps = {
//   fetchSlides: () => {
//   }
// };
