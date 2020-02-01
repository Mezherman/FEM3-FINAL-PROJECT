import React from 'react'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
  main: {
    justify: 'flex-end',
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'center',
    }
  },
  root: {
    border: '1px solid rgba(0, 0, 0, 0.42)',
    borderRadius: '6px',
    textAlign: 'center',
    '&:before': {
      border: 'none',
    },
    '& select': {
      paddingLeft: '12px',
      paddingRight: '12px!important',
    }
  },
  increase: {
    paddingLeft: '12px',
    paddingRight: '12px',
    cursor: 'pointer',
    lineHeight: '35px'
  }
}));

export default useStyles;