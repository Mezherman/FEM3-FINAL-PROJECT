import React from 'react';
import PropTypes from 'prop-types';

export default function PagingDots (props) {
  const {
    currentSlide,
    goToSlide,
    slideCount,
    slidesToScroll,
    slidesToShow,
    cellAlign,
    classItems,
    classItemsActive,
    containerID,
  } = props;
  // eslint-disable-next-line no-shadow
  function getDotIndexes (slideCount, slidesToScroll, slidesToShow, cellAlign) {
    const dotIndexes = [];
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
  const indexes = getDotIndexes(slideCount, slidesToScroll, slidesToShow, cellAlign);
  return (
    <ul id={containerID}>
      {indexes.map((index) => (
        <li
          key={index}
          className={currentSlide === index ? classItemsActive : classItems}
        >
          <button
            type="button"
            onClick={goToSlide.bind(null, index)}
            aria-label={'slide '.concat(index + 1, ' bullet')}
          >
            {index + 1}
          </button>
        </li>
      ))}
    </ul>
  )
}

PagingDots.propTypes = {
  slideCount: PropTypes.func.isRequired,
  slidesToScroll: PropTypes.func.isRequired,
  slidesToShow: PropTypes.func.isRequired,
  cellAlign: PropTypes.func.isRequired,
  currentSlide: PropTypes.func.isRequired,
  goToSlide: PropTypes.func.isRequired,
  classItems: PropTypes.string.isRequired,
  classItemsActive: PropTypes.string.isRequired,
  containerID: PropTypes.string.isRequired
};

// PagingDots.defaultProps = {}
