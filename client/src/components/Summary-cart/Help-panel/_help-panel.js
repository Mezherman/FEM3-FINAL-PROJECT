import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: 'none',
    // marginTop: '15px',
  },
  heading: {
    padding: '0',
    // fontSize: theme.typography.pxToRem(15),
    // fontWeight: theme.typography.fontWeightRegular,
  },
  bold: {
    fontWeight: 'bold'
  },
  detail: {
    fontSize: '1.1rem',
    display: 'block',
    '&>*': {
      padding: '5px 0',
    }
  }
}));
export default useStyles;