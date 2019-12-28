import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    '& .MuiOutlinedInput-root[class*="MuiOutlinedInput-root"]': {
      paddingLeft: '30px'
    }
  },
  container: {
    position: 'relative'
  },
  searchIcon: {
    height: '100%',
    opacity: 0.5,
    position: 'absolute',
    paddingLeft: '7px'
  }
});

export default useStyles