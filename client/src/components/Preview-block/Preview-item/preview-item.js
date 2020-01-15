import React from 'react';
import { Divider, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import useStyles from './_preview-item';

export default function PreviewItem(props) {
  const classes = useStyles();
  const { item } = props;

  return (
    <>
      <img
        src={item.imageUrls[0]}
        className={classes.image}
        alt={item.name}
      />
      <Divider />
      <p className={classes.title}>{item.name}</p>
      <p className={classes.price}>
        €
        {item.specialPrice ? item.specialPrice : item.currentPrice}
      </p>
      <Divider />
      <Button onClick={() => console.log('work!')}>Remove</Button>
    </>
  )
}

PreviewItem.propTypes = {
  item: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.array, PropTypes.string]))
};

PreviewItem.defaultProps = {
  item: []
};