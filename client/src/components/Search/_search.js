import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiOutlinedInput-root[class*="MuiOutlinedInput-root"]': {
      paddingLeft: theme.spacing(4),
    }
  },
  container: {
    position: 'absolute',
    top: '0',
    display: 'none'
    // right: '100px'
  },
  searchIcon: {
    height: '100%',
    opacity: 0.5,
    position: 'absolute',
    paddingLeft: theme.spacing(1)
  }
}));

export default useStyles