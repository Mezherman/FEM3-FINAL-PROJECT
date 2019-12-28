import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    position: 'relative'
  },
  root: {
    '& .MuiOutlinedInput-root[class*="MuiOutlinedInput-root"]': {
      paddingLeft: '30px'
    }
  },
  searchIcon: {
    height: '100%',
    opacity: 0.5,
    position: 'absolute',
    paddingLeft: '7px'
  }
});

export default useStyles