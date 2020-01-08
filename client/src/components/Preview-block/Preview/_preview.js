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
  // products: {
  //   width: '100%',
  //   [theme.breakpoints.up('sm')]: {
  //     width: '50%'
  //   },
  //   [theme.breakpoints.up('md')]: {
  //     width: '70%'
  //   },
  //   [theme.breakpoints.up('xl')]: {
  //     width: '80%'
  //   },
  // },
  container: {
    display: 'flex',
    position: 'absolute',
    left: 0,
    right: 0
  },
  miniCart: {
    padding: theme.spacing(0, 1, 2),
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
  },
  mobile: {
    display: 'block',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    },
  },
  desktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block'
    },
  }
}));

export default useStyles;