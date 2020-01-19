import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { createStyles, makeStyles } from '@material-ui/core';
import TableSpecification from '../Table-specification/table-specifications';
import PropTypes from 'prop-types';

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

export default function ProductDetailTab({ data }) {
  const { myCustomParams } = data;
  const { productDescription, productHighlights } = myCustomParams;
  const classes = useStyles();
  return (
    <>
      <Tabs>
        <TabList>
          <Tab>Product Description</Tab>
          <Tab>Highlights</Tab>
          <Tab>Specifications</Tab>
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