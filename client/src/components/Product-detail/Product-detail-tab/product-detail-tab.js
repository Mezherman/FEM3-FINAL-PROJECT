import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { createStyles, makeStyles, Container } from '@material-ui/core';
import PropTypes from 'prop-types';
import TableSpecification from '../Table-specification/table-specifications';

const useStyles = makeStyles((theme) => createStyles({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  highlights: {
    fontSize: '1rem',
    textAlign: 'justify',
    lineHeight: '2',
    paddingBottom: theme.spacing(3)
  },
  description: {
    fontSize: '1rem',
    textAlign: 'justify',
    lineHeight: '2',
    paddingBottom: theme.spacing(3)
  },
}),);

export default function ProductDetailTab({ data }) {
  const { myCustomParams } = data;
  const { productDescription, productHighlights } = myCustomParams;
  const classes = useStyles();
  return (
    <>
      <Tabs>
        <TabList>
          <Tab><h4>Highlights</h4></Tab>
          <Tab><h4>Product Description</h4></Tab>
          <Tab><h4>Specifications</h4></Tab>
        </TabList>

        <TabPanel>
          <ul className={classes.highlights}>
            {productHighlights.map((text) => (<li key={text}>{text}</li>))}
          </ul>
        </TabPanel>
        <TabPanel>
          <div className={classes.description}>
            {productDescription.map((text) => (<p key={text}>{text}</p>))}
          </div>
        </TabPanel>
        <TabPanel>
          <TableSpecification data={data} />
        </TabPanel>
      </Tabs>
    </>
  )
}

ProductDetailTab.propTypes = {
  data: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.boolean, PropTypes.symbol])).isRequired,
};