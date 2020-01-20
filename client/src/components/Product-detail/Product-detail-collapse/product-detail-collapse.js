import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import CollapsingItem from './collapsing-item';
import TableSpecification from '../Table-specification/table-specifications';

const useStyles = makeStyles((theme) => createStyles({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  highlights: {
    textAlign: 'justify',
    lineHeight: '1.5',
  },
  description: {
    textAlign: 'justify',
    lineHeight: '1.5',
  },
}),);

export default function ProductDetailCollapse({ data }) {
  const { myCustomParams } = data;
  const { productDescription, productHighlights } = myCustomParams;
  const classes = useStyles();

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      <CollapsingItem data={myCustomParams} label="Product Description" >
        <div className={classes.description}>
          {productDescription.map((text) => (<p key={text}>{text}</p>))}
        </div>
      </CollapsingItem>
      <CollapsingItem data={myCustomParams} label="Highlights" >
        <ul className={classes.highlights}>
          {productHighlights.map((text) => (<li key={text}>{text}</li>))}
        </ul>
      </CollapsingItem>
      <CollapsingItem data={myCustomParams} label="Specifications" >
        <TableSpecification data={data} />
      </CollapsingItem>
    </List>
  );
}

ProductDetailCollapse.propTypes = {
  data: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.boolean])).isRequired,
  myCustomParams: PropTypes.objectOf(PropTypes.string),
  // productDescription: PropTypes.arrayOf(PropTypes.string).isRequired,
  // productHighlights: PropTypes.arrayOf(PropTypes.string).isRequired,
};
ProductDetailCollapse.defaultProps = {
  myCustomParams: {},

}