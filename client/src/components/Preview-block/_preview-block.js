import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    position: 'absolute',
    zIndex: 2,
    left: 0,
    right: 0,
    top: '5%'
  },
  paper: {
    width: '100%'
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  wrapper: {
    margin: '0 auto',
    maxWidth: '1200px'
  }
});

export default useStyles;