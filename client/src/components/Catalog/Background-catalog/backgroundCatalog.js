import React from 'react';
import { makeStyles } from '@material-ui/core';
// import '../../../../public/img/catalog/cooking/frying-pans/frying-pens.jpg';
import PropTypes from 'prop-types';

function BackgroundCatalog() {
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
  return (
    <div className={classes.categoryTitleInner}>
      <div>
        <h2 />
      </div>
    </div>
  )
}

export default BackgroundCatalog