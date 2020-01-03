import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    position: 'absolute',
    zIndex: 2,
    left: 0,
    right: 0,
  },
  paper: {
    margin: theme.spacing(1),
    width: '100%'
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(0, 2),
    fontWeight: 'bold'
  }
}));

export default useStyles;