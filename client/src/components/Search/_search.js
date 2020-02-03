import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: 'relative',
  },
  search: {
    position: 'absolute',
    top: '113%',
    backgroundColor: 'white',
    width: '100%',
    left: '0',
  },
  [theme.breakpoints.up('md')]: {
    search: {
      zIndex: '1',
      left: '20%',
      top: '25%',
      maxWidth: '50%',
      position: 'absolute'
    },
  },
  [theme.breakpoints.up('lg')]: {
    search: {
      zIndex: '1',
      // left: '150px',
      width: 'auto',
      // position: 'relative'
    },
  },
  inputRoot: {
    border: '1px solid black',
    width: '100%',
    [theme.breakpoints.up('lg')]: {
      width: 'auto'
    }
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('lg')]: {
      width: 120,
      '&:focus': {
        width: 300,
      },
    },
  },
  searchIcon: {
    zIndex: '1',
    height: '100%',
    opacity: 0.5,
    position: 'absolute',
    marginLeft: theme.spacing(3)
  }
}));

export default useStyles