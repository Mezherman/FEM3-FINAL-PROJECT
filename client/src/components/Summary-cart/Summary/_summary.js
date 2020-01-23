import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: '0!important',
    paddingRight: '0!important',
    backgroundColor: theme.palette.background.primary,
  }
}));
export default useStyles;