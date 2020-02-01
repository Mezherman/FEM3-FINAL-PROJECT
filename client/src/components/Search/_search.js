import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: 'relative',
  },
  searchInput: {
    position: 'absolute',
    // zIndex: '1111',
    minWidth: '200px',
    top: '113%',
    backgroundColor: 'white',
    width: '100%',
    left: '0',
    // left: '150px',
  },
  [theme.breakpoints.up('md')]: {
    searchInput: {
      position: 'absolute',
      zIndex: '1111',
      minWidth: '200px',
      left: '150px',
      top: '18%',
      width: '50%'
    },
  },
  root: {
    '& .MuiOutlinedInput-root[class*="MuiOutlinedInput-root"]': {
      paddingLeft: theme.spacing(4),
    }
  },

  searchIcon: {
    height: '100%',
    opacity: 0.5,
    position: 'absolute',
    paddingLeft: theme.spacing(1)
  }
}));

export default useStyles