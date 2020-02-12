import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import TableSpecification from '../Table-specification/table-specifications';
import Comment from '../../Comment/comment';

import 'react-tabs/style/react-tabs.css';
import useStyles from './_product-detail-tab';

export default function ProductDetailTab({ data }) {
  const { myCustomParams } = data;
  const { productDescription, productHighlights } = myCustomParams;
  const commentsQuantity = useSelector((state) => state.commentsReducer.commentsList.length);

  const classes = useStyles();
  return (
    <>
      <Tabs>
        <TabList>
          <Tab><h4>Highlights</h4></Tab>
          <Tab><h4>Product Description</h4></Tab>
          <Tab><h4>Specifications</h4></Tab>
          <Tab><h4>Comments</h4>
            {/*<Badge badgeContent={commentsQuantity.toString()} color="error" className={classes.badge}>*/}
            {/*  <h4>*/}
            {/*    Comments*/}
            {/*  </h4>*/}
            {/*</Badge>*/}
          </Tab>
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
        <TabPanel>
          <Comment />
        </TabPanel>

      </Tabs>
    </>
  )
}

ProductDetailTab.propTypes = {
  data: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.symbol,
    PropTypes.array,
    PropTypes.number,
    PropTypes.object
  ])).isRequired,
};
