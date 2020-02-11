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
      zIndex: '5',
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
      padding: theme.spacing(3, 3, 1, 0),
      top: '-13%',
    },
    searchIcon: {
      top: '8px'
    }
  },
  [theme.breakpoints.up('xl')]: {
    search: {
      maxWidth: '800px',
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