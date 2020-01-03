import { makeStyles } from '@material-ui/core/styles';
import Variables from '../../Variables/variables';

const useStyles = makeStyles((theme) => ({
  allProducts: {
    display: 'flex'
  },
  container: {
    display: 'flex',
    position: 'absolute',
    // zIndex: 2,
    left: 0,
    right: 0
  },
  products: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  miniCart: {
    width: '50%',
    padding: theme.spacing(0, 1)
  },
  items: {
    color: Variables.colors.btnMainBg,
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