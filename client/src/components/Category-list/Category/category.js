import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid/Grid';
import withWidth from '@material-ui/core/withWidth/withWidth';
import { Button, Typography } from '@material-ui/core';
import ImgGrid from '../Image-grid/image-grid';
import RoutesName from '../../../routes-list';

import useStyles from './_category';

function Category ({ data, index, width }) {
  const classes = useStyles();

  const ifBreakpointSmall = ['xs', 'sm'].includes(width);
  const getPaddingClassByIndex = (i) => {
    if (!ifBreakpointSmall) {
      return i % 2 === 0 ? classes.p_r_4 : classes.p_l_4;
    }
    return '';
  };

  const descriptionClassess = `${classes.categoriesDescription} ${getPaddingClassByIndex(index)}`

  const description = (
    <Grid item sm={12} md={6} lg={3} container direction="column" className={descriptionClassess}>
      <Typography variant="h3" className={classes.categoriesTitle}>
        {data.name ?? '' }
      </Typography>
      <Typography variant="body1" className={classes.categoriesDesc}>
        {data.description ?? ''}
      </Typography>
      <Link to={`${RoutesName.products}/${data.id}`} className={classes.link}>
        <Button variant="contained" color="secondary" className={classes.categoriesBtn}>
            Learn more
        </Button>
      </Link>
    </Grid>
  );

  return (
    <Grid container spacing={0} key={data.name} className={`${classes.categoriesItem} categories_item`} >
      {ifBreakpointSmall || index % 2 !== 0 ? <ImgGrid src={data.imgUrl} /> : ''}
      {description}
      {ifBreakpointSmall || index % 2 !== 0 ? '' : <ImgGrid src={data.imgUrl} />}
    </Grid>
  )
}
export default withWidth()(Category);

Category.propTypes = {
  data: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.boolean, PropTypes.object, PropTypes.array])
  ).isRequired,
  index: PropTypes.number.isRequired,
  width: PropTypes.string.isRequired
}