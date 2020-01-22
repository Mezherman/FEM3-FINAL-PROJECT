import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Carousels from '../Carousel/carousel';
import PagingDots from '../Carousel/pagingDots';
import useStylesCarousel from '../Carousel/_carousel';
import useStylesMainCarousel from './_mainCarousel';

axios.defaults.baseURL = 'http://localhost:5000';

axios.defaults.headers.common.Authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMTYwMTI2MTYyZDcyMjRkOGU1MjJjOCIsImZpcnN0TmFtZSI6IlZsYWQiLCJsYXN0TmFtZSI6Ik1lemhlcml0c2t5aSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTU3ODk5Mjc5OSwiZXhwIjoxNTc5MDI4Nzk5fQ.DJHhj4JXSbmBO-zDmx6ia0USBGQpQ7ol7cEbm4GkFsk';

export default function MainSlider() {
  const [slides, setSlides] = useState([]);

  const classes = useStylesCarousel();
  const mainCarouselClasses = useStylesMainCarousel();

  useEffect(() => {
    axios
      .get('/slides')
      .then((slidesToShow) => setSlides(slidesToShow.data))
      .catch((err) => {
        console.log(err)
      });
  }, []);

  return (
    <div className={classes.carouselContainer}>
      <Carousels
        isProductSlider={false}
        autoPlay={true}
        // className={mainCarouselClasses.mainCarousel}
        autoplayInterval={2000}
        wrapAround
        slidesToShow={1}
        dragging
        renderCenterLeftControls={({ previousSlide }) => (
          // eslint-disable-next-line max-len
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
          // <div className="arrow-prev arrows-control" onClick={previousSlide}>
          // <div className="arrow-prev-top" />
          //  <div className="arrow-prev-bottom" />
          // </div>
          <div className={`${mainCarouselClasses.mainArrowsControl} ${mainCarouselClasses.mainArrowPrev}`} onClick={previousSlide}>
            <div className={`${classes.arrowPrevTopBottom} ${mainCarouselClasses.mainArrowPrevTop}`} />
            <div className={`${classes.arrowPrevTopBottom} ${classes.arrowsTopBottom}`} />
          </div>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          // eslint-disable-next-line max-len
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
          <div className={`${mainCarouselClasses.mainArrowsControl} ${mainCarouselClasses.mainArrowNext}`} onClick={nextSlide}>
            <div className={`${classes.arrowNextTop} ${classes.arrowNextTopBottom}`} />
            <div className={`${classes.arrowNextBottom} ${classes.arrowNextTopBottom}`} />
          </div>
        )}
        renderBottomCenterControls={
          ({
            currentSlide, goToSlide, slideCount, slidesToScroll, slidesToShow, cellAlign
            // eslint-disable-next-line max-len
          }) => (
            // eslint-disable-next-line no-console,max-len
            <PagingDots currentSlide={currentSlide} goToSlide={goToSlide} slideCount={slideCount} slidesToScroll={slidesToScroll} slidesToShow={slidesToShow} cellAlign={cellAlign} classItems={classes.liMainPagingItem} ulPagingItem={classes.ulMainPagingItem} buttonItems={classes.buttonMainPagingItem} />
          )
        }
      >
        {slides.map((item) => {
          // console.log(item);
          const { imageUrl, title, description, route, _id } = item;
          return (
            <Link to={route} key={_id} >
              <img src={imageUrl} className={mainCarouselClasses.img} alt="Special proposition for customers" />
              <div className={mainCarouselClasses.textBlock}>
                <h3 className={mainCarouselClasses.title}>{title}</h3>
                <p className={mainCarouselClasses.description}>{description}</p>
              </div>
            </Link>
          )
        })}
        {/* <img */}
        {/*  src="https://www.wmf.com/media/flexslider/Teaser_1170x570px_WMF_Dish_ohneText-b_hne.jpg" */}
        {/*  alt="Product" */}
        {/*  className="image-carousel image-carousel-1" */}
        {/* /> */}
        {/* <img */}
        {/*  src="https://ae01.alicdn.com/kf/HTB1PBKgX9SD3KVjSZFKq6z10VXaE/XITUO-3-5-5-8-3.jpg_q50.jpg" */}
        {/*  alt="Product" */}
        {/*  className="image-carousel image-carousel-1" */}
        {/* /> */}
        {/* <img */}
        {/*  src="https://cangshancutlery.com/content/images/thumbs/000/0005124_cangshan-1021387-tai-triangle-walnut-wood-knife-block-one-slot.jpeg" */}
        {/*  alt="Product" */}
        {/*  className="image-carousel image-carousel-1" */}
        {/* /> */}
        {/* <img */}
        {/*  src="https://www.wmf.com/media/flexslider/impulse-buehne.jpg" */}
        {/*  alt="Product" */}
        {/*  className="image-carousel image-carousel-2" */}
        {/* /> */}
        {/* <img */}
        {/*  src="https://www.wmf.com/media/flexslider/ProfessionalCoffeeMachines_Slider_1170x500_1.jpg" */}
        {/*  alt="Product" */}
        {/*  className="image-carousel image-carousel-3" */}
        {/* /> */}
      </Carousels>
    </div>
  )
}
