import React from 'react';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import StarBorder from '@material-ui/core/SvgIcon/SvgIcon';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ListItemText from '@material-ui/core/ListItemText';
import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => createStyles({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}),);

export default function CollapsingItem( props ) {
 const {data, label, children} = props
  console.log(children);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <ListItem button onClick={handleClick}>

        <ListItemText primary={label} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>

      <Collapse
        in={open}
        timeout="auto"
        unmountOnExit
        transition="height 800ms cubic-bezier(0.4, 0, 0.2, 1)"

      >
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemText
              primary={ children }
            />
          </ListItem>
        </List>
      </Collapse>
    </>
  )
}