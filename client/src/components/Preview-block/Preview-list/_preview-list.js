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
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      height: '3rem'
    }
  },
  price: {
    fontWeight: 'bold',
    paddingLeft: theme.spacing(1)
  },
  image: {
    padding: theme.spacing(1, 0),
    [theme.breakpoints.only('md')]: {
      height: 200
    },
  },
  button: {
    cursor: 'pointer',
    fontWeight: 'bold',
    padding: theme.spacing(1, 0),
    [theme.breakpoints.up('md')]: {
      textAlign: 'right'
    }
  }
}));

export default useStyles;