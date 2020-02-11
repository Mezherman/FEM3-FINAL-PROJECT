import React, { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { createStyles, makeStyles, Container, Badge, IconButton } from '@material-ui/core';
import PropTypes from 'prop-types';

import TableSpecification from '../Table-specification/table-specifications';
import Comment from '../../Comment/comment';

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
  badge: {
    '& .MuiBadge-anchorOriginTopRightRectangle': {
      top: 12,
      right: 2
    }
  }
}),);

export default function ProductDetailTab({ data }) {
  const { myCustomParams, _id } = data;
  const { productDescription, productHighlights } = myCustomParams;
  const classes = useStyles();
  const commentsLength = useSelector((state) => state.commentsReducer.commentsList.length.toString());

  useEffect(() => {
    console.log(commentsLength);
  }, [commentsLength]);
  return (
    <>
      <Tabs>
        <TabList>
          <Tab><h4>Highlights</h4></Tab>
          <Tab><h4>Product Description</h4></Tab>
          <Tab><h4>Specifications</h4></Tab>
          <Tab>
            <Badge badgeContent={commentsLength} color="error" className={classes.badge}>
              <h4>Comments</h4>
            </Badge>
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
  data: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.boolean, PropTypes.symbol])).isRequired,
};
