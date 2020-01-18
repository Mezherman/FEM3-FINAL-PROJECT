import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import CollapsingItem from './collapsing-item';
import Grid from '@material-ui/core/Grid';
import SimpleTable from './table';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing(0),
    },
    MuiListItemGutters: {
      paddingLeft: theme.spacing(0),
    },
    highlights: {
      textAlign: 'justify'
    },
    description: {
      textAlign: 'justify'
    },
  }),
);

export default function ProductDetailCollapse({ data }) {
  const { myCustomParams } = data;
  const {productDescription, productHighlights} = myCustomParams;
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
        <SimpleTable data={data}/>
      </CollapsingItem>
    </List>
  );
}