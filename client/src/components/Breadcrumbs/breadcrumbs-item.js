import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

import { MenuItem } from '@material-ui/core';
import RoutesName from '../../routes-list';

import useStyles from './_breadcrumbs';

const BreadcrumbsItem = ({ route, text }) => {
  const classes = useStyles();

  return (
    <Link to={`${RoutesName.products}/${route}`} className={classes.item}>
      <MenuItem className={classes.menuItem} component="span">
        {text}
      </MenuItem>
    </Link>
  )
};

export default BreadcrumbsItem;

BreadcrumbsItem.propTypes = {
  route: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};