import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid/Grid'
import useStyles from './_image-grid';

export default function ImgGrid({ src }) {
  const classes = useStyles();

  const addBackgroundImg = (src) => ({
    backgroundImage: `url(${src})`
  });

  return (
    <Grid item xs={12} md={6} lg={9} container alignItems="stretch">
      <div className={classes.categoriesImg} style={addBackgroundImg(src)} />
    </Grid>
  )
}
ImgGrid.propTypes = {
  src: PropTypes.string.isRequired
}
