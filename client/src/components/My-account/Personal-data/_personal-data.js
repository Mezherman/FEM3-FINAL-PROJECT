import { makeStyles } from '@material-ui/core/styles';

const usePdstyles = makeStyles((theme) => ({
  button: {
    marginBottom: theme.spacing(1),
    // fontSize: '12px',
    cursor: 'pointer',
    textDecorationLine: 'underline',
    textDecorationStyle: 'dashed',
    textUnderlinePosition: 'under',
  },
  divider: {
    position: 'absolute',
    height: theme.spacing(16),
    top: theme.spacing(0.5),
    left: theme.spacing(-2),
  },

  title: {
    marginTop: theme.spacing(3),
  },

  header: {
    marginTop: theme.spacing(1),
  },

  link: {
    textDecoration: 'none',
    // color: theme.palette.text.primary,
  },

  userData: {
    padding: theme.spacing(0.5, 1),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0.5, 1.5),
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(0.5, 2),
    },
    '&:hover': {
      backgroundColor: theme.palette.background.secondary
    },
  },

  linkContainer: {
    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing(2, 0, 1, 6),
      alignItems: 'flex-start',
    },
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(2, 0, 1, 10),
    },
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  },

  buttonsContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    margin: theme.spacing(1, 0)
  },

  emailForm: {
    marginTop: theme.spacing(1)
  },

  logout: {
    color: theme.palette.error.dark
  },

  passwordInputs: {
    margin: theme.spacing(1, 1, 0)
  },
}
));

export default usePdstyles;
