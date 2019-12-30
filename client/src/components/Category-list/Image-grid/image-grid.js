import React from 'react'
import Grid from '@material-ui/core/Grid/Grid'
import useStyles from './styles';

export default function ImgGrid(props) {
  const { src } = props;
  const classes = useStyles();

  const addBackgroundImg = (src) => ({
    backgroundImage: `url(${src})`
  });

  return (
    <Grid item sm={12} md={6} lg={9} container alignItems="stretch">
      <div className={classes.categories_img} style={addBackgroundImg(src)} />
    </Grid>
  )
}
