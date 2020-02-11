import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  footerWrapper: {
    padding: theme.spacing(2, 0),
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
  },
  container: {
    marginTop: theme.spacing(2)
  },
}));

export default useStyles;