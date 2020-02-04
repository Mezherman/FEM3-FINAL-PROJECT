import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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
      left: '7%',
      maxWidth: '660px',
    },
  },
  inputRoot: {
    border: '1px solid black',
    width: '100%',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    width: '100%'
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