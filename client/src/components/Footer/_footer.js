import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(2)
  },
  title: {
    margin: 0
  },
  img: {
    paddingRight: theme.spacing(2)
  }
}));

export default useStyles;