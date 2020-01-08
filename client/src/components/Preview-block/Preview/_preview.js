import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      alignItems: 'start'
    }
  },
  products: {
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '50%'
    },
    [theme.breakpoints.up('md')]: {
      width: '70%'
    },
    [theme.breakpoints.up('lg')]: {
      width: '80%'
    },
  },
  container: {
    display: 'flex',
    position: 'absolute',
    left: 0,
    right: 0
  },
  miniCart: {
    padding: theme.spacing(0, 1, 2),
    [theme.breakpoints.up('md')]: {
      width: '75%'
    },
    [theme.breakpoints.up('lg')]: {
      width: '50%'
    },
  },
  items: {
    color: theme.palette.primary.main,
    padding: theme.spacing(0, 1)
  },
  price: {
    display: 'flex',
    justifyContent: 'space-between',
    fontWeight: 'bold',
    padding: theme.spacing(3, 0)
  },
  button: {
    margin: theme.spacing(2, 0),
  }
}));

export default useStyles;