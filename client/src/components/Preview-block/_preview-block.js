import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    position: 'absolute',
    zIndex: 2,
    left: 0,
    right: 0,
    top: '5%',
  },
  paper: {
    width: '100%'
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(0, 1),
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(0),
    }
  },
  text: {
    paddingLeft: theme.spacing(2)
  },
  wrapper: {
    margin: '0 auto',
    maxWidth: '1200px'
  },
  empty: {
    padding: theme.spacing(2, 1),
    textAlign: 'center',
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(2, 0)
    }
  }
}));

export default useStyles;