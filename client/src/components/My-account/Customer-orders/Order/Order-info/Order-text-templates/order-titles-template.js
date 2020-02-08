import { Grid } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';

const OrderTitlesTemplate = ({ value, xs, sm, md, justify, className }) => (
  <Grid
    component="div"
    item
    container
    xs={xs}
    sm={sm}
    md={md}
    justify={justify}
    className={className}
  >
    {value}
  </Grid>
);

export default OrderTitlesTemplate;

OrderTitlesTemplate.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string,
  justify: PropTypes.string,
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
};
OrderTitlesTemplate.defaultProps = {
  justify: '',
  className: '',
  xs: 12,
  sm: 3,
  md: 3,
};
