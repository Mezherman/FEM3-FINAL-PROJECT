import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  summary: {
    paddingLeft: '0!important',
    paddingRight: '0!important',
    backgroundColor: theme.palette.background.primary,
    [theme.breakpoints.down('xs')]: {
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      paddingTop: '0!important',
      paddingBottom: '0!important',
    },
  },

}));
export default useStyles;