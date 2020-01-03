import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  product: {
    width: '20%',
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(0, 1)
  },
  title: {
    height: '50px'
  },
  price: {
    fontWeight: 'bold'
  },
  image: {
    padding: theme.spacing(1, 0)
  },
  button: {
    textAlign: 'right',
    cursor: 'pointer',
    fontWeight: 'bold',
    padding: theme.spacing(1, 0)
  }
}));

export default useStyles;