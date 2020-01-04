import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  products: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    justifyContent: 'space-between',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    }
  },
  product: {
    width: '50%',
    display: 'flex',
    margin: '0 auto',
    flexDirection: 'column',
    padding: theme.spacing(0, 1),
    [theme.breakpoints.up('md')]: {
      width: '100%',
    }
  },
  text: {
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      textAlign: 'left'
    }
  },
  title: {
    textAlign: 'center'
  },
  price: {
    fontWeight: 'bold'
  },
  image: {
    padding: theme.spacing(1, 0)
  },
  button: {
    // textAlign: 'right',
    cursor: 'pointer',
    fontWeight: 'bold',
    padding: theme.spacing(1, 0),
    [theme.breakpoints.up('md')]: {
      textAlign: 'right'
    }
  }
}));

export default useStyles;