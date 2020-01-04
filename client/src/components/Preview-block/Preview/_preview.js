import { makeStyles } from '@material-ui/core/styles';
import Variables from '../../Variables/variables';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column-reverse',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      alignItems: 'start'
    }
  },
  products: {
    width: '100%',
    [theme.breakpoints.up('smd')]: {
      width: '50%'
    }
  },
  container: {
    display: 'flex',
    position: 'absolute',
    // zIndex: 2,
    left: 0,
    right: 0
  },
  miniCart: {
    // width: '50%',
    padding: theme.spacing(0, 1),
    [theme.breakpoints.up('md')]: {
      width: '75%'
    },
    [theme.breakpoints.up('lg')]: {
      width: '50%'
    },
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