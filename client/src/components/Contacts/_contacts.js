import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  minHeight: {
    minHeight: '52vh'
  },
  container: {
    paddingTop: theme.spacing(2)
  },
  block: {
    display: 'block'
  },
  img: {
    width: '25px'
  }
}));

export default useStyles;