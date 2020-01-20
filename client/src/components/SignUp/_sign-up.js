import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

  paper: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(2),
  },
  title: {
    fontSize: '32px',
    [theme.breakpoints.up('md')]: {
      marginBottom: 15
    }
  },
  dividerSignUp: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'inline',
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      height: 455,
      alignSelf: 'flex-end'
    }
  }
}));

export default useStyles;
