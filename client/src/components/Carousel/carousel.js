import React, { useState } from 'react';
import Carousel from 'nuka-carousel';
import PropTypes from 'prop-types';

import './сarousel.scss';

export default function Carousels (props) {
  const [slideIndexNumber, setSlideIndex] = useState(0);

  const {
    autoPlay,
    autoplayInterval,
    wrapAround,
    slidesToShow,
    slidesToScroll,
    cellSpacing,
    transitionMode,
    dragging,
    children,
    renderCenterLeftControls,
    renderCenterRightControls,
    renderBottomCenterControls,
    className
  } = props;

  return (
    <Carousel
      autoplay={autoPlay}
      autoplayInterval={autoplayInterval}
      wrapAround={wrapAround}
      cellSpacing={cellSpacing}
      slidesToScroll={slidesToScroll}
      slidesToShow={slidesToShow}
      // slideIndex={console.log(slideIndexNumber)}
      afterSlide={(slideIndex) => setSlideIndex({ slideIndex })}
      transitionMode={transitionMode}
      dragging={dragging}
      className={className}
      renderCenterLeftControls={renderCenterLeftControls}
      renderCenterRightControls={renderCenterRightControls}
      renderBottomCenterControls={renderBottomCenterControls}
    >
      {children}
    </Carousel>
  );
}

Carousels.propTypes = {
  autoPlay: PropTypes.bool,
  autoplayInterval: PropTypes.number,
  wrapAround: PropTypes.bool,
  slidesToShow: PropTypes.number.isRequired,
  transitionMode: PropTypes.string,
  dragging: PropTypes.bool,
  children: PropTypes.node,
  renderCenterLeftControls: PropTypes.func,
  renderCenterRightControls: PropTypes.func,
  renderBottomCenterControls: PropTypes.func,
  className: PropTypes.string,
  slidesToScroll: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['auto'])]),
  cellSpacing: PropTypes.number
};

Carousels.defaultProps = {
  renderBottomCenterControls: () => {},
  children: <div />,
  autoPlay: false,
  transitionMode: 'fade',
  dragging: true,
  autoplayInterval: 2000,
  wrapAround: true,
  className: '',
  slidesToScroll: 'auto',
  cellSpacing: 2,
  // eslint-disable-next-line react/prop-types
  renderCenterLeftControls ({ previousSlide }) {
    return (
      // eslint-disable-next-line max-len
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
      <div
        className="arrow-prev"
        onClick={previousSlide}
      >
        <div className="arrow-prev-top" />
        <div className="arrow-prev-bottom" />
      </div>
    )
  },
  // eslint-disable-next-line react/prop-types
  renderCenterRightControls ({ nextSlide }) {
    return (
      // eslint-disable-next-line max-len
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
      <div
        className="arrow-next"
        onClick={nextSlide}
      >
        <div className="arrow-next-top" />
        <div className="arrow-next-bottom" />
      </div>
    )
  }
};
