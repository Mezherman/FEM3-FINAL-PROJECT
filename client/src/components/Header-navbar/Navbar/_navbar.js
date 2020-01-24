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
  headerMenuList: {
    position: 'relative',
    display: 'inline-flex',
    listStyleType: 'none',
    margin: 0,
    padding: 0,
  },
  headerMenuListHyperlink: {
    padding: '10px',
    color: theme.palette.text.primary,
    textDecoration: 'none',
    '&:hover': {
      color: theme.palette.secondary.dark
    }
  },
  headerMenuListItem: {
    color: theme.palette.primary.main,
    fontWeight: 'bold',
    fontSize: '16px'
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
