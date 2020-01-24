import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    textTransform: 'uppercase',
    color: theme.palette.text.primary,
    '& li > a': {
      // fontSize: '14px',
      textDecoration: 'none',
      textTransform: 'uppercase',
      color: theme.palette.text.primary,
      '&:hover': {
        color: theme.palette.background.primary,
        paddingLeft: theme.spacing(1),
      }
    },
  },
  menuItem: {
color: 'red',
  },
  category: {
    color: 'red',
    fontWeight: '500',
  }
}))

export default useStyles
