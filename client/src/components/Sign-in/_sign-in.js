import { makeStyles } from '@material-ui/core';

const useStylesSingIn = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.contrastText,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  labelText: {
    color: theme.palette.secondary.dark,
  },
  checkBox: {
    color: theme.palette.primary.main,
  },
  submit: {
    margin: theme.spacing(2, 0, 2),
  },
  text: {
    color: theme.palette.secondary.dark,
    display: 'block',
    textAlign: 'center',
    cursor: 'pointer',
  },
  errorText: {
    color: theme.palette.error.dark,
  },

}));

export default useStylesSingIn;
