import React from 'react';
import { makeStyles } from '@material-ui/core';
// import '../../../../public/img/catalog/cooking/frying-pans/frying-pens.jpg';
import PropTypes from 'prop-types';

function BackgroundCatalog({ src }) {
  const useStyles = makeStyles((theme) => ({
    categoryTitleInner: {
      backgroundImage: ''
    },
    carousel: {
      paddingBottom: theme.spacing(2)
    },
    title: {
      textTransform: 'capitalize',
    }
  }));

  const classes = useStyles();
  const addBackgroundImg = (src) => ({
    backgroundImage: `url(${src})`
  });
  return (
    <div className={classes.categoryTitleInner} style={addBackgroundImg(src)}>
      <div>
        <h2 />
      </div>
    </div>
  )
}

export default BackgroundCatalog