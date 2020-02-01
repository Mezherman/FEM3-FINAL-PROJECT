import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import PropTypes from 'prop-types';
import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import ListItemText from '@material-ui/core/ListItemText';
import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: '28px',
    color: theme.palette.primary.main,
  },
  text: {
    fontSize: '13px',
  },
  li: {
    paddingTop: theme.spacing(0),
  },

}),);

export default function FeatureItem ({ label }) {
  const classes = useStyles();
  return (
    <ListItem >
      <ListItemIcon className={classes.root}>
        <SvgIcon>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M0 12.116l2.053-1.897c2.401 1.162 3.924 2.045 6.622 3.969 5.073-5.757 8.426-8.678 14.657-12.555l.668 1.536c-5.139 4.484-8.902 9.479-14.321 19.198-3.343-3.936-5.574-6.446-9.679-10.251z" /></svg>
        </SvgIcon>
      </ListItemIcon>
      <ListItemText className={classes.text} primary={label} />
    </ListItem>
  )
}
FeatureItem.propTypes = {
  label: PropTypes.string.isRequired
};
