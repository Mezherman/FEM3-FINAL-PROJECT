import React from 'react'
import Grid from '@material-ui/core/Grid/Grid'
import { Button, Typography } from '@material-ui/core'
import withWidth from '@material-ui/core/withWidth/withWidth'
import useStyles from './styles'
import ProductCarusel from '../Product-carusel/product-carusel'
import ImgGrid from '../Image-grid/image-grid'

function Category (props) {
  const { data, index } = props;
  const classes = useStyles();

  const ifBreakpointSmall = ['xs', 'sm'].includes(props.width);
  const getPaddingClassByIndex = (i) => {
    if (!ifBreakpointSmall) {
      return i % 2 === 0 ? classes.p_r_4 : classes.p_l_4;
    }
    return '';
  };

  const description = (
    <Grid item sm={12} md={6} lg={3} container direction="column" className={`${classes.categories_description} ${getPaddingClassByIndex(index)}`}>
      <Typography variant="h3" className={classes.categories_title}>
        {data.name ?? '' }
      </Typography>
      <Typography variant="body1" className={classes.categories_desc}>
        {data.description ?? ''}
      </Typography>
      <Button variant="contained" color="secondary" className={classes.categories_btn}>
        Learn more
      </Button>
      {data.products && data.products.length > 0 ? (<ProductCarusel products={data.products} />) : '' }
    </Grid>
  );

  return (
    <Grid container spacing={0} key={data.name} className={`${classes.categories_item} categories_item`} >
      {ifBreakpointSmall || index % 2 !== 0 ? <ImgGrid src={data.imgUrl} /> : ''}
      {description}
      {ifBreakpointSmall || index % 2 !== 0 ? '' : <ImgGrid src={data.imgUrl} />}
    </Grid>
  )
}
export default withWidth()(Category);