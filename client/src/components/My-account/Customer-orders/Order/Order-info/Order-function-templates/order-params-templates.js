import { Divider, Grid } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import useStylesOrderItem from '../../../Order-list/_order-list'

const OrderParamsTemplates = ({ name, value, classContainer, classTitle, style }) => {
  const classes = useStylesOrderItem();
  return (
    <Grid
      component="div"
      item
      container
      className={classContainer}
    >
      <span className={classTitle}>{name}</span>
      &nbsp;
      <span>{value}</span>
      <Divider className={classes.hiddenCollapse} style={style} orientation="horizontal" variant="middle" component="div" />
    </Grid>
  )
};

export default OrderParamsTemplates;

OrderParamsTemplates.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),
};
OrderParamsTemplates.defaultProps = {
  className: '',
  style: {},
};
